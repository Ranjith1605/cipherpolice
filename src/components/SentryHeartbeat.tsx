import { motion } from 'framer-motion';
import { Shield, Activity } from 'lucide-react';

export const SentryHeartbeat = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: [0, -5, 0]
            }}
            transition={{
                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-2 glass-ethereal rounded-full border border-white/5 flex items-center gap-4 shadow-2xl"
        >
            <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-quantum-blue animate-pulse" />
                <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase whitespace-nowrap">
                    Sentry Heartbeat: <span className="text-quantum-blue">Nominal</span>
                </span>
            </div>

            <div className="w-px h-3 bg-white/10" />

            <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-guardian-gold" />
                <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase truncate max-w-[200px]">
                    Scanning for Session Hijacking...
                </span>
            </div>

            <div className="flex gap-1 ml-2">
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                        className="w-1 h-1 rounded-full bg-quantum-blue"
                    />
                ))}
            </div>
        </motion.div>
    );
};
