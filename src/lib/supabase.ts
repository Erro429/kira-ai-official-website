
import { createClient } from '@supabase/supabase-js';

// Prioritize environment variables, fallback to hardcoded (legacy) if missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qjqffwfisulrcwcdlhtx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcWZmd2Zpc3VscmN3Y2RsaHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4OTc2MDAsImV4cCI6MjA4NjQ3MzYwMH0.ddqxwzhS_XLtftym_njYA9WDxY2G7UEof_hJNg_hkUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    },
    // Improve timeout settings for slow connections
    global: {
        fetch: (...args: any[]) => fetch(...(args as [any, any])).catch(err => {
            console.error('Supabase fetch error:', err);
            throw err;
        })
    }
});

// Simple connectivity test
export const checkSupabaseConnection = async () => {
    try {
        const start = Date.now();
        const { data, error } = await supabase.from('blog_posts').select('count', { count: 'exact', head: true });
        const end = Date.now();
        if (error) throw error;
        return { success: true, latency: end - start };
    } catch (err: any) {
        return { success: false, error: err.message };
    }
};
