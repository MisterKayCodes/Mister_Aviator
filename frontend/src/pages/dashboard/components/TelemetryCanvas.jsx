import React, { useEffect, useState, useRef } from 'react';
import { Plane } from 'lucide-react';

const TelemetryCanvas = ({ multiplier: liveMultiplier, status }) => {
  const [points, setPoints] = useState([{ x: 0, y: 550 }]);
  const [jetPos, setJetPos] = useState({ x: 0, y: 550, rotation: -45 });
  const requestRef = useRef();
  
  // HUD Dimensions
  const width = 1000;
  const height = 600;

  useEffect(() => {
    if (status === 'flying') {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        
        // Simulating the curve growth based on the multiplier
        // curve formula: y = height - (growth_factor * x^1.5)
        const nextX = Math.min(elapsed * 100, width - 50);
        const nextY = height - 50 - (Math.pow(nextX / 40, 2));

        const lastX = points[points.length - 1].x;
        const lastY = points[points.length - 1].y;
        
        // Calculate jet rotation based on trajectory
        const angle = Math.atan2(nextY - lastY, nextX - lastX) * (180 / Math.PI);

        if (nextX < width - 40 && nextY > 40) {
          setPoints(prev => [...prev, { x: nextX, y: nextY }]);
          setJetPos({ x: nextX, y: nextY, rotation: angle });
          requestRef.current = requestAnimationFrame(animate);
        }
      };

      requestRef.current = requestAnimationFrame(animate);
    } else if (status === 'crashed') {
      cancelAnimationFrame(requestRef.current);
    } else {
      // Reset
      setPoints([{ x: 0, y: height - 50 }]);
      setJetPos({ x: 0, y: height - 50, rotation: -45 });
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [status]);

  // Generate SVG path string
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="w-full h-full relative overflow-hidden bg-carbon-900/40 rounded-lg">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="var(--color-neon-green)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* HUD Grid Overlay (SVG version) */}
        <g className="opacity-[0.05]">
          {[...Array(20)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2={height} stroke="white" strokeWidth="1" />
          ))}
          {[...Array(12)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 50} x2={width} y2={i * 50} stroke="white" strokeWidth="1" />
          ))}
        </g>

        {/* The Flight Path */}
        <path 
          d={pathData} 
          fill="none" 
          stroke="var(--color-neon-green)" 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className="transition-all duration-100"
        />

        {/* Trailing Shadow/Fade */}
        <path 
          d={`${pathData} L ${jetPos.x} ${height - 50} L 0 ${height - 50} Z`}
          fill="url(#fadeGradient)"
          className="opacity-30"
        />

        {/* The Animated Jet */}
        <g 
          transform={`translate(${jetPos.x}, ${jetPos.y}) rotate(${jetPos.rotation})`}
          className={`${status === 'crashed' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        >
          <Plane 
            className="text-neon-green -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" 
            size={32} 
            fill="currentColor"
          />
        </g>

        {/* Crash Explosion Placeholder */}
        {status === 'crashed' && (
          <circle 
            cx={jetPos.x} 
            cy={jetPos.y} 
            r="20" 
            fill="var(--color-red-500)" 
            className="animate-ping opacity-75"
          />
        )}
      </svg>

      {/* Telemetry Coordinate HUD */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/20 uppercase space-y-1">
        <div>Trajectory: Optimizing...</div>
        <div>Altitude: {(height - jetPos.y).toFixed(0)}m</div>
        <div>Velocity: {liveMultiplier.toFixed(2)} mach</div>
      </div>
    </div>
  );
};

export default TelemetryCanvas;
