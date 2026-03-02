"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { supabase } from '../../src/lib/supabase';

// Interface for Supabase Blog Post
interface BlogPost {
    post_id: number;
    title: string;
    slug: string;
    content: string; // HTML content
    excerpt: string; // Plain text
    featured_image_url: string;
    created_at: string;
    published_at: string;
    status: string;
}

export const BlogListingPage = ({ onSignUp }: { onSignUp: () => void }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Kira AI | Blog - Insight for Deep Connection";
        window.scrollTo(0, 0);

        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('status', 'published') // Only show published
                .order('published_at', { ascending: false }); // Use published_at

            if (error) console.error("Error fetching posts:", error);
            else setPosts(data || []);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Helper to estimate read time
    const getReadTime = (content: string) => {
        const wordsPerMinute = 200;
        // Strip HTML tags for word count
        const text = content.replace(/<[^>]*>?/gm, '');
        const words = text.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    };

    // Helper to format date
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Helper for excerpts
    const getExcerpt = (post: BlogPost) => {
        if (post.excerpt) return post.excerpt;
        // Fallback: Strip HTML
        const text = post.content.replace(/<[^>]*>?/gm, '');
        return text.substring(0, 150) + '...';
    };

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onSignUp} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6"
                        >
                            <Sparkles size={16} />
                            <span>Kira AI Insights</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                        >
                            Deep <span className="gradient-text">Connection</span>
                            <br />for the Modern World
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#9CA3AF] text-xl max-w-2xl mx-auto"
                        >
                            Exploring the intersection of artificial intelligence, emotional intelligence, and human connection.
                        </motion.p>
                    </header>

                    {/* Featured Post (First one) */}
                    {posts.length > 0 && (
                        <section className="mb-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#0A0A0F] rounded-3xl border border-white/5 overflow-hidden cursor-pointer"
                                onClick={() => window.location.href = `#/blog/${posts[0].slug}`}
                            // onClick={() => window.location.href = `#/blog/${blogPosts[0].slug}`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-[300px] lg:h-auto overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                                        <img
                                            src={posts[0].featured_image_url || "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1000"}
                                            alt={posts[0].title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest">
                                                Featured Post
                                            </span>
                                            <span className="text-gray-500 text-sm">{formatDate(posts[0].published_at || posts[0].created_at)}</span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-purple-400 transition-colors">
                                            {posts[0].title}
                                        </h2>
                                        <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                                            {getExcerpt(posts[0])}
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                            <span className="flex items-center gap-2"><Clock size={16} /> {getReadTime(posts[0].content)}</span>
                                            <span className="flex items-center gap-2"><BookOpen size={16} /> General</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </section>
                    )}

                    {/* Blog Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post, index) => (
                            <motion.div
                                key={post.post_id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-[#0A0A0F] rounded-2xl border border-white/5 overflow-hidden group cursor-pointer"
                                onClick={() => window.location.href = `#/blog/${post.slug}`}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.featured_image_url || "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1000"}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#d946ef]">General</span>
                                        <span className="text-gray-500 text-xs">{formatDate(post.published_at || post.created_at)}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-pink-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                        {getExcerpt(post)}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xs text-gray-500 flex items-center gap-1.5">
                                            <Clock size={14} /> {getReadTime(post.content)}
                                        </span>
                                        <span className="text-purple-400 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            READ MORE <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </section>

                    {/* Empty State / Newsletter */}
                    <section className="mt-20 py-16 px-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 text-center">
                        <h2 className="text-3xl font-bold mb-4">Never Miss an Insight</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Join our "Inner Circle" for weekly deep dives into psychology, tech, and the future of connection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-purple-500/50 transition-colors"
                            />
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-3 px-8 rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                                Join Now
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
