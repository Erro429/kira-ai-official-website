import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PenTool, Users, Mail, Settings, LogOut, Music } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [newLeadsCount, setNewLeadsCount] = useState(0);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Fetch new leads count
        const fetchCounts = async () => {
            try {
                const { count } = await supabase
                    .from('leads')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'new');
                if (count !== null) setNewLeadsCount(count);
            } catch (err) {
                console.error('Error fetching counts:', err);
            }
        };

        // Get current user email
        supabase.auth.getUser().then(({ data: { user } }) => {
            if (user?.email) setUserEmail(user.email);
        });

        fetchCounts();
        const interval = setInterval(fetchCounts, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    const sidebarItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
        { icon: PenTool, label: 'Blog', href: '/admin/blog' },
        { icon: Users, label: 'Leads', href: '/admin/leads', badge: newLeadsCount > 0 ? `${newLeadsCount} New` : null },
        { icon: Mail, label: 'Messages', href: '/admin/messages' },
        { icon: Music, label: 'Recordings', href: '/admin/recordings' },
    ];

    const isActive = (href: string) => {
        if (href === '/admin') return location.pathname === '/admin';
        return location.pathname.startsWith(href);
    };

    const initials = userEmail
        ? userEmail.split('@')[0].slice(0, 2).toUpperCase()
        : 'KA';

    return (
        <>
            <div className={`ka-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <aside className={`ka-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="ka-sidebar-logo">
                    <h2>KIRA ADMIN</h2>
                </div>

                <nav className="ka-sidebar-nav">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`ka-nav-item ${isActive(item.href) ? 'active' : ''}`}
                            onClick={onClose}
                        >
                            <span className="ka-nav-item-left">
                                <item.icon />
                                {item.label}
                            </span>
                            {item.badge && (
                                <span className="ka-nav-badge">{item.badge}</span>
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="ka-sidebar-footer">
                    <Link
                        to="/admin/settings"
                        className={`ka-nav-item ${isActive('/admin/settings') ? 'active' : ''}`}
                        onClick={onClose}
                    >
                        <span className="ka-nav-item-left">
                            <Settings />
                            Settings
                        </span>
                    </Link>

                    <div className="ka-user-card" style={{ marginTop: 12 }}>
                        <div className="ka-user-info">
                            <div className="ka-user-avatar">{initials}</div>
                            <div>
                                <div className="ka-user-name">{userEmail.split('@')[0] || 'Admin'}</div>
                                <div className="ka-user-role">Administrator</div>
                            </div>
                        </div>
                        <button className="ka-logout-btn" onClick={handleLogout} title="Sign out">
                            <LogOut style={{ width: 16, height: 16 }} />
                        </button>
                    </div>

                    <div className="ka-credit">Built with ♡ for Kira AI</div>
                </div>
            </aside>
        </>
    );
}
