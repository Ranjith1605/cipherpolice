import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Mission', href: '#about' }, // About section
        { name: 'Features', href: '#features' },
        { name: 'Protocols', href: '#compliance' }, // Compliance section
        { name: 'Monitor', href: '#browser-monitor' },
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Force', href: '#team' }, // Team section
        { name: 'Uplink', href: '#contact' }, // Contact section
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
            <div className={`relative px-6 py-2 glass-premium border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 ${scrolled ? 'bg-asi-dark/60' : 'bg-asi-dark/40'}`}>
                <div className="flex items-center justify-between h-16">
                    {/* Brand/Logo */}
                    <a href="#home" className="flex items-center space-x-3 group">
                        <div className="relative p-1.5 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden">
                            <img
                                src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                                alt="Cipher Logo"
                                className="relative h-10 w-auto transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-asi-neon/20 to-transparent"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter leading-none">
                                <span className="bg-gradient-to-r from-asi-neon to-white bg-clip-text text-transparent">Cipher</span>
                                <span className="text-white">Police</span>
                            </span>
                            <span className="text-[8px] font-bold text-asi-neon tracking-[0.3em] uppercase opacity-80 mt-0.5">Digital Security Force</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-[13px] font-bold text-gray-400 hover:text-white transition-all duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-asi-neon group-hover:w-2/3 transition-all duration-300 shadow-[0_0_10px_var(--asi-neon)]"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions/Status */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center px-4 py-1.5 bg-asi-neon/5 border border-asi-neon/30 rounded-full gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asi-neon opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-asi-neon"></span>
                            </span>
                            <span className="text-[10px] font-black text-asi-neon tracking-widest uppercase">Live Scan</span>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="glass-premium border border-white/10 p-4 space-y-2 lg:hidden">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-asi-neon/10 transition-all duration-300 font-bold border border-transparent hover:border-asi-neon/20"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
