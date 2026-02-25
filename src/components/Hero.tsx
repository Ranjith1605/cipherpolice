

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
                <div className="relative inline-block mb-8 animate-float">
                    <div className="absolute inset-0 bg-asi-neon/20 blur-3xl rounded-full"></div>
                    <img
                        src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                        alt="CipherPolice Logo"
                        className="relative h-40 w-auto mx-auto"
                    />
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#scanner" className="group relative px-8 py-4 bg-asi-neon/10 border border-asi-neon/50 text-asi-neon font-bold rounded-lg overflow-hidden transition-all hover:bg-asi-neon/20 hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                        <span className="relative z-10">INITIALIZE SCAN</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-asi-neon/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    </a>
                    <a href="#methodology" className="px-8 py-4 text-gray-400 hover:text-white transition-colors">
                        View Methodology
                    </a>
                </div>
            </div>
        </section>
    );
};
