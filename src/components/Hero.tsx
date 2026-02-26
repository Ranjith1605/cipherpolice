

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-asi-dark">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full w-full">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-white/5"></div>
                    ))}
                </div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-asi-neon/30 animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-asi-purple/30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-asi-dark/40 to-asi-dark"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <div className="relative inline-block mb-16 group">
                    {/* Futuristic Logo Carrier */}
                    <div className="absolute inset-0 bg-asi-neon/10 blur-[100px] rounded-full group-hover:bg-asi-neon/20 transition-all duration-700"></div>
                    <div className="relative p-1 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/5 overflow-hidden">
                        <img
                            src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                            alt="CipherPolice Logo"
                            className="relative h-36 md:h-48 w-auto mx-auto block transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-asi-neon/5 to-transparent"></div>
                    </div>
                    {/* Status Pill Attached to Logo */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-asi-dark/80 backdrop-blur-md border border-white/10 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] whitespace-nowrap">
                        <span className="text-[9px] font-bold text-asi-neon tracking-[0.3em] uppercase">Protocol: Universal Guardian</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                        CipherPolice
                    </span>
                </h1>

                <div className="inline-block px-4 py-1 mb-8 border border-white/5 rounded-full bg-white/[0.02] backdrop-blur-sm">
                    <span className="text-gray-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">Saviour of the Digital World</span>
                </div>

                <p className="text-base md:text-xl text-gray-400 font-medium mb-10 tracking-wide max-w-3xl mx-auto leading-relaxed">
                    The ultimate protector of digital citizens. Building a world of harmonious, peaceful, and enlightened civilization across the meta-frontier.
                    <span className="text-gray-500 block mt-2">The Sovereign Shield of your Global AI Existence.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-4">
                    <a href="#scanner" className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-sm tracking-widest text-[10px] uppercase overflow-hidden transition-all hover:bg-white/10">
                        <span className="relative z-10 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-asi-neon shadow-[0_0_8px_var(--asi-neon)]"></span>
                            ACTIVATE PROTECTION
                        </span>
                    </a>
                    <a href="#methodology" className="group px-10 py-4 text-gray-500 hover:text-white font-bold transition-all flex items-center gap-2">
                        VIEW METHODOLOGY
                        <span className="text-asi-neon group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
