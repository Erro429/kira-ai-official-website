import React from 'react';
import { XCircle, CheckCircle2, AlertCircle, Zap } from 'lucide-react';

export const DetailedComparisonTable = () => (
    <div className="overflow-x-auto custom-scrollbar pb-4">
        <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
                <tr className="border-b border-white/10">
                    <th className="p-4 text-gray-400 font-medium">Solution</th>
                    <th className="p-4 text-gray-400 font-medium">Cost</th>
                    <th className="p-4 text-gray-400 font-medium">Availability</th>
                    <th className="p-4 text-gray-400 font-medium">Context</th>
                    <th className="p-4 text-gray-400 font-medium">Task Help</th>
                    <th className="p-4 text-gray-400 font-medium">Check-ins</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="p-4 font-bold text-white">Focusmate</td>
                    <td className="p-4 text-gray-400">Free to $5/mo</td>
                    <td className="p-4 text-gray-400">Scheduled 50m</td>
                    <td className="p-4 text-red-400 flex items-center gap-1"><XCircle size={14} /> None</td>
                    <td className="p-4 text-red-400"><XCircle size={14} /></td>
                    <td className="p-4 text-red-400"><XCircle size={14} /></td>
                </tr>
                <tr className="border-b border-white/5">
                    <td className="p-4 font-bold text-white">Human Coach</td>
                    <td className="p-4 text-gray-400">$100-$300/sess</td>
                    <td className="p-4 text-gray-400">Weekly</td>
                    <td className="p-4 text-yellow-400 flex items-center gap-1"><AlertCircle size={14} /> Limited</td>
                    <td className="p-4 text-green-400"><CheckCircle2 size={14} /></td>
                    <td className="p-4 text-red-400">Session only</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="p-4 font-bold text-white">Zoom Rooms</td>
                    <td className="p-4 text-gray-400">Free</td>
                    <td className="p-4 text-gray-400">24/7</td>
                    <td className="p-4 text-red-400 flex items-center gap-1"><XCircle size={14} /> None</td>
                    <td className="p-4 text-red-400"><XCircle size={14} /></td>
                    <td className="p-4 text-red-400"><XCircle size={14} /></td>
                </tr>
                <tr className="border-b border-white/5">
                    <td className="p-4 font-bold text-white">Apps (Goblin)</td>
                    <td className="p-4 text-gray-400">Free to $10/mo</td>
                    <td className="p-4 text-gray-400">24/7</td>
                    <td className="p-4 text-red-400 flex items-center gap-1"><XCircle size={14} /> None</td>
                    <td className="p-4 text-yellow-400 flex items-center gap-1"><AlertCircle size={14} /> Basic</td>
                    <td className="p-4 text-red-400"><XCircle size={14} /></td>
                </tr>
                <tr className="border-b border-[#FF6B35]/30 bg-[#FF6B35]/10 relative">
                    <td className="p-4 font-bold text-[#FF6B35] flex items-center gap-2"><Zap size={16} className="fill-[#FF6B35]" /> Kira AI</td>
                    <td className="p-4 text-white font-bold">See Pricing</td>
                    <td className="p-4 text-[#00D9FF] font-bold">24/7 Instant</td>
                    <td className="p-4 text-[#00D9FF] font-bold flex items-center gap-1"><CheckCircle2 size={14} /> Infinite</td>
                    <td className="p-4 text-[#00D9FF] font-bold">Adaptive</td>
                    <td className="p-4 text-[#00D9FF] font-bold">Proactive</td>
                </tr>
            </tbody>
        </table>
    </div>
);
