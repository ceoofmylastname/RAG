import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon,
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 rounded-xl font-bold font-display text-sm tracking-wide uppercase flex items-center justify-center gap-3 overflow-hidden group transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] border border-white/10",
    secondary: "bg-surface border border-white/10 hover:border-white/30 text-white hover:bg-white/5",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    glow: "bg-gradient-to-r from-n8n-DEFAULT to-orange-600 text-white shadow-[0_0_20px_rgba(255,109,90,0.4)] hover:shadow-[0_0_40px_rgba(255,109,90,0.7)]"
  };

  return (
    <motion.button 
      whileHover={props.disabled ? {} : { scale: 1.02 }}
      whileTap={props.disabled ? {} : { scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Gradient Overlay for shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="group-hover:rotate-12 transition-transform duration-300">{icon}</span>}
        {children}
      </span>
    </motion.button>
  );
};