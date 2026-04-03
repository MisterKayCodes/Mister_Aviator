import React from 'react';

const MultiplierDisplay = ({ multiplier, status }) => {
  const isCrashed = status === 'crashed';
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="text-center transition-all duration-300">
        <div className={`
          text-8xl font-black italic tracking-tighter tabular-nums
          ${isCrashed ? 'text-red-500 scale-110' : 'text-neon-green animate-pulse shadow-neon'}
          drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]
        `}>
          {multiplier.toFixed(2)}x
        </div>
        
        {isCrashed && (
           <div className="mt-4 px-6 py-2 bg-red-500/20 border border-red-500/30 rounded text-red-500 font-mono text-sm uppercase tracking-[0.3em] backdrop-blur-sm animate-bounce">
              Telemetry Lost • Signal Terminated
           </div>
        )}
      </div>
    </div>
  );
};

export default MultiplierDisplay;
