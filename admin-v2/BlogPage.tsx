import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Plus, Loader2, Calendar } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

interface BlogPost {
    id: string;
    created_at: string;
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    featured_image_url: string | null;
    youtube_video_url: string | null;
    category: string | null;
    status: string;
    author_id: string | null;
}

export function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) console.error('Error fetching posts:', error);
            setPosts(data || []);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    if (loading) {
        return <div className="ka-spinner"><Loader2 /></div>;
    }

    return (
        <div>
            <div className="ka-page-header">
                <h1 className="ka-page-title">Blog Posts</h1>
                <Link to="/admin/blog/new" className="ka-btn ka-btn-primary">
                    <Plus style={{ width: 16, height: 16 }} />
                    Create New Post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="ka-card">
                    <div className="ka-empty-state">
                        <FileText />
                        <h3>No posts yet</h3>
                        <p>Start writing your first article.</p>
                    </div>
                </div>
            ) : (
                <div className="ka-blog-grid">
                    {posts.map((post) => (
                        <div key={post.id} className="ka-blog-card">
                            <div className="ka-blog-card-image">
                                {post.featured_image_url ? (
                                    <img src={post.featured_image_url} alt={post.title} />
                                ) : (
                                    <FileText style={{ width: 32, height: 32, color: 'var(--admin-text-faint)' }} />
                                )}
                                <div className="ka-blog-card-status">
                                    <span className={`ka-badge ${post.status === 'published' ? 'ka-badge-published' : 'ka-badge-draft'}`}>
                                        {post.status === 'published' ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            </div>
                            <div className="ka-blog-card-body">
                                <h3 className="ka-blog-card-title" title={post.title}>{post.title}</h3>
                                <div className="ka-blog-card-date">
                                    <Calendar style={{ width: 12, height: 12 }} />
                                    {new Date(post.created_at).toLocaleDateString()}
                                </div>
                                <p className="ka-blog-card-excerpt">
                                    {post.excerpt || 'No excerpt provided.'}
                                </p>
                            </div>
                            <div className="ka-blog-card-footer">
                                <Link to={`/admin/blog/edit/${post.id}`} className="ka-btn ka-btn-outline ka-btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                                    Edit Post
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
