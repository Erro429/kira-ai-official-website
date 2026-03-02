import React from 'react';

export const MemoryInterface = () => (
    <div className="bg-[#0D1835] rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
        <div className="bg-black/40 p-4 border-b border-white/5 flex items-center gap-3">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs font-mono text-gray-500">PROJECT_MEMORY_BANK</div>
        </div>
        <div className="p-6 space-y-4">
            {[
                { title: "Budget Tracker App", start: "Jan 8", status: "Stuck on login", active: true },
                { title: "Recipe Organizer", start: "Jan 15", status: "Database Schema", active: false },
                { title: "Plant Watering Reminder", start: "Jan 22", status: "Idea phase", active: false },
                { title: "Sourdough Novel", start: "Jan 5", status: "Chapter 1 Outline", active: false },
            ].map((p, i) => (
                <div key={i} className={`p-4 rounded-xl border ${p.active ? 'bg-[#00D9FF]/5 border-[#00D9FF]/30' : 'bg-white/5 border-white/5'} flex justify-between items-center`}>
                    <div>
                        <div className="font-bold text-sm text-white mb-1">{p.title}</div>
                        <div className="text-xs text-gray-400 flex gap-3">
                            <span>Started: {p.start}</span>
                            <span className={p.active ? "text-[#00D9FF]" : "text-gray-500"}>{p.status}</span>
                        </div>
                    </div>
                    {p.active && <div className="px-2 py-1 bg-[#00D9FF]/20 text-[#00D9FF] text-[10px] rounded font-bold">ACTIVE</div>}
                </div>
            ))}
        </div>
    </div>
);
