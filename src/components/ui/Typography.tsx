import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export const Title: React.FC<TypographyProps & { level?: 1 | 2 | 3 | 4 }> = ({
    children,
    className = '',
    level = 1
}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const baseStyles = "font-black tracking-tight text-white";
    const levelStyles = {
        1: "text-5xl md:text-7xl mb-6",
        2: "text-4xl md:text-5xl mb-4",
        3: "text-2xl md:text-3xl mb-3",
        4: "text-xl md:text-2xl mb-2",
    };

    return (
        <Tag className={`${baseStyles} ${levelStyles[level]} ${className}`}>
            {children}
        </Tag>
    );
};

export const Paragraph: React.FC<TypographyProps> = ({ children, className = '' }) => {
    return (
        <p className={`text-gray-400 leading-relaxed text-lg ${className}`}>
            {children}
        </p>
    );
};
