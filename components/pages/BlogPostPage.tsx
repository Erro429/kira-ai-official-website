"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ChevronLeft, Play, ArrowRight, Share2 } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { supabase } from '../../src/lib/supabase';
import './Blog.css'; // Import the new styles

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;

interface BlogPost {
    post_id: number;
    title: string;
    slug: string;
    content: string;
    featured_image_url: string;
    youtube_video_id: string; // Updated to match DB schema
    created_at: string;
    published_at: string; // Added
    status: string;
}

export const BlogPostPage = ({ onCtaClick }: { onCtaClick: () => void }) => {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('slug', slug)
                .single();

            if (data) {
                setPost(data);
                document.title = `${data.title} | Kira AI Blog`;
            } else {
                console.error("Error fetching post:", error);
            }
            setLoading(false);
        };

        window.scrollTo(0, 0);
        fetchPost();
    }, [slug]);

    const shareOnTwitter = () => {
        if (!post) return;
        const text = encodeURIComponent(post.title);
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    };

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) return (
        <div className="min-h-screen bg-[#050508] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
                <div className="text-[#D4AF37] font-black uppercase tracking-widest text-xs">Opening Archives...</div>
            </div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen bg-[#050508] flex items-center justify-center text-white">
            <div className="text-center">
                <h2 className="text-4xl font-black mb-4">Post Not Found</h2>
                <button onClick={() => window.location.href = '#/blog'} className="text-[#D4AF37] hover:underline">Back to Blog</button>
            </div>
        </div>
    );

    // Split content to insert video in the "middle" if a video exists
    const videoId = post.youtube_video_id;
    let firstPart = post.content;
    let secondPart = "";

    if (videoId) {
        // Try to split around the middle paragraph
        const paragraphs = post.content.split('</p>');
        const mid = Math.floor(paragraphs.length / 2);
        if (paragraphs.length > 1) {
            firstPart = paragraphs.slice(0, mid).join('</p>') + '</p>';
            secondPart = paragraphs.slice(mid).join('</p>');
        }
    }

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20">
                {/* Back Link */}
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <button
                        onClick={() => window.location.href = '#/blog'}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Return to Insights</span>
                    </button>
                </div>

                {/* Article Header */}
                <header className="max-w-4xl mx-auto px-6 mb-16 text-center">
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-8"
                    >
                        <Play size={12} fill="currentColor" />
                        <span>Kira AI Deep Dive</span>
                    </MotionDiv>
                    <MotionH1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
                    >
                        {post.title}
                    </MotionH1>
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-10"
                    >
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-[#D4AF37]" /> {Math.ceil(post.content.split(/\s+/).length / 200)} min read
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-[#D4AF37]" /> {formatDate(post.published_at || post.created_at)}
                        </div>
                    </MotionDiv>
                </header>

                <article className="max-w-4xl mx-auto px-6">
                    {/* Featured Image */}
                    {post.featured_image_url && (
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <img src={post.featured_image_url} alt={post.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
                        </MotionDiv>
                    )}

                    {/* Content Part 1 */}
                    <div
                        className="blog-content prose prose-invert prose-2xl max-w-none text-gray-300 mb-12 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: firstPart }}
                    />

                    {/* YouTube Video Embed - "In the middle" */}
                    {videoId && (
                        <MotionDiv
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="my-20 aspect-video rounded-[32px] overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative group"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </MotionDiv>
                    )}

                    {/* Content Part 2 */}
                    {secondPart && (
                        <div
                            className="blog-content prose prose-invert prose-2xl max-w-none text-gray-300 mb-12 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: secondPart }}
                        />
                    )}

                    {/* Final CTA */}
                    <section className="text-center py-20 px-8 rounded-[48px] bg-gradient-to-br from-[#D4AF37]/20 via-[#8A6D3B]/10 to-transparent border border-[#D4AF37]/30 mt-20 mb-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Elevate Your Connection.</h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                            Join the genesis phase of the world's most sophisticated digital companion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={onCtaClick}
                                className="px-12 py-5 rounded-2xl bg-[#D4AF37] hover:bg-white text-black font-black uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-[#D4AF37]/20"
                            >
                                Secure Genesis Access
                            </button>
                        </div>
                    </section>

                    {/* Share */}
                    <footer className="flex flex-col items-center gap-6 pt-12 border-t border-white/5">
                        <p className="text-gray-500 font-medium">If this resonated, share it with someone who needs it.</p>
                        <div className="flex gap-4">
                            <button
                                onClick={shareOnTwitter}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Share2 size={18} className="text-pink-500" />
                                <span className="text-sm font-bold">Twitter</span>
                            </button>
                            <button
                                onClick={copyLink}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <ArrowRight size={18} className="text-blue-500" />
                                <span className="text-sm font-bold">Copy Link</span>
                            </button>
                        </div>
                    </footer>
                </article>
            </main>

            <Footer />
        </div>
    );
};
