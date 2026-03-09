import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Ambient radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00f2ff]/5 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex justify-center mb-10"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00f2ff]/10 blur-[60px] rounded-full" />
                        <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                            <img
                                src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                                alt="CipherPolice Logo"
                                className="h-24 w-auto mx-auto"
                            />
                        </div>
                        {/* Active indicator */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#050a14] border border-[#00f2ff]/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
                            <span className="text-[9px] font-bold text-[#00f2ff] tracking-[0.3em] uppercase">Active</span>
                        </div>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-5 leading-[1.05]"
                >
                    Your data<br />
                    <span className="text-[#00f2ff]">stays yours.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.7 }}
                    className="text-lg text-white/40 font-normal leading-relaxed mb-10 max-w-xl mx-auto"
                >
                    CipherPolice is a browser extension that blocks trackers, enforces consent laws, and keeps your browsing private — automatically. No configuration needed.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#features"
                        className="px-8 py-3.5 rounded-xl bg-[#00f2ff] text-[#050a14] font-bold text-sm tracking-wide hover:bg-[#00f2ff]/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,242,255,0.25)]"
                    >
                        See How It Works
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 rounded-xl bg-transparent text-white/60 font-semibold text-sm tracking-wide border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                {/* Trust stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="mt-16 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 max-w-md mx-auto"
                >
                    {[
                        { value: '100%', label: 'Local Processing' },
                        { value: '0', label: 'Data Sold' },
                        { value: 'AES-256', label: 'Encryption' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll nudge */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};
