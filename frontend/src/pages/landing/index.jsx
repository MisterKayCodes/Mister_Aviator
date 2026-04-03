import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col font-inter selection:bg-neon-green/30 text-ice-white scroll-smooth overflow-x-hidden relative">
      {/* Heavy Premium Background Image Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/background.png")' }}
      ></div>

      {/* Header */}
      <header className="h-20 flex items-center justify-between px-6 lg:px-20 border-b border-white/5 sticky top-0 bg-obsidian/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SkyPunt Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-black uppercase tracking-tighter">SkyPunt</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-ice-white/40 hover:text-ice-white text-[11px] font-bold uppercase transition-colors tracking-widest leading-none">Sign In</Link>
          <Link to="/register" className="neon-button px-6 py-2 h-10 flex items-center text-[11px]">GET STARTED</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-20 pt-24 pb-20 text-center relative z-10">
        <div className="max-w-4xl space-y-10 relative z-10 w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded-full text-[10px] font-black text-neon-green uppercase tracking-[0.2em] animate-pulse mx-auto">
               Terminal Status: Online
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter">
              PRECISION <br/>
              <span className="text-neon-green">MULTIPLIED.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-ice-white/50 font-medium leading-tight max-w-2xl mx-auto uppercase tracking-tight">
              Experience the world’s most advanced high-frequency crash engine. <br className="hidden lg:block"/>
              Watch the multiplier. Command the exit. Secure your profit in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link to="/register" className="neon-button h-16 w-full sm:w-auto px-12 flex items-center justify-center gap-3 text-lg md:text-xl group relative overflow-hidden">
                START TRADING
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Visual: Rising Growth Curve Area */}
        <div className="w-full max-w-6xl mt-20 h-48 md:h-64 relative opacity-30">
           <svg viewBox="0 0 1000 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <path 
                d="M0,200 Q250,200 500,150 T1000,0" 
                fill="none" 
                stroke="#00FF41" 
                strokeWidth="4" 
                className="drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
              />
           </svg>
        </div>
      </main>

      {/* Stats Bar */}
      <div className="w-full border-y border-white/5 bg-gunmetal py-4 overflow-x-auto scrollbar-hide">
         <div className="flex items-center justify-start lg:justify-center gap-12 px-6 min-w-max animate-in fade-in duration-1000">
            <div className="flex items-center gap-3">
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-ice-white/40 whitespace-nowrap">
                  $4,290,102 <span className="text-neon-green">Paid Out</span>
               </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10 shrink-0"></div>
            <div className="flex items-center gap-3">
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-ice-white/40 whitespace-nowrap">
                  12,402 <span className="text-neon-green">Active Traders</span>
               </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10 shrink-0"></div>
            <div className="flex items-center gap-3">
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-ice-white/40 whitespace-nowrap">
                  99.9% <span className="text-neon-green">Uptime</span>
               </span>
            </div>
         </div>
      </div>

      {/* Feature Grid */}
      <section className="px-6 lg:px-20 py-24 md:py-32 bg-black/20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="glass-panel p-8 space-y-4 hover:border-white/10 transition-colors group rounded-[4px]">
               <div className="w-12 h-12 bg-white/5 rounded-[4px] flex items-center justify-center text-neon-green">
                  <Zap size={24} />
               </div>
               <h3 className="text-xl font-black uppercase italic">Instant Liquidity</h3>
               <p className="text-ice-white/40 text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Withdraw your earnings the second you cash out. No delays. No friction. Our gateway processes payouts at terminal velocity.
               </p>
            </div>

            <div className="glass-panel p-8 space-y-4 hover:border-white/10 transition-colors group border-neon-green/10 rounded-[4px]">
               <div className="w-12 h-12 bg-neon-green/5 rounded-[4px] flex items-center justify-center text-neon-green">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-xl font-black uppercase italic text-neon-green">Provably Fair</h3>
               <p className="text-ice-white/40 text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Every flight is cryptographically verified. Absolute transparency is our baseline. Inspect every seed and hash on the ledger.
               </p>
            </div>

            <div className="glass-panel p-8 space-y-4 hover:border-white/10 transition-colors group rounded-[4px] md:col-span-2 lg:col-span-1">
               <div className="w-12 h-12 bg-white/5 rounded-[4px] flex items-center justify-center text-neon-green">
                  <TrendingUp size={24} />
               </div>
               <h3 className="text-xl font-black uppercase italic">Elite Intelligence</h3>
               <p className="text-ice-white/40 text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Live crowd-tracking and bot-integration allow you to gauge the market sentiment before you fly. Trade with data, not luck.
               </p>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-20 border-t border-white/5 bg-black/40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
           <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ice-white/20">Legal Control</span>
              <ul className="space-y-3">
                 <li><a href="#" className="nav-link text-xs">Privacy Policy</a></li>
                 <li><a href="#" className="nav-link text-xs">Terms of Service</a></li>
                 <li><a href="#" className="nav-link text-xs">Risk Disclosure</a></li>
              </ul>
           </div>
           <div className="md:col-span-1 lg:col-span-3 flex flex-col items-start lg:items-end gap-4 text-left lg:text-right">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white/5 tracking-tighter">SkyPunt Official</h2>
              <p className="text-ice-white/20 text-[10px] max-w-xs uppercase leading-relaxed font-bold">
                 SkyPunt is a high-performance growth forecasting system. Trading involves capital risk. Node V2.1.0-Official.
              </p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
