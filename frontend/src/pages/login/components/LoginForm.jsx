import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ShieldCheck, Mail, Lock, AlertTriangle, Loader2 } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');
    
    try {
      await login({ username: email, password }); // OAuth2 expects 'username'
      navigate('/menu');
    } catch (err) {
      setError(err.response?.data?.detail || 'Authentication failed. Please verify your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-electric-red/10 border border-electric-red/20 rounded-[4px] flex items-center gap-3 text-electric-red text-sm font-medium">
          <AlertTriangle size={16} />
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors pointer-events-none" size={18} />
          <input 
            type="email" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Password</label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors pointer-events-none" size={18} />
          <input 
            type="password" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isLoggingIn}
        className="w-full neon-button flex items-center justify-center gap-2 h-12"
      >
        {isLoggingIn ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          'SIGN IN'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
