import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Repeat, Filter, Search } from 'lucide-react';

const MOCK_LOGS = [
  { id: 'tx_8271A', user: 'test1@skypunt.com', type: 'DEPOSIT', amount: 500.00, status: 'SUCCESS', timestamp: '2026-04-03T14:22:15Z' },
  { id: 'tx_8271B', user: 'test2@skypunt.com', type: 'WITHDRAW', amount: 150.00, status: 'PENDING', timestamp: '2026-04-03T14:20:05Z' },
  { id: 'tx_8271C', user: 'admin@skypunt.com', type: 'BET', amount: 50.00, status: 'SUCCESS', timestamp: '2026-04-03T14:15:30Z' },
  { id: 'tx_8271D', user: 'test3@skypunt.com', type: 'DEPOSIT', amount: 1000.00, status: 'FAILED', timestamp: '2026-04-03T13:55:10Z' },
  { id: 'tx_8271E', user: 'test1@skypunt.com', type: 'BET', amount: 25.00, status: 'SUCCESS', timestamp: '2026-04-03T13:45:22Z' },
];

const getTypeConfig = (type) => {
  switch (type) {
    case 'DEPOSIT': return { icon: ArrowDownLeft, color: 'text-neon-green', bg: 'bg-neon-green/10' };
    case 'WITHDRAW': return { icon: ArrowUpRight, color: 'text-white', bg: 'bg-white/10' };
    case 'BET': return { icon: Repeat, color: 'text-electric-red', bg: 'bg-electric-red/10' };
    default: return { icon: Repeat, color: 'text-ice-white/60', bg: 'bg-ice-white/5' };
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'SUCCESS': return 'text-neon-green';
    case 'PENDING': return 'text-yellow-500';
    case 'FAILED': return 'text-electric-red';
    default: return 'text-ice-white/60';
  }
}

const AuditLogsPage = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-thin pb-6">
        <div>
           <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
             System Audit Logs
           </h1>
           <p className="text-sm text-electric-red/80 font-medium tracking-wide uppercase">
             Global Transaction & Event Ledger
           </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/40" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH TXID OR USER..." 
              className="w-full bg-obsidian border border-border-thin rounded-[4px] py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-electric-red/50 text-ice-white transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-obsidian border border-border-thin rounded-[4px] hover:border-electric-red/50 hover:text-electric-red transition-colors group">
             <Filter size={16} className="text-ice-white/40 group-hover:text-electric-red" />
             <span className="text-[11px] font-bold uppercase tracking-wider">Filter</span>
          </button>
        </div>
      </header>

      <section className="bg-gunmetal/60 rounded-[4px] border border-border-thin overflow-hidden relative">
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-thin bg-obsidian">
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">Time (UTC)</th>
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">TXID</th>
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">Type</th>
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold">Identity</th>
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold text-right">Amount</th>
                <th className="py-3 px-4 text-[10px] uppercase tracking-wider text-ice-white/40 font-bold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-thin">
              {MOCK_LOGS.map((log) => {
                const { icon: TypeIcon, color: typeColor, bg: typeBg } = getTypeConfig(log.type);
                
                return (
                  <tr key={log.id} className="hover:bg-ice-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-mono text-[11px] text-ice-white/60">
                        {new Date(log.timestamp).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-xs text-ice-white/80">{log.id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className={`inline-flex flex-row items-center gap-1.5 px-2 py-0.5 rounded-[4px] ${typeBg} border border-border-thin`}>
                        <TypeIcon size={12} className={typeColor} />
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${typeColor}`}>{log.type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-xs text-ice-white/80">{log.user}</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="font-mono text-sm font-bold text-ice-white">
                        ${log.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${getStatusColor(log.status)}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border-thin bg-obsidian flex justify-between items-center text-[10px] text-ice-white/40 font-bold uppercase tracking-wider">
          <span>Displaying latest 5 records</span>
          <button className="hover:text-electric-red transition-colors">Older Records &rarr;</button>
        </div>
      </section>
    </div>
  );
};

export default AuditLogsPage;
