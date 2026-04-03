import React, { useState, useEffect } from 'react';
import TelemetryCanvas from './components/TelemetryCanvas';
import MultiplierDisplay from './components/MultiplierDisplay';
import { Play, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

const DashboardPage = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [status, setStatus] = useState('ready'); // 'ready', 'flying', 'crashed'
  const [crashAt, setCrashAt] = useState(2.0);

  useEffect(() => {
    let interval;
    if (status === 'flying') {
      interval = setInterval(() => {
        setMultiplier(prev => {
          const next = prev + (prev * 0.015); // Progressive acceleration
          if (next >= crashAt) {
            setStatus('crashed');
            return crashAt;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [status, crashAt]);

  const handleStart = () => {
    setMultiplier(1.0);
    setCrashAt(1.0 + Math.random() * 5); // Simulating a random crash point
    setStatus('flying');
  };

  const handleReset = () => {
    setMultiplier(1.0);
    setStatus('ready');
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black italic uppercase">Live Terminal</h2>
          <p className="text-ice-white/40 font-bold text-[10px] uppercase tracking-widest">Official Trading Node • Sector 7-G</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 border border-border-thin bg-gunmetal rounded-[4px] flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-neon-green"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-ice-white/60">Node Online</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Multiplier Display Area */}
        <div className="lg:col-span-2 relative h-[500px] glass-panel bg-obsidian border-neon-green/10 overflow-hidden">
           {/* Multiplier HUD */}
           <MultiplierDisplay multiplier={multiplier} status={status} />
           
           {/* Multiplier Curve Engine */}
           <TelemetryCanvas multiplier={multiplier} status={status} />
        </div>

        {/* Console Panel */}
        <div className="glass-panel p-6 flex flex-col gap-6 bg-gunmetal border-l border-l-neon-green/30">
           <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border-thin pb-4">
                 <ShieldCheck className="text-neon-green" size={20} />
                 <h3 className="font-bold uppercase tracking-widest text-sm text-ice-white">Trading Console</h3>
              </div>

              <div className="space-y-4">
                 <p className="text-ice-white/40 text-[10px] font-bold leading-relaxed uppercase tracking-tight">
                    Terminal Active. Monitor live growth cycles and execute exits with precision.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-3 pb-4">
                    <div className="px-3 py-2 bg-obsidian border border-border-thin rounded-[4px]">
                       <div className="text-[9px] text-ice-white/20 uppercase font-bold tracking-wider">Current Mach</div>
                       <div className="text-neon-green font-black italic text-lg">{multiplier.toFixed(2)}x</div>
                    </div>
                    <div className={`px-3 py-2 border border-border-thin rounded-[4px] ${status === 'crashed' ? 'bg-electric-red/10' : 'bg-obsidian'}`}>
                       <div className="text-[9px] text-ice-white/20 uppercase font-bold tracking-wider">Status</div>
                       <div className={`font-black uppercase text-[10px] tracking-widest mt-1 ${status === 'crashed' ? 'text-electric-red' : 'text-ice-white/80'}`}>
                          {status}
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-auto space-y-3">
              {status === 'ready' || status === 'crashed' ? (
                <button 
                  onClick={handleStart}
                  className="w-full neon-button flex items-center justify-center gap-3 h-14"
                >
                  <Play size={20} />
                  Start Growth Cycle
                </button>
              ) : (
                <div className="w-full h-14 bg-neon-green/5 border border-neon-green/20 rounded-[4px] flex items-center justify-center gap-3 text-neon-green font-black uppercase tracking-widest animate-pulse">
                   Cycle Active
                </div>
              )}

              {status === 'crashed' && (
                <button 
                  onClick={handleReset}
                  className="w-full h-12 flex items-center justify-center gap-3 px-6 rounded-[4px] border border-border-thin bg-obsidian hover:bg-white/5 text-ice-white/40 hover:text-ice-white transition-all font-bold text-[11px] uppercase tracking-wider"
                >
                  <RotateCcw size={16} />
                  Reset Terminal
                </button>
              )}
           </div>
        </div>
      </div>

      {/* History Feed */}
      <div className="glass-panel p-4 flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide border-border-thin">
         <span className="text-[10px] font-bold text-ice-white/20 uppercase tracking-widest">Recent Cycles:</span>
         {[1.45, 2.89, 1.02, 10.42, 4.31].map((hist, i) => (
            <div key={i} className={`px-3 py-1 bg-obsidian border border-border-thin rounded-[4px] text-xs font-black italic ${hist > 2 ? 'text-neon-green' : 'text-electric-red'}`}>
               {hist.toFixed(2)}x
            </div>
         ))}
      </div>
    </div>
  );
};

export default DashboardPage;
