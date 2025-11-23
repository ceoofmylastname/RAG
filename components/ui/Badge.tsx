import React from 'react';

interface BadgeProps {
  label: string;
  color?: 'green' | 'orange' | 'red' | 'blue';
}

export const Badge: React.FC<BadgeProps> = ({ label, color = 'blue' }) => {
  const colors = {
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[color]}`}>
      {label}
    </span>
  );
};