import React from 'react';
import { Flame } from 'lucide-react';

export const BurnoutComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
                <tr className="border-b border-[#C86A3D]/20">
                    <th className="p-4 text-gray-500 font-medium text-sm">Solution</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Approaches Depletion As</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Availability</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Toxic Positivity</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Boundary Help</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Self-Care Apps</td>
                    <td className="p-4 text-red-400">Lack of Effort</td>
                    <td className="p-4 text-[#7FCDCD] font-bold">24/7</td>
                    <td className="p-4 text-red-400">High</td>
                    <td className="p-4 text-red-400">None</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Therapy</td>
                    <td className="p-4 text-[#7FCDCD] font-bold">Medical Issue</td>
                    <td className="p-4 text-red-400">Weekly</td>
                    <td className="p-4 text-[#7FCDCD] font-bold">Low</td>
                    <td className="p-4 text-[#7FCDCD] font-bold">Coaching</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Friends/Family</td>
                    <td className="p-4 text-yellow-500">Variable</td>
                    <td className="p-4 text-yellow-500">When Free</td>
                    <td className="p-4 text-yellow-500">Common</td>
                    <td className="p-4 text-red-400">Rare</td>
                </tr>
                <tr className="bg-[#7FCDCD]/10 border-b border-[#7FCDCD]/20">
                    <td className="p-4 font-bold text-[#5FB9B9] flex items-center gap-2"><Flame size={16} className="text-[#C86A3D]" /> Kira</td>
                    <td className="p-4 text-[#5FB9B9] font-bold">System Shutdown</td>
                    <td className="p-4 text-[#5FB9B9] font-bold">24/7 Instant</td>
                    <td className="p-4 text-[#5FB9B9] font-bold">Zero (Anti)</td>
                    <td className="p-4 text-[#5FB9B9] font-bold">Active Drafts</td>
                </tr>
            </tbody>
        </table>
    </div>
);
