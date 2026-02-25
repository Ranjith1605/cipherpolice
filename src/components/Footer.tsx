export const Footer = () => (
    <footer className="py-20 relative overflow-hidden bg-asi-dark border-t border-white/5">
        <div className="container-vision relative z-10 px-4 text-center">
            <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-500 tracking-[0.4em] uppercase">
                    <span>Protocol 01</span>
                    <span className="w-1 h-1 rounded-full bg-asi-neon"></span>
                    <span>System Secure</span>
                </div>

                <h3 className="text-2xl font-black italic text-white tracking-widest uppercase">
                    CIPHER<span className="not-italic text-asi-neon">POLICE</span>
                </h3>

                <p className="text-[10px] font-mono text-gray-600 max-w-sm leading-relaxed uppercase tracking-[0.1em]">
                    The world's first AI-powered digital security force for the AI browser.
                    Protecting digital citizens in the meta-quantum world.
                </p>

                <div className="h-px w-24 bg-gradient-to-r from-transparent via-asi-neon/50 to-transparent"></div>

                <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">
                        © 2026 CipherPolice [GLOBAL COMMAND CENTER]
                    </p>
                    <p className="text-[8px] font-mono text-asi-neon/40 tracking-[0.3em] uppercase">
                        Sovereignty Ensured :: Transparency Protocol Active
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
