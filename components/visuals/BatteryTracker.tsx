import React from 'react';
import { Activity } from 'lucide-react';

export const BatteryTracker = () => (
    <div className="bg-white rounded-3xl border border-[#7FCDCD]/30 p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C86A3D] to-[#7FCDCD]" />

        <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#3D3D3D] font-bold flex items-center gap-2">
                <Activity size={18} className="text-[#C86A3D]" /> Energy Audit
            </h3>
            <div className="text-xs font-mono text-gray-400">DAILY LOG</div>
        </div>

        <div className="space-y-4">
            <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-600">
                    <span>Video Meetings</span>
                    <span className="text-[#C86A3D]">-92% Drain</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C86A3D] w-[92%]" />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-600">
                    <span>Decision Making</span>
                    <span className="text-[#C86A3D]">-88% Drain</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C86A3D] w-[88%]" />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-gray-600">
                    <span>Saying "No"</span>
                    <span className="text-[#5FB9B9]">+68% Preservation</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#5FB9B9] w-[68%]" />
                </div>
            </div>
        </div>
    </div>
);
