import React from 'react';
import { Clock, Brain, Zap } from 'lucide-react';

export const ProactiveCheckinsVisual = () => (
    <div className="space-y-3">
        <div className="bg-[#0D1835] border border-white/10 p-4 rounded-xl flex gap-3 items-start">
            <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full"><Clock size={14} className="text-blue-400" /></div>
            <div>
                <div className="text-xs text-gray-500 font-mono mb-1">2:17 PM (You said 2:00 PM)</div>
                <p className="text-sm text-gray-300">Hey! You said you'd start working at 2pm. It's 2:17. Ready to go, or want me to check back in 15 minutes?</p>
            </div>
        </div>
        <div className="bg-[#0D1835] border border-white/10 p-4 rounded-xl flex gap-3 items-start">
            <div className="mt-1 bg-red-500/20 p-1.5 rounded-full"><Brain size={14} className="text-red-400" /></div>
            <div>
                <div className="text-xs text-gray-500 font-mono mb-1">4:32 PM (Health Check)</div>
                <p className="text-sm text-gray-300">You've been hyperfocused for 2 hours straight. Amazing progress! But real talk: when did you last eat, drink water, or pee?</p>
            </div>
        </div>
        <div className="bg-[#0D1835] border border-white/10 p-4 rounded-xl flex gap-3 items-start">
            <div className="mt-1 bg-amber-500/20 p-1.5 rounded-full"><Zap size={14} className="text-amber-400" /></div>
            <div>
                <div className="text-xs text-gray-500 font-mono mb-1">2:45 PM (Pattern Recognition)</div>
                <p className="text-sm text-gray-300">I've noticed you usually lose momentum around 3pm. Want to tackle one more task before your energy dips?</p>
            </div>
        </div>
    </div>
);
