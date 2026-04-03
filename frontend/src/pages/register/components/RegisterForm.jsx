import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { PlaneTakeoff, Mail, Lock, User, AlertTriangle, Loader2 } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match.');
    }
    
    setIsRegistering(true);
    setError('');
    
    try {
      await register({
        email: formData.email,
        full_name: formData.full_name,
        password: formData.password
      });
      navigate('/login', { state: { message: 'Registration successful. Please sign in.' } });
    } catch (err) {
      setError(err.response?.data?.detail || 'Account creation failed. Please check your data.');
    } finally {
      setIsRegistering(false);
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
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Full Name</label>
        <div className="relative group">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors pointer-events-none" size={18} />
          <input 
            type="text" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="John Doe"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors" size={18} />
          <input 
            type="email" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="user@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Password</label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors" size={18} />
          <input 
            type="password" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="••••••••••••"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold text-ice-white/40 uppercase tracking-wider ml-1">Confirm Password</label>
        <div className="relative group">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-ice-white/20 group-focus-within:text-neon-green transition-colors" size={18} />
          <input 
            type="password" 
            required
            className="w-full bg-obsidian border border-border-thin rounded-[4px] px-10 py-3 text-sm text-ice-white focus:border-neon-green/50 focus:outline-none transition-all placeholder:text-ice-white/10"
            placeholder="••••••••••••"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isRegistering}
        className="w-full neon-button flex items-center justify-center gap-2 h-12"
      >
        {isRegistering ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          'CREATE ACCOUNT'
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
