import React from 'react';
import { motion } from 'framer-motion';

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: 'blue' | 'n8n';
  size?: 'xl' | 'lg' | 'md';
  className?: string;
  alignment?: 'center' | 'left';
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({ 
  children, 
  variant = 'blue', 
  size = 'lg',
  className = '',
  alignment = 'center'
}) => {
  const textSize = {
    xl: "text-5xl sm:text-7xl",
    lg: "text-4xl md:text-5xl",
    md: "text-2xl md:text-3xl"
  };

  const gradientClass = variant === 'n8n' 
    ? "text-gradient-n8n-animated" 
    : "text-gradient-animated";

  return (
    <div className={`relative ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${textSize[size]} font-display font-bold tracking-tight inline-block relative z-10`}
      >
        <span className={gradientClass}>
          {children}
        </span>
      </motion.h2>

      {/* Animated Underline Slash */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        className={`h-2 ${alignment === 'center' ? 'mx-auto' : ''} mt-2 w-24 rounded-full bg-gradient-to-r ${
          variant === 'n8n' ? 'from-n8n-DEFAULT to-yellow-500' : 'from-blue-500 to-purple-500'
        }`}
        style={{ transformOrigin: alignment === 'center' ? 'center' : 'left' }}
      />
    </div>
  );
};