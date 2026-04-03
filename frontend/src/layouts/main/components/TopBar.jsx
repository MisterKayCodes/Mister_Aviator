import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { ShieldCheck, LogOut, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TopBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 border-b border-border-thin flex items-center justify-between px-8 bg-obsidian z-40">
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-2 mr-6 cursor-default">
          <ShieldCheck className="text-neon-green" size={20} />
          <span className="text-[14px] font-black uppercase tracking-widest text-ice-white">SkyPunt</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
           <Link to="/menu" className="flex items-center gap-2 text-ice-white/50 hover:text-neon-green transition-colors cursor-pointer group">
             <span className="text-[11px] font-bold uppercase tracking-wider">Games Lobby</span>
           </Link>
           <Link to="/profile" className="flex items-center gap-2 text-ice-white/50 hover:text-neon-green transition-colors cursor-pointer group">
             <span className="text-[11px] font-bold uppercase tracking-wider">Profile</span>
           </Link>
           <Link to="/settings" className="flex items-center gap-2 text-ice-white/50 hover:text-neon-green transition-colors cursor-pointer group">
             <span className="text-[11px] font-bold uppercase tracking-wider">Settings</span>
           </Link>
           {user?.is_admin && (
             <Link to="/admin" className="flex items-center gap-2 text-electric-red/50 hover:text-electric-red transition-colors cursor-pointer group border-l border-border-thin pl-6 ml-2">
               <span className="text-[11px] font-bold uppercase tracking-wider">Admin Control</span>
             </Link>
           )}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end mr-4">
          <span className="text-[11px] font-extrabold text-ice-white uppercase tracking-tight">{user?.full_name || 'Member'}</span>
        </div>
        <button 
          onClick={handleLogout}
          title="Sign Out"
          className="w-10 h-10 rounded-[4px] bg-electric-red/5 border border-electric-red/10 overflow-hidden flex items-center justify-center group cursor-pointer hover:bg-electric-red/10 hover:border-electric-red/30 transition-all">
           <LogOut className="text-electric-red/40 group-hover:text-electric-red transition-colors" size={18} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
