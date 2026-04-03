import React from 'react';
import { MoreVertical, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

const MOCK_PILOTS = [
  { id: '1', email: 'admin@skypunt.com', full_name: 'The Mister', balance: 999999.99, role: 'admin', status: 'active', created_at: '2026-03-01T10:00:00Z' },
  { id: '2', email: 'test1@skypunt.com', full_name: 'Test Pilot Alpha', balance: 1500.50, role: 'user', status: 'active', created_at: '2026-03-15T14:30:00Z' },
  { id: '3', email: 'test2@skypunt.com', full_name: 'Beta Flyer', balance: 0.00, role: 'user', status: 'suspended', created_at: '2026-03-20T09:15:00Z' },
  { id: '4', email: 'test3@skypunt.com', full_name: 'Charlie Delta', balance: 350.25, role: 'user', status: 'active', created_at: '2026-03-25T16:45:00Z' },
];

const PilotTable = () => {
  return (
    <div className="bg-gunmetal/60 rounded-[4px] border border-border-thin overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-thin bg-obsidian">
              <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">Pilot ID</th>
              <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">Identity</th>
              <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold text-right">Balance</th>
              <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold text-center">Status</th>
              <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-thin">
            {MOCK_PILOTS.map((pilot) => (
              <tr key={pilot.id} className="hover:bg-ice-white/5 transition-colors group">
                <td className="py-3 px-4">
                  <span className="font-mono text-xs text-ice-white/60">
                    {pilot.id.padStart(5, '0')}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-ice-white flex items-center gap-2">
                       {pilot.role === 'admin' && <ShieldAlert size={14} className="text-electric-red" />}
                       {pilot.full_name}
                    </span>
                    <span className="text-[10px] text-ice-white/40">{pilot.email}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right">
                  <span className={`text-sm font-bold font-mono ${pilot.role === 'admin' ? 'text-electric-red' : 'text-neon-green'}`}>
                    ${pilot.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center">
                    {pilot.status === 'active' ? (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green">
                        <CheckCircle2 size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-wider">Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-electric-red/10 border border-electric-red/20 text-electric-red">
                        <XCircle size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-wider">Suspended</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    <button className="p-1.5 text-ice-white/40 hover:text-electric-red hover:bg-electric-red/10 rounded transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-border-thin bg-obsidian flex justify-between items-center text-[10px] text-ice-white/40 font-bold uppercase tracking-wider">
        <span>Showing 4 Pilots</span>
        <button className="hover:text-electric-red transition-colors">Next Page &rarr;</button>
      </div>
    </div>
  );
};

export default PilotTable;
