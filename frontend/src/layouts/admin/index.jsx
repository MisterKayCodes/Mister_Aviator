import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminSidebar from './components/AdminSidebar';
import AdminTopBar from './components/AdminTopBar';

const AdminLayout = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If we've finished loading and the user is NOT an admin, eject them
    if (!loading && user && !user.is_admin) {
      console.warn('[Admin Guard] User is not Admin. Redirecting to lobby...');
      navigate('/menu', { replace: true });
    }
  }, [user, loading, navigate]);

  // While checking status, show a minimal loading placeholder
  if (loading) {
    return <div className="h-screen bg-obsidian flex items-center justify-center text-electric-red font-black uppercase tracking-[0.3em] animate-pulse">Scanning Authorization...</div>;
  }

  // If definitely not admin, stop rendering
  if (!user || !user.is_admin) return null;

  return (
    <div className="flex h-screen bg-obsidian text-ice-white overflow-hidden font-inter border-2 border-electric-red/10">
      <AdminSidebar />

      <main className="flex-1 relative flex flex-col overflow-hidden">
        <AdminTopBar />

        {/* Dynamic Terminal Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth scrollbar-hide">
           {/* Terminal Grid HUD Overlay - Red Variation */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#FF3B3012_1px,transparent_1px),linear-gradient(to_bottom,#FF3B3012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="relative z-10">
              <Outlet />
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
