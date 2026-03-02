import { useEffect, useState } from 'react';
import { Mail, Loader2, Calendar } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

interface ContactMessage {
    id: string;
    created_at: string;
    name: string | null;
    email: string;
    subject: string | null;
    message: string | null;
}

export function MessagesPage() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMessages() {
            const { data, error } = await supabase
                .from('contact_messages')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching messages:', error);
                // Table might not exist yet — that's fine
            }
            setMessages((data as any) || []);
            setLoading(false);
        }
        fetchMessages();
    }, []);

    if (loading) {
        return <div className="ka-spinner"><Loader2 /></div>;
    }

    return (
        <div>
            <div className="ka-page-header">
                <h1 className="ka-page-title">Messages</h1>
                <span style={{ fontSize: 13, color: 'var(--admin-text-muted)' }}>{messages.length} total</span>
            </div>

            {messages.length === 0 ? (
                <div className="ka-card">
                    <div className="ka-empty-state">
                        <Mail />
                        <h3>No messages yet</h3>
                        <p>Messages from the contact form will appear here.</p>
                    </div>
                </div>
            ) : (
                <div className="ka-lead-list">
                    {messages.map((msg) => (
                        <div key={msg.id} className="ka-card" style={{ marginBottom: 0 }}>
                            <div className="ka-card-body">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                    <div>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--admin-text)' }}>
                                            {msg.name || 'Anonymous'}
                                        </div>
                                        <div style={{ fontSize: 12, color: 'var(--admin-text-muted)', marginTop: 2 }}>
                                            {msg.email}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--admin-text-faint)' }}>
                                        <Calendar style={{ width: 12, height: 12 }} />
                                        {new Date(msg.created_at).toLocaleDateString()}
                                    </div>
                                </div>
                                {msg.subject && (
                                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--admin-text)', marginBottom: 6 }}>
                                        {msg.subject}
                                    </div>
                                )}
                                {msg.message && (
                                    <p style={{ fontSize: 13, color: 'var(--admin-text-muted)', lineHeight: 1.5 }}>
                                        {msg.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
