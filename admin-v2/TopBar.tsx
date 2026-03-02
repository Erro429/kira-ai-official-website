import { ExternalLink, Bell } from 'lucide-react';

export function TopBar() {
    return (
        <header className="ka-topbar">
            <div className="ka-topbar-left">
                Dashboard
            </div>
            <div className="ka-topbar-right">
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ka-btn ka-btn-outline ka-btn-sm"
                >
                    Visit Site
                    <ExternalLink style={{ width: 14, height: 14 }} />
                </a>
                <button className="ka-btn ka-btn-ghost ka-btn-icon" style={{ position: 'relative' }}>
                    <Bell style={{ width: 18, height: 18 }} />
                    <span style={{
                        position: 'absolute',
                        top: 6,
                        right: 6,
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: '#ef4444',
                    }} />
                </button>
            </div>
        </header>
    );
}
