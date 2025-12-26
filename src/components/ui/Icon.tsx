import React from 'react';

interface IconProps {
    children: React.ReactNode;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ children, className = '' }) => (
    <span className={`text-4xl ${className}`} style={{ textShadow: '0 0 10px rgba(255, 210, 111, 0.5)' }}>
        {children}
    </span>
);
