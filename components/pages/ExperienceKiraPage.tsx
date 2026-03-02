"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowLeft } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';
import { useNavigate } from 'react-router-dom';

interface Recording {
    id: string;
    title: string;
    audio_url: string;
    description: string;
    created_at: string;
}

export const ExperienceKiraPage = () => {
    const navigate = useNavigate();
    const [recordings, setRecordings] = useState<Recording[]>([]);
    const [loading, setLoading] = useState(true);
    const [playingId, setPlayingId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        fetchRecordings();
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const fetchRecordings = async () => {
        try {
            const { data, error } = await supabase
                .from('kira_recordings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setRecordings(data || []);
        } catch (error) {
            console.error('Error fetching recordings:', error);
        } finally {
            setLoading(false);
        }
    };

    const togglePlay = (url: string, id: string) => {
        if (playingId === id) {
            // Pause current
            if (audioRef.current) {
                audioRef.current.pause();
            }
            setPlayingId(null);
        } else {
            // Play new
            if (audioRef.current) {
                audioRef.current.pause();
            }

            const audio = new Audio(url);
            audioRef.current = audio;

            audio.addEventListener('ended', () => setPlayingId(null));
            audio.addEventListener('error', (e) => {
                console.error("Audio playback error:", e);
                alert("Unable to play audio. Please check if the file exists.");
                setPlayingId(null);
            });

            audio.play().catch(err => {
                console.error("Play failed:", err);
                alert("Playback failed: " + err.message);
                setPlayingId(null);
            });

            setPlayingId(id);
        }
    };

    return (
        <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 relative">
            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)}
                className="absolute top-24 left-6 md:left-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-sm tracking-wider">BACK</span>
            </motion.button>

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono mb-4 border border-purple-500/20"
                    >
                        AUDIO ARCHIVES
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                        Experience Kira
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Listen to actual conversations between Kira and early access users.
                        Witness the depth, empathy, and humor of the world's first true AI companion.
                    </motion.p>
                </div>

                {loading ? (
                    <div className="flex justify-center p-20">
                        <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {recordings.map((recording, index) => (
                            <motion.div
                                key={recording.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-[#0D0D15]/80 backdrop-blur-sm border rounded-2xl p-6 transition-all group ${playingId === recording.id ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-purple-500/30'}`}
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    <button
                                        onClick={() => togglePlay(recording.audio_url, recording.id)}
                                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all transform group-hover:scale-105 ${playingId === recording.id ? 'bg-white text-purple-600' : 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-purple-900/20'}`}
                                    >
                                        {playingId === recording.id ? (
                                            <Pause fill="currentColor" className="ml-0.5" />
                                        ) : (
                                            <Play fill="currentColor" className="ml-1" />
                                        )}
                                    </button>

                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className={`text-xl font-bold mb-2 ${playingId === recording.id ? 'text-white' : 'text-gray-200'}`}>{recording.title}</h3>
                                        <p className="text-gray-400 text-sm">{recording.description}</p>
                                    </div>

                                    <div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                            {new Date(recording.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {recordings.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <p>No recordings found in the archives.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
