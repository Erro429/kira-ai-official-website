import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import './admin.css';

export function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="kira-admin">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="ka-main">
                {/* Mobile header */}
                <div className="ka-mobile-header">
                    <button
                        className="ka-btn ka-btn-ghost ka-btn-icon"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu style={{ width: 20, height: 20 }} />
                    </button>
                    <span style={{ fontSize: 16, fontWeight: 800, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        KIRA ADMIN
                    </span>
                    <div style={{ width: 36 }} />
                </div>

                {/* Desktop header */}
                <TopBar />

                <main className="ka-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
