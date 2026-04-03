import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/main';
import AdminLayout from './layouts/admin';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MenuPage from './pages/menu';
import DashboardPage from './pages/dashboard';
import NotFoundPage from './pages/notfound';

// Admin Pages
import GameControlPage from './pages/admin/control';
import PilotsPage from './pages/admin/pilots';
import AuditLogsPage from './pages/admin/logs';

// Simple Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
     return <div className="h-screen bg-obsidian flex items-center justify-center text-neon-green font-bold uppercase tracking-[0.2em] animate-pulse">Initializing Secure Terminal...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Placeholder Pages
const LiveTerminal = () => <div className="text-2xl font-black italic uppercase text-neon-green">Live Terminal Active. Processing data...</div>;
const Profile = () => <div className="text-2xl font-black uppercase">Member Profile Console.</div>;

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-obsidian selection:bg-neon-green selection:text-black">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Member Terminal */}
          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/live" element={<LiveTerminal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<div>System Configuration</div>} />
            <Route path="/history" element={<div>Growth History Records</div>} />
            <Route path="/analytics" element={<div>Precision Analytics</div>} />
          </Route>

          {/* Secure Official Command Center */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<GameControlPage />} />
            <Route path="pilots" element={<PilotsPage />} />
            <Route path="logs" element={<AuditLogsPage />} />
          </Route>

          {/* Backward compatibility / Dashboard redirect */}
          <Route path="/member/*" element={<Navigate to="/menu" replace />} />

          {/* Fallback 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
