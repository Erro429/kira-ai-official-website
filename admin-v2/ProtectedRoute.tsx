import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

export function ProtectedRoute() {
    const [session, setSession] = useState<boolean | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(!!session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (session === null) {
        return (
            <div className="ka-login-page">
                <div className="ka-spinner">
                    <Loader2 />
                </div>
            </div>
        );
    }

    if (!session) {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
}
