import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import { User } from 'lucide-react';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-obsidian relative overflow-hidden">
      {/* Heavy Premium Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/background.png")' }}
      ></div>

      <div className="w-full max-w-md glass-panel p-10 space-y-10 border-t-2 border-t-neon-green/30 rounded-[4px] relative z-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-neon-green/5 rounded-[4px] border border-neon-green/10">
              <img src="/logo.png" alt="SkyPunt Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-black uppercase tracking-tight italic">Create Account</h2>
            <p className="text-ice-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">SkyPunt Official Terminal • Secure Node</p>
          </div>
        </div>

        <RegisterForm />

        <div className="pt-6 text-center border-t border-border-thin">
          <p className="text-ice-white/30 text-[11px] font-bold uppercase tracking-wider">
            Already a member? <Link to="/login" className="text-neon-green hover:text-neon-green/80 transition-colors ml-1">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
