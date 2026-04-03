import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-obsidian text-ice-white overflow-hidden font-inter">
      {/* Primary Viewport */}
      <main className="flex-1 relative flex flex-col overflow-hidden">
        {/* Official Top Bar */}
        <TopBar />

        {/* Dynamic Terminal Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth scrollbar-hide">
           {/* Terminal Grid HUD Overlay */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="relative z-10">
              <Outlet />
           </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
