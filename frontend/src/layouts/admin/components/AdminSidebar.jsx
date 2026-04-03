import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { 
  Users, 
  Settings2, 
  TerminalSquare, 
  LogOut, 
  ShieldAlert,
  ArrowLeft
} from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    end
    className={({ isActive }) => `
      flex items-center gap-4 px-4 py-3 rounded-[4px] transition-all duration-300 border
      ${isActive ? 'bg-electric-red/10 text-electric-red border-electric-red/20' : 'text-ice-white/40 border-transparent hover:text-ice-white hover:bg-ice-white/5'}
    `}
  >
    <Icon size={18} />
    <span className="text-[11px] font-bold uppercase tracking-wider">{label}</span>
  </NavLink>
);

const AdminSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 border-r border-electric-red/20 bg-obsidian flex flex-col items-stretch p-6 space-y-8 z-50">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-electric-red/10 rounded-[4px] border border-electric-red/30 flex items-center justify-center p-1">
          <ShieldAlert size={24} className="text-electric-red" />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight uppercase leading-tight text-white">SkyPunt</h1>
          <div className="text-[9px] font-bold text-electric-red flex items-center gap-1 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-red animate-pulse"></div>
            God Mode
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1.5">
        <SidebarItem to="/admin" icon={TerminalSquare} label="Control Center" />
        <SidebarItem to="/admin/pilots" icon={Users} label="User Manifest" />
        <SidebarItem to="/admin/logs" icon={Settings2} label="System Logs" />
      </nav>

      <div className="space-y-4">
        <button 
          onClick={() => navigate('/menu')}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-[4px] text-ice-white/60 hover:text-ice-white hover:bg-ice-white/5 transition-all duration-300 border border-transparent"
        >
          <ArrowLeft size={18} />
          <span className="text-[11px] font-bold uppercase tracking-wider">Exit Admin</span>
        </button>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-[4px] text-ice-white/60 hover:text-electric-red hover:bg-electric-red/5 transition-all duration-300 border border-transparent hover:border-electric-red/20"
        >
          <LogOut size={18} />
          <span className="text-[11px] font-bold uppercase tracking-wider">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
