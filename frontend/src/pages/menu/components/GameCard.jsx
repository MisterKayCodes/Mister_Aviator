import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Flame } from 'lucide-react';

const GameCard = ({ to, title, description, isHot, players, bgStyle, isComingSoon }) => {
  return (
    <div className={`relative group rounded-[8px] overflow-hidden border border-border-thin glass-panel transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(57,255,20,0.15)] ${isComingSoon ? 'opacity-70 grayscale cursor-not-allowed' : ''}`}>
      {/* Background Graphic Mockup */}
      <div className={`w-full h-48 ${bgStyle} relative overflow-hidden flex items-center justify-center`}>
         <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent z-10"></div>
         {isComingSoon && (
           <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center backdrop-blur-sm">
             <span className="px-5 py-2 bg-obsidian border border-white/20 text-ice-white font-black uppercase tracking-[0.2em] text-sm transform -rotate-12 shadow-2xl">Coming Soon</span>
           </div>
         )}
      </div>

      <div className="p-5 relative z-20 bg-obsidian/80 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black italic uppercase text-ice-white tracking-tight">{title}</h3>
          {isHot && (
            <div className="flex items-center gap-1 bg-electric-red/20 text-electric-red border border-electric-red/30 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.2)]">
              <Flame size={12} />
              Hot
            </div>
          )}
        </div>
        
        <p className="text-ice-white/40 text-xs font-medium mb-5 h-8 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-ice-white/30 text-[11px] font-bold">
            <Users size={14} className="text-neon-green" />
            <span className="tabular-nums font-mono">{players.toLocaleString()}</span> Active
          </div>
          
          {isComingSoon ? (
            <button disabled className="px-4 py-2 rounded-[4px] bg-gunmetal border border-border-thin text-ice-white/30 text-[10px] font-bold uppercase tracking-widest cursor-not-allowed">
              Locked
            </button>
          ) : (
            <Link to={to} className="px-6 py-2 rounded-[4px] neon-button text-xs flex items-center gap-2 transform group-hover:scale-105 transition-transform">
               Play Now
               <Play size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
