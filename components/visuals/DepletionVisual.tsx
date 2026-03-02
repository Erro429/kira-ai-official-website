import React from 'react';
import { BatteryWarning, Flame, Coffee } from 'lucide-react';

export const DepletionVisual = () => (
    <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-[#FAF8F3] p-6 rounded-2xl border border-[#C86A3D]/20 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BatteryWarning size={60} className="text-[#C86A3D]" />
            </div>
            <h4 className="text-[#C86A3D] font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Flame size={14} /> Burnout (Depletion)
            </h4>
            <ul className="space-y-3">
                {[
                    "No energy left to give",
                    "Feels guilty about resting",
                    "Rest doesn't restore you",
                    "Can't engage even if you want to"
                ].map((item, i) => (
                    <li key={i} className="text-gray-600 text-xs flex items-start gap-2 font-medium">
                        <span className="text-[#C86A3D]">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden opacity-60">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Coffee size={60} className="text-gray-400" />
            </div>
            <h4 className="text-gray-500 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Coffee size={14} /> Laziness (Choice)
            </h4>
            <ul className="space-y-3">
                {[
                    "Has energy, chooses not to use it",
                    "Feels good about doing nothing",
                    "Rest restores capacity",
                    "Can engage when motivated"
                ].map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-gray-300">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
