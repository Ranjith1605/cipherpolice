import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CyberCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Hide default cursor globally when this component mounts via CSS
    useEffect(() => {
        document.body.style.cursor = 'none';
        
        // Ensure all interactive elements also hide cursor
        const style = document.createElement('style');
        style.innerHTML = `
            * { cursor: none !important; }
        `;
        document.head.appendChild(style);

        return () => {
            document.body.style.cursor = 'auto';
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-screen">
            {/* Inner precise dot */}
            <motion.div
                className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{
                    type: 'tween',
                    ease: 'linear',
                    duration: 0
                }}
            />

            {/* Outer trailing/orbiting ring matching Perplexity style */}
            <motion.div
                className="absolute border border-primary rounded-full shadow-[0_0_20px_var(--primary)]"
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 16),
                    y: mousePosition.y - (isHovering ? 24 : 16),
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    backgroundColor: isHovering ? 'rgba(var(--primary-rgb, 0, 242, 255), 0.1)' : 'transparent'
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5
                }}
            />
        </div>
    );
};
