

export const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-asi-dark">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="grid grid-cols-12 h-full w-full">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-asi-neon/10"></div>
                    ))}
                </div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-asi-neon animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-asi-purple animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-1/2 w-3 h-3 rounded-full bg-asi-neon animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-asi-dark/50 to-asi-dark"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl">
                <div className="relative inline-block mb-16 group">
                    {/* Futuristic Logo Carrier */}
                    <div className="absolute inset-0 bg-asi-neon/20 blur-[80px] rounded-full group-hover:bg-asi-neon/30 transition-all duration-700"></div>
                    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/10 overflow-hidden neon-border-beam">
                        <img
                            src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                            alt="CipherPolice Logo"
                            className="relative h-40 md:h-52 w-auto mx-auto block transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-asi-neon/10 to-transparent"></div>
                    </div>
                    {/* Status Pill Attached to Logo */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-asi-dark border border-asi-neon/50 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] animate-bounce-slow whitespace-nowrap">
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.2em] uppercase">ENHANCED SECURITY ACTIVE</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent animate-gradient">
                        CipherPolice
                    </span>
                </h1>

                <div className="inline-block px-4 py-1 mb-6 border border-asi-neon/30 rounded-full bg-asi-glass backdrop-blur-md">
                    <span className="text-asi-neon font-mono text-xs md:text-sm tracking-[0.2em]">ELITE SECURITY FORCE OF THE AI BROWSER</span>
                </div>

                <p className="text-lg md:text-2xl text-gray-400 font-light mb-8 tracking-wide max-w-3xl mx-auto">
                    The next evolution of digital defense. Protecting digital citizens and users across the meta-quantum frontier.
                    <span className="text-asi-silver block mt-2 underline decoration-asi-neon/30">The Guardian of your Global AI Existence.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
                    <a href="#scanner" className="group relative px-10 py-4 bg-transparent border border-asi-neon/50 text-asi-neon font-black rounded-sm tracking-tighter overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] hover:border-asi-neon">
                        <div className="absolute inset-0 bg-asi-neon/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-asi-neon animate-pulse"></span>
                            INITIALIZE DEFENSE PROTOCOL
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
