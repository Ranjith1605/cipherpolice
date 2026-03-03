import { motion } from 'framer-motion';

export const Footer = () => (
    <footer className="py-40 relative overflow-hidden bg-transparent border-t border-white/5">
        <div className="container-vision relative z-10 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-16"
            >
                <div className="flex items-center gap-8 text-[9px] font-black text-gray-600 tracking-[0.5em] uppercase italic">
                    <span className="opacity-60">Sovereign Protocol</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-quantum-blue shadow-[0_0_12px_rgba(0,242,255,0.4)]"></span>
                    <span className="opacity-60">Spirit Safe</span>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-4xl md:text-5xl font-black italic text-white tracking-[0.3em] uppercase mb-4">
                        CIPHER<span className="not-italic text-quantum-blue drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">POLICE</span>
                    </h3>
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-quantum-blue/40 to-transparent"></div>
                </div>

                <p className="text-[12px] font-mono text-gray-500 max-w-lg leading-relaxed uppercase tracking-[0.1em] italic font-medium opacity-80">
                    The world's first divine digital security force for the meta-quantum browser.
                    Providing a vow of protection for every digital soul.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <p className="text-[10px] font-mono text-gray-600 tracking-[0.4em] uppercase font-black opacity-40">
                        © 2026 CipherPolice [CELESTIAL COMMAND CENTER]
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <span className="text-[8px] font-mono text-quantum-blue/50 tracking-[0.5em] uppercase animate-pulse">
                            Sovereignty Ensured
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/10"></div>
                        <span className="text-[8px] font-mono text-guardian-gold/50 tracking-[0.5em] uppercase">
                            Sacred Protocols Active
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    </footer>
);
