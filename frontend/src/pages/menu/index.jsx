import React from 'react';
import { useAuth } from '../../context/AuthContext';
import GameCard from './components/GameCard';
import { Wallet, BellRing, Sparkles } from 'lucide-react';

const MenuPage = () => {
   const { user } = useAuth();
   
   return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
         {/* Heavy Premium Background Image Overlay */}
         <div 
           className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none bg-center bg-cover bg-no-repeat"
           style={{ backgroundImage: 'url("/background.png")' }}
         ></div>

         <div className="relative z-10 space-y-8">
            {/* Top Promo Banner */}
            <div className="w-full glass-panel border-neon-green/30 bg-gradient-to-r from-obsidian via-gunmetal to-obsidian p-6 md:p-8 relative overflow-hidden rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
               {/* Ambient Background Gradient */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                  <div className="w-full md:w-auto text-center md:text-left">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded-full mb-4">
                        <Sparkles size={14} className="text-neon-green" />
                        <span className="text-[10px] font-bold text-neon-green uppercase tracking-widest">Premium Node</span>
                     </div>
                     <h2 className="text-3xl lg:text-4xl font-black italic uppercase tracking-tight text-white mb-2">
                        Welcome, {user?.full_name?.split(' ')[0] || 'Pilot'}
                     </h2>
                     <p className="text-ice-white/40 text-xs font-bold uppercase tracking-wider">
                        Select your flight path and execute sequence.
                     </p>
                  </div>
                  
                  <div className="flex items-center gap-6 bg-black/40 p-4 rounded-[8px] border border-border-thin shadow-inner w-full md:w-auto justify-between md:justify-start">
                     <div>
                        <div className="text-[10px] font-bold text-ice-white/30 uppercase tracking-widest mb-1">Available Balance</div>
                        <div className="text-3xl font-extrabold text-neon-green tabular-nums drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                          ${Number(user?.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                     </div>
                     <button className="h-14 px-8 bg-ice-white hover:bg-gray-200 text-black font-black uppercase tracking-[0.15em] rounded-[4px] transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                        Deposit
                     </button>
                  </div>
               </div>
            </div>

            {/* Game Grid */}
            <div>
               <div className="flex items-center gap-3 mb-6 px-1">
                  <div className="w-2 h-8 bg-neon-green rounded-full shadow-[0_0_10px_rgba(57,255,20,0.5)]"></div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight">Crash Lobby</h3>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <GameCard 
                     to="/dashboard" 
                     title="SkyPunt Original" 
                     description="The classic multiplier terminal. Ride the curve and eject before the crash." 
                     isHot={true} 
                     players={4192} 
                     bgStyle="bg-gradient-to-br from-gunmetal via-black to-neon-green/30"
                     isComingSoon={false}
                  />
                  <GameCard 
                     to="/hero" 
                     title="SkyPunt Hero" 
                     description="High volatility flight paths with random Super Multipliers during ascent." 
                     isHot={false} 
                     players={1834} 
                     bgStyle="bg-gradient-to-br from-gunmetal via-black to-purple-500/20"
                     isComingSoon={true}
                  />
                  <GameCard 
                     to="/jetx" 
                     title="JetX Pro" 
                     description="Dual-bet tactical crash game. Launch two jets and secure multiple exit points." 
                     isHot={false} 
                     players={953} 
                     bgStyle="bg-gradient-to-br from-gunmetal via-black to-blue-500/20"
                     isComingSoon={true}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default MenuPage;
