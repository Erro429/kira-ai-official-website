import { useEffect, useState } from 'react';
import { Users, Loader2, Mail, Phone } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

interface Lead {
    id: string;
    created_at: string;
    name: string | null;
    email: string;
    phone: string | null;
    interest: string | null;
    message: string | null;
    status: string | null;
    source: string | null;
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

export function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    useEffect(() => {
        async function fetchLeads() {
            const { data, error } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) console.error('Error fetching leads:', error);
            setLeads((data as any) || []);
            if (data && data.length > 0) setSelectedLead(data[0] as any);
            setLoading(false);
        }
        fetchLeads();
    }, []);

    if (loading) {
        return <div className="ka-spinner"><Loader2 /></div>;
    }

    return (
        <div>
            <div className="ka-page-header">
                <h1 className="ka-page-title">Leads</h1>
                <span style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>{leads.length} total</span>
            </div>

            {leads.length === 0 ? (
                <div className="ka-card">
                    <div className="ka-empty-state">
                        <Users />
                        <h3>No leads yet</h3>
                        <p>Leads from the sign-up form will appear here.</p>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {/* Lead List */}
                    <div className="ka-lead-list">
                        {leads.map((lead) => (
                            <div
                                key={lead.id}
                                className="ka-lead-card"
                                onClick={() => setSelectedLead(lead)}
                                style={{
                                    borderColor: selectedLead?.id === lead.id ? 'var(--admin-primary)' : undefined,
                                }}
                            >
                                <div className="ka-lead-info">
                                    <div className="ka-lead-avatar">
                                        {(lead.name || lead.email)[0]?.toUpperCase() || '?'}
                                    </div>
                                    <div>
                                        <div className="ka-lead-name">{lead.name || 'Unknown'}</div>
                                        <div className="ka-lead-email">{lead.email}</div>
                                    </div>
                                </div>
                                <div className="ka-lead-meta">
                                    <span className={`ka-badge ${lead.status === 'new' ? 'ka-badge-new' : 'ka-badge-contacted'}`}>
                                        {lead.status || 'new'}
                                    </span>
                                    <span className="ka-lead-date">{timeAgo(lead.created_at)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lead Detail */}
                    {selectedLead && (
                        <div className="ka-card" style={{ position: 'sticky', top: 84, alignSelf: 'start' }}>
                            <div className="ka-card-header">
                                <span className="ka-card-title">Lead Details</span>
                                <span className={`ka-badge ${selectedLead.status === 'new' ? 'ka-badge-new' : 'ka-badge-contacted'}`}>
                                    {selectedLead.status || 'new'}
                                </span>
                            </div>
                            <div className="ka-card-body">
                                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                                    <div className="ka-lead-avatar" style={{ width: 64, height: 64, fontSize: 22, margin: '0 auto 12px' }}>
                                        {(selectedLead.name || selectedLead.email)[0]?.toUpperCase() || '?'}
                                    </div>
                                    <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--admin-text)' }}>
                                        {selectedLead.name || 'Unknown'}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                                        <Mail style={{ width: 16, height: 16, color: 'var(--admin-text-faint)' }} />
                                        <span style={{ color: 'var(--admin-text-muted)' }}>{selectedLead.email}</span>
                                    </div>
                                    {selectedLead.phone && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                                            <Phone style={{ width: 16, height: 16, color: 'var(--admin-text-faint)' }} />
                                            <span style={{ color: 'var(--admin-text-muted)' }}>{selectedLead.phone}</span>
                                        </div>
                                    )}
                                    {selectedLead.interest && (
                                        <div style={{ marginTop: 12 }}>
                                            <span style={{ fontSize: 11, color: 'var(--admin-text-faint)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>Interest</span>
                                            <p style={{ fontSize: 13, color: 'var(--admin-text-muted)', marginTop: 4 }}>{selectedLead.interest}</p>
                                        </div>
                                    )}
                                    {selectedLead.message && (
                                        <div style={{ marginTop: 12 }}>
                                            <span style={{ fontSize: 11, color: 'var(--admin-text-faint)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>Message</span>
                                            <p style={{ fontSize: 13, color: 'var(--admin-text-muted)', fontStyle: 'italic', marginTop: 4 }}>"{selectedLead.message}"</p>
                                        </div>
                                    )}
                                    <div style={{ marginTop: 12 }}>
                                        <span style={{ fontSize: 11, color: 'var(--admin-text-faint)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>Received</span>
                                        <p style={{ fontSize: 13, color: 'var(--admin-text-muted)', marginTop: 4 }}>
                                            {new Date(selectedLead.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
