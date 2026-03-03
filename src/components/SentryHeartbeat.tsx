import { motion } from 'framer-motion';
import { Shield, Activity } from 'lucide-react';

export const SentryHeartbeat = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: [0, -4, 0]
            }}
            transition={{
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[210] px-5 py-1.5 glass-ethereal border border-quantum/20 flex items-center gap-6 shadow-2xl rounded-full scale-[0.9]"
        >
            <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                    <Activity className="w-2.5 h-2.5 text-quantum-blue animate-pulse" />
                    <div className="absolute inset-0 bg-quantum-blue/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-[9px] font-black text-white tracking-[0.4em] uppercase whitespace-nowrap opacity-80">
                    Sentry: <span className="text-quantum-blue">Nominal</span>
                </span>
            </div>

            <div className="w-px h-3 bg-white/5" />

            <div className="flex items-center gap-3">
                <Shield className="w-2.5 h-2.5 text-guardian-gold opacity-50" />
                <span className="text-[8px] font-bold text-gray-500 tracking-[0.2em] uppercase truncate max-w-[180px]">
                    Patrol: Sector 7G Secured
                </span>
            </div>

            <div className="flex gap-1.5">
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.8, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                        className="w-1 h-1 rounded-full bg-quantum-blue/60"
                    />
                ))}
            </div>
        </motion.div>
    );
};
