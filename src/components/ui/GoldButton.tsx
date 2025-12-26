import React from 'react';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const GoldButton: React.FC<GoldButtonProps> = ({ 
  children, 
  onClick, 
  disabled, 
  className = '',
  type = 'button'
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
      px-10 py-4 font-extrabold tracking-widest uppercase transition duration-300 ease-in-out
      bg-gradient-to-r from-[#FFD26F] to-[#C99700]
      text-slate-900 rounded-lg shadow-lg hover:shadow-2xl hover:brightness-110
      transform hover:scale-[1.02] active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed
      text-sm md:text-base
      ${className}
    `}
  >
    {children}
  </button>
);
