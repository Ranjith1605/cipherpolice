import React from 'react';

interface GoldTextProps {
    children: React.ReactNode;
    className?: string;
}

export const GoldText: React.FC<GoldTextProps> = ({ children, className = '' }) => (
    <span
        className={`
      bg-clip-text text-transparent bg-gradient-to-r from-[#FFD26F] to-[#C99700]
      inline-block ${className}
    `}
    >
        {children}
    </span>
);
