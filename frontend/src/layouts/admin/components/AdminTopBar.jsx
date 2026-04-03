import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { User, ShieldAlert } from 'lucide-react';

const AdminTopBar = () => {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-electric-red/20 flex items-center justify-between px-8 bg-obsidian z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-electric-red">
          <ShieldAlert size={16} />
          <span className="text-[11px] font-bold uppercase tracking-wider">God Mode System</span>
        </div>
        <div className="w-px h-4 bg-electric-red/20"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end mr-4">
          <span className="text-[11px] font-extrabold text-electric-red uppercase tracking-tight">{user?.full_name || 'The Mister'}</span>
        </div>
        <div className="w-10 h-10 rounded-[4px] bg-electric-red/10 border border-electric-red/30 overflow-hidden flex items-center justify-center group cursor-pointer hover:bg-electric-red/20 transition-all">
           <User className="text-electric-red group-hover:text-white transition-colors" size={20} />
        </div>
      </div>
    </header>
  );
};

export default AdminTopBar;
