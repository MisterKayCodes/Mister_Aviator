import React from 'react';
import PilotTable from './components/PilotTable';
import { Search, Filter } from 'lucide-react';

const PilotsPage = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
             Pilot Manifest
           </h1>
           <p className="text-sm text-electric-red/80 font-medium tracking-wide uppercase">
             Global Player Registry & Sanctions
           </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/40" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH PILOT ID OR EMAIL..." 
              className="w-full bg-obsidian border border-border-thin rounded-[4px] py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-electric-red/50 text-ice-white transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-obsidian border border-border-thin rounded-[4px] hover:border-electric-red/50 hover:text-electric-red transition-colors group">
             <Filter size={16} className="text-ice-white/40 group-hover:text-electric-red" />
             <span className="text-[11px] font-bold uppercase tracking-wider">Filter</span>
          </button>
        </div>
      </header>

      <section>
        <PilotTable />
      </section>
    </div>
  );
};

export default PilotsPage;
