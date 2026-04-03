import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6 relative overflow-hidden">
      {/* Heavy Premium Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/background.png")' }}
      ></div>

      <div className="w-full max-w-lg glass-panel p-12 space-y-10 border-t-2 border-t-electric-red/30 rounded-[4px] relative z-10 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-5 bg-electric-red/5 rounded-full border border-electric-red/10 animate-pulse">
              <ShieldAlert className="text-electric-red" size={48} />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-6xl font-black italic uppercase italic text-ice-white tracking-tighter">404</h1>
            <h2 className="text-xl font-black uppercase text-electric-red tracking-[0.2em]">Route Compromised</h2>
            <p className="text-ice-white/40 text-[11px] font-bold uppercase tracking-widest max-w-xs mx-auto">
              The requested node does not exist or has been unauthorized. 
              Secure your connection and return to the terminal.
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gunmetal border border-border-thin text-ice-white rounded-[4px] font-bold uppercase tracking-widest hover:bg-white/5 hover:border-ice-white/20 transition-all active:scale-[0.98]"
        >
          <ArrowLeft size={18} />
          Return to Terminal
        </button>

        <div className="pt-8 border-t border-border-thin">
           <img src="/logo.png" alt="SkyPunt Logo" className="w-8 h-8 opacity-20 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
