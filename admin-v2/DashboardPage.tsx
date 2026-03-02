import { useEffect, useState } from 'react';
import { FileText, Users, Mail, PenTool, Loader2 } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

interface ActivityItem {
    id: string;
    type: 'blog' | 'lead';
    title: string;
    description: string;
    created_at: string;
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const then = new Date(dateStr);
    const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return then.toLocaleDateString();
}

export function DashboardPage() {
    const [totalPosts, setTotalPosts] = useState(0);
    const [publishedPosts, setPublishedPosts] = useState(0);
    const [draftPosts, setDraftPosts] = useState(0);
    const [totalLeads, setTotalLeads] = useState(0);
    const [activities, setActivities] = useState<ActivityItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMetrics() {
            try {
                const [
                    { count: total },
                    { count: published },
                    { count: drafts },
                    { count: leads },
                ] = await Promise.all([
                    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
                    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
                    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
                    supabase.from('leads').select('*', { count: 'exact', head: true }),
                ]);

                setTotalPosts(total || 0);
                setPublishedPosts(published || 0);
                setDraftPosts(drafts || 0);
                setTotalLeads(leads || 0);

                // Fetch recent activity
                const { data: recentPosts } = await supabase
                    .from('blog_posts')
                    .select('id, title, status, created_at')
                    .order('created_at', { ascending: false })
                    .limit(5);

                const { data: recentLeads } = await supabase
                    .from('leads')
                    .select('id, name, email, created_at')
                    .order('created_at', { ascending: false })
                    .limit(5);

                const blogItems: ActivityItem[] = (recentPosts || []).map((p: any) => ({
                    id: p.id,
                    type: 'blog',
                    title: p.status === 'published' ? 'Post Published' : 'Draft Created',
                    description: p.title,
                    created_at: p.created_at,
                }));

                const leadItems: ActivityItem[] = (recentLeads || []).map((l: any) => ({
                    id: l.id,
                    type: 'lead',
                    title: 'New Lead',
                    description: `${l.name || 'Unknown'} — ${l.email}`,
                    created_at: l.created_at,
                }));

                const combined = [...blogItems, ...leadItems]
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                    .slice(0, 8);

                setActivities(combined);
            } catch (err) {
                console.error('Error fetching dashboard metrics:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchMetrics();
    }, []);

    if (loading) {
        return (
            <div className="ka-spinner">
                <Loader2 />
            </div>
        );
    }

    return (
        <div>
            <div className="ka-page-header">
                <h1 className="ka-page-title">Dashboard</h1>
            </div>

            {/* Metrics */}
            <div className="ka-metrics-grid">
                <div className="ka-metric">
                    <div className="ka-metric-header">
                        <span className="ka-metric-label">Total Blog Posts</span>
                        <div className="ka-metric-icon"><FileText /></div>
                    </div>
                    <div className="ka-metric-value">{totalPosts}</div>
                    <div className="ka-metric-trend">Live from Supabase</div>
                </div>
                <div className="ka-metric">
                    <div className="ka-metric-header">
                        <span className="ka-metric-label">Published</span>
                        <div className="ka-metric-icon" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}><PenTool /></div>
                    </div>
                    <div className="ka-metric-value">{publishedPosts}</div>
                    <div className="ka-metric-trend">Live from Supabase</div>
                </div>
                <div className="ka-metric">
                    <div className="ka-metric-header">
                        <span className="ka-metric-label">Drafts</span>
                        <div className="ka-metric-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}><FileText /></div>
                    </div>
                    <div className="ka-metric-value">{draftPosts}</div>
                    <div className="ka-metric-trend">Live from Supabase</div>
                </div>
                <div className="ka-metric">
                    <div className="ka-metric-header">
                        <span className="ka-metric-label">Total Leads</span>
                        <div className="ka-metric-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}><Users /></div>
                    </div>
                    <div className="ka-metric-value">{totalLeads}</div>
                    <div className="ka-metric-trend">Live from Supabase</div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="ka-card">
                <div className="ka-card-header">
                    <span className="ka-card-title">Recent Activity</span>
                </div>
                <div className="ka-card-body">
                    {activities.length === 0 ? (
                        <div className="ka-empty-state" style={{ padding: '40px 20px' }}>
                            <Mail />
                            <h3>No activity yet</h3>
                            <p>Activity will appear here as data flows in.</p>
                        </div>
                    ) : (
                        activities.map((item) => (
                            <div key={item.id + item.type} className="ka-activity-item">
                                <div className={`ka-activity-icon ${item.type}`}>
                                    {item.type === 'blog' ? <PenTool /> : <Users />}
                                </div>
                                <div className="ka-activity-text">
                                    <div className="ka-activity-title">{item.title}</div>
                                    <div className="ka-activity-desc">{item.description}</div>
                                </div>
                                <span className="ka-activity-time">{timeAgo(item.created_at)}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
