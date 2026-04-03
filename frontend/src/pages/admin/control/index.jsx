import React from 'react';
import MultiplierForm from './components/MultiplierForm';
import { Activity, Zap, TrendingDown, Clock } from 'lucide-react';

const StatCard = ({ title, value, label, icon: Icon }) => (
  <div className="glass-panel p-5 border-electric-red/20">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 border border-border-thin bg-obsidian rounded-[4px]">
        <Icon size={20} className="text-electric-red" />
      </div>
      {label && <span className="text-[10px] font-bold text-ice-white/40 uppercase tracking-widest">{label}</span>}
    </div>
    <div className="text-3xl font-black text-white mb-1 font-mono">{value}</div>
    <div className="text-[11px] font-bold text-ice-white/40 uppercase tracking-widest">{title}</div>
  </div>
);

const GameControlPage = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
         <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1 drop-shadow-[0_0_15px_rgba(255,59,48,0.3)]">
           God Mode <span className="text-electric-red">Terminal</span>
         </h1>
         <p className="text-sm text-ice-white/60 font-medium tracking-wide">
           Absolute control over the flight algorithm and platform outcomes.
         </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Current Pool" value="$14,250" icon={Activity} label="Live" />
            <StatCard title="Active Pilots" value="128" icon={Zap} />
            <StatCard title="Last Crash" value="1.15x" icon={TrendingDown} />
            <StatCard title="Engine Status" value="IDLE" icon={Clock} />
          </div>

          <div className="glass-panel p-6 border-electric-red/20 h-64 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-red/10 via-obsidian to-obsidian opacity-50"></div>
             <div className="z-10 text-center">
                 <div className="text-electric-red font-black text-sm uppercase tracking-[0.3em] mb-2 animate-pulse">Monitoring Live Telemetry</div>
                 <div className="text-5xl font-black text-white font-mono opacity-20">WAITING FOR NEXT ROUND</div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <MultiplierForm />
        </div>
      </div>
    </div>
  );
};

export default GameControlPage;
