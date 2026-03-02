import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TaskBreakdownVisual = () => (
    <div className="bg-[#0A0A0F] rounded-2xl border border-white/10 p-6 relative overflow-hidden">
        <div className="space-y-4">
            <div className="flex justify-end">
                <div className="bg-[#1F2937] text-gray-300 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                    I need to clean my apartment but I can't start. I'm frozen.
                </div>
            </div>
            <div className="flex justify-start">
                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%]">
                    <span className="text-[#FF6B35] font-bold block mb-2">Kira</span>
                    Okay, forget "clean apartment." That's too big for your brain right now. Just do this: <br />
                    <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-[#FF6B35]/10 rounded border border-[#FF6B35]/20">
                            <CheckCircle2 size={16} className="text-[#FF6B35]" />
                            <span className="text-white font-bold">Put 3 dishes in the dishwasher.</span>
                        </div>
                        <div className="text-xs text-gray-500 pl-8">That's your entire job. 3 dishes.</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-[#1F2937] text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm">
                    ok done
                </div>
            </div>
            <div className="flex justify-start">
                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm">
                    <span className="text-[#FF6B35] font-bold block mb-1">Kira</span>
                    NICE! Your brain has momentum now. 🚀 Want to do one more tiny task (wipe counter) or stop here?
                </div>
            </div>
        </div>
    </div>
);
