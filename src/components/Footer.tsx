import { motion } from 'framer-motion';

export const Footer = () => (
    <footer className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
        <div className="container-vision relative z-10 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-10"
            >
                <div className="flex items-center gap-6 text-[10px] font-black text-gray-500 tracking-[0.5em] uppercase">
                    <span>Sovereign Protocol</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-quantum-blue shadow-[0_0_8px_var(--quantum-blue)]"></span>
                    <span>Spirit Safe</span>
                </div>

                <h3 className="text-3xl font-black italic text-white tracking-[0.4em] uppercase">
                    CIPHER<span className="not-italic text-quantum-blue drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">POLICE</span>
                </h3>

                <p className="text-[11px] font-mono text-gray-500 max-w-md leading-relaxed uppercase tracking-[0.2em] italic font-medium">
                    The world's first divine digital security force for the meta-quantum browser.
                    Providing a vow of protection for every digital soul.
                </p>

                <div className="h-px w-48 bg-gradient-to-r from-transparent via-quantum-blue/30 to-transparent"></div>

                <div className="flex flex-col gap-4">
                    <p className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase font-bold">
                        © 2026 CipherPolice [CELESTIAL COMMAND CENTER]
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-[8px] font-mono text-quantum-blue/40 tracking-[0.4em] uppercase animate-pulse">
                            Sovereignty Ensured
                        </span>
                        <span className="text-[8px] font-mono text-white/10 tracking-[0.4em] uppercase">::</span>
                        <span className="text-[8px] font-mono text-guardian-gold/40 tracking-[0.4em] uppercase">
                            Sacred Protocols Active
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    </footer>
);
