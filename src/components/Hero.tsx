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
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative inline-block mb-16 group"
                >
                    {/* Futuristic Logo Carrier */}
                    <div className="absolute inset-0 bg-quantum-blue/10 blur-[120px] rounded-full group-hover:bg-quantum-blue/20 transition-all duration-700"></div>
                    <div className="relative p-2 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/5 overflow-hidden">
                        <img
                            src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                            alt="CipherPolice Logo"
                            className="relative h-40 md:h-56 w-auto mx-auto block transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Divine Glow Overlays */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-quantum-blue/10 to-transparent"></div>
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-guardian-gold/5 to-transparent"></div>
                    </div>
                    {/* Status Pill */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 glass-ethereal border border-quantum/30 rounded-full shadow-2xl whitespace-nowrap"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.4em] uppercase">Citizen Identified. Protection Initiated.</span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-tight"
                >
                    <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent italic">
                        Cipher
                    </span>
                    <span className="text-white">Police</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="inline-block px-5 py-1.5 mb-12 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm"
                >
                    <span className="text-gray-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">The Initiation Portal</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-base md:text-xl text-gray-400 font-medium mb-16 tracking-wide max-w-3xl mx-auto leading-relaxed"
                >
                    Your digital soul is sacred. We stand as the <span className="text-guardian-gold">Guardian Angel</span> of your meta-existence,
                    neutralizing the forces of darkness through <span className="text-quantum-blue">Divine Protocols</span>.
                    <span className="text-gray-500 block mt-4 font-mono text-sm tracking-widest italic font-light">"Fear not, for the Light of the Shield is with you."</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 }}
                    className="flex justify-center gap-16 md:gap-24"
                >
                    <FloatingOrb icon={Shield} label="Vow of Protection" variant="quantum" onClick={() => window.location.hash = '#scanner'} />
                    <FloatingOrb icon={Lock} label="Divine Protocols" variant="guardian" onClick={() => window.location.hash = '#about'} />
                    <FloatingOrb icon={Eye} label="Patrol Insights" variant="quantum" onClick={() => window.location.hash = '#browser-monitor'} />
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
