import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface FloatingOrbProps {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
    variant?: 'quantum' | 'guardian';
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({ icon: Icon, label, onClick, variant = 'quantum' }) => {
    const colorClass = variant === 'quantum' ? 'text-quantum-blue shadow-[0_0_20px_rgba(0,242,255,0.3)]' : 'text-guardian-gold shadow-[0_0_20px_rgba(255,202,40,0.3)]';
    const borderClass = variant === 'quantum' ? 'border-quantum/30' : 'border-guardian/30';

    return (
        <motion.button
            whileHover={{ scale: 1.1, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`relative flex flex-col items-center gap-3 group`}
        >
            <div className={`w-16 h-16 rounded-full glass-ethereal border ${borderClass} flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-white/20`}>
                {/* Pulsing Glow */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className={`absolute inset-0 rounded-full ${variant === 'quantum' ? 'bg-quantum-blue' : 'bg-guardian-gold'}`}
                />

                <Icon className={`w-6 h-6 ${colorClass} relative z-10`} />
            </div>

            <span className="text-[9px] font-black text-white/40 group-hover:text-white tracking-[0.3em] uppercase transition-colors">
                {label}
            </span>

            {/* Anti-Gravity Shadow */}
            <div className="w-8 h-1 bg-black/40 blur-md rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
    );
};
