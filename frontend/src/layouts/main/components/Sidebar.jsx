import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { 
  LayoutDashboard, 
  Plane, 
  History, 
  Settings, 
  LogOut, 
  User, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      flex items-center gap-4 px-4 py-3 rounded-[4px] transition-all duration-300 border
      ${isActive ? 'bg-neon-green/10 text-neon-green border-neon-green/20' : 'text-ice-white/40 border-transparent hover:text-ice-white hover:bg-ice-white/5'}
    `}
  >
    <Icon size={18} />
    <span className="text-[11px] font-bold uppercase tracking-wider">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 border-r border-border-thin bg-obsidian flex flex-col items-stretch p-6 space-y-8 z-50">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-neon-green/10 rounded-[4px] border border-neon-green/20 flex items-center justify-center p-1">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight uppercase leading-tight">SkyPunt</h1>
          <div className="text-[9px] font-bold text-neon-green flex items-center gap-1 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></div>
            Official
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5">
        <SidebarItem to="/menu" icon={LayoutDashboard} label="Games Lobby" />
        <SidebarItem to="/dashboard" icon={Plane} label="Aviator Terminal" />
        <SidebarItem to="/live" icon={History} label="Live Feed" />
        <SidebarItem to="/analytics" icon={TrendingUp} label="Analytics" />
        <SidebarItem to="/history" icon={History} label="History" />
        <div className="pt-4 pb-2 border-t border-border-thin mx-2 my-4">
          <span className="text-[9px] font-bold text-ice-white/20 uppercase tracking-[0.2em] px-2">Account</span>
        </div>
        <SidebarItem to="/profile" icon={User} label="Profile" />
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
        {user?.role === 'admin' && (
          <SidebarItem to="/admin" icon={ShieldCheck} label="Official Control" />
        )}
      </nav>

      <div className="space-y-4">
        <div className="glass-panel p-4 space-y-1 border-neon-green/10">
          <div className="text-[9px] font-bold text-ice-white/40 uppercase tracking-widest">Total Balance</div>
          <div className="text-2xl font-extrabold text-neon-green tabular-nums">
            ${Number(user?.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-[4px] text-electric-red/60 hover:text-electric-red hover:bg-electric-red/5 transition-all duration-300 border border-transparent hover:border-electric-red/20"
        >
          <LogOut size={18} />
          <span className="text-[11px] font-bold uppercase tracking-wider">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
