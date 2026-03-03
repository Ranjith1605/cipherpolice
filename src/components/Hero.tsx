import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap } from 'lucide-react';
import { FloatingOrb } from './ui/FloatingOrb';

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Anti-Gravity Grid (Hero Layer) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="grid grid-cols-12 h-full w-full">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-white/5"></div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative inline-block mb-12 group"
                >
                    {/* Futuristic Logo Carrier - Mathematically Scaled Down */}
                    <div className="absolute inset-0 bg-quantum-blue/5 blur-[80px] rounded-full group-hover:bg-quantum-blue/15 transition-all duration-1000"></div>
                    <div className="relative p-6 rounded-[2rem] bg-white/[0.01] backdrop-blur-2xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-quantum/20">
                        <img
                            src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                            alt="CipherPolice Logo"
                            className="relative h-32 md:h-40 w-auto mx-auto block transform group-hover:scale-[1.02] transition-transform duration-1000"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-quantum-blue/10 to-transparent"></div>
                    </div>
                    {/* Status Pill - Precision Placement */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 glass-ethereal border border-quantum/20 rounded-full shadow-xl whitespace-nowrap"
                    >
                        <span className="text-[9px] font-black text-quantum-blue italic tracking-[0.4em] uppercase">Protection Vector: SEEDED</span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none"
                >
                    <span className="bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent italic">
                        Cipher
                    </span>
                    <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Police</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="inline-block px-4 py-1 mb-10 border border-white/5 rounded-full bg-white/[0.01]"
                >
                    <span className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.6em] uppercase">Celestial Command Interface</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-base md:text-lg text-gray-500 font-medium mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed px-6"
                >
                    Your digital sovereignty is absolute. We stand as the <span className="text-white">Universal Guardian</span> of your meta-existence,
                    neutralizing threats through <span className="text-quantum-blue">Sacred Protocols</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    <FloatingOrb icon={Shield} label="Vow" variant="quantum" onClick={() => window.location.hash = '#scanner'} />
                    <FloatingOrb icon={Lock} label="Creed" variant="guardian" onClick={() => window.location.hash = '#about'} />
                    <FloatingOrb icon={Eye} label="Monitor" variant="quantum" onClick={() => window.location.hash = '#browser-monitor'} />
                </motion.div>
            </div>

            {/* Anti-Gravity Orbs (Background Decoration) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-quantum-blue/5 blur-[120px]"
                />
                <motion.div
                    animate={{ y: [30, -30, 30], x: [20, -20, 20] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-[10%] w-96 h-96 rounded-full bg-guardian-gold/5 blur-[150px]"
                />
            </div>
        </section>
    );
};
