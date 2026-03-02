import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2 } from 'lucide-react';
import { supabase } from '../src/lib/supabase';
import './admin.css';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else {
                navigate('/admin');
            }
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred');
            setLoading(false);
        }
    };

    return (
        <div className="ka-login-page" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            <div className="ka-login-card">
                <div className="ka-login-header">
                    <div className="ka-login-icon">
                        <Lock />
                    </div>
                    <h1 className="ka-login-title">Kira Admin</h1>
                    <p className="ka-login-subtitle">Enter your credentials to access the dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="ka-login-form">
                    <div className="ka-form-group" style={{ marginBottom: 0 }}>
                        <label className="ka-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="ka-input"
                            placeholder="admin@kira.ai"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="ka-form-group" style={{ marginBottom: 0 }}>
                        <label className="ka-label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="ka-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div className="ka-login-error">{error}</div>
                    )}

                    <button type="submit" className="ka-btn ka-btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: '14px' }}>
                        {loading ? (
                            <>
                                <Loader2 style={{ width: 16, height: 16, animation: 'ka-spin 1s linear infinite' }} />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
