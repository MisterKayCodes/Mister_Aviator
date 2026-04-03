import React, { useState } from 'react';
import { Target, AlertTriangle, Send } from 'lucide-react';

const MultiplierForm = () => {
  const [targetMultiplier, setTargetMultiplier] = useState('2.00');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleInject = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mocking API call to backend override endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(`Round Overridden: Next crash targeted at ${targetMultiplier}x`);
      setTimeout(() => setSuccessMsg(''), 5000);
    }, 1200);
  };

  return (
    <div className="glass-panel p-6 border-electric-red/30 bg-gradient-to-b from-gunmetal/60 to-electric-red/5">
      <div className="flex items-center gap-3 mb-6">
        <Target className="text-electric-red" size={24} />
        <h2 className="text-xl font-black uppercase text-white tracking-tight">Growth Override Override</h2>
      </div>

      <div className="mb-6 p-4 bg-electric-red/10 border border-electric-red/30 rounded-[4px] flex gap-4 items-start">
        <AlertTriangle className="text-electric-red shrink-0" size={20} />
        <div className="text-sm text-electric-red/80 font-medium">
          <strong className="block text-electric-red mb-1">WARNING: MANUAL INTERVENTION</strong>
          Setting a manual multiplier overrides the algorithmic RNG for the next flight. 
          Use this to shape the outcome of the market, but be aware that multiple high payouts can impact system liquidity.
        </div>
      </div>

      <form onSubmit={handleInject} className="space-y-6">
        <div>
          <label className="block text-[11px] font-bold text-ice-white/40 uppercase tracking-widest mb-2">
            Target Multiplier (x)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-red font-black text-xl">x</span>
            <input 
              type="number" 
              step="0.01"
              min="1.01"
              max="10000"
              required
              value={targetMultiplier}
              onChange={(e) => setTargetMultiplier(e.target.value)}
              className="w-full bg-obsidian border-2 border-electric-red/30 rounded-[4px] py-4 pl-10 pr-6 text-2xl font-black text-white focus:outline-none focus:border-electric-red transition-colors font-mono"
            />
          </div>
        </div>

        {successMsg && (
          <div className="text-neon-green text-sm font-bold bg-neon-green/10 border border-neon-green/30 p-3 rounded-[4px] text-center uppercase tracking-wide animate-pulse">
            {successMsg}
          </div>
        )}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-electric-red text-white py-4 rounded-[4px] font-black uppercase tracking-widest flex justify-center items-center gap-3 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Injecting Command...</span>
          ) : (
            <>
              FORCE CRASH AT {targetMultiplier}X
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default MultiplierForm;
