import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Portal', href: '#home' },
        { name: 'Divine Creed', href: '#creed' },
        { name: 'Divine Protocols', href: '#about' },
        { name: 'Sacred Law', href: '#compliance' },
        { name: 'Guardian Monitor', href: '#browser-monitor' },
        { name: 'Force Dashboard', href: '#dashboard' },
        { name: 'The Uplink', href: '#contact' },
    ];

    return (
    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-[200] transition-all duration-700 ${scrolled ? 'py-0' : 'py-2'}`}>
            <div className={`relative px-6 py-2 glass-ethereal border border-white/5 shadow-2xl transition-all duration-700 rounded-3xl ${scrolled ? 'bg-obsidian/90 scale-[0.99] border-quantum/20' : 'bg-obsidian/40'}`}>
                <div className="flex items-center justify-between h-16">
                    {/* Brand/Logo - Left Anchored */}
                    <a href="#home" className="flex items-center gap-4 group">
                        <div className="relative p-2 rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-quantum/40 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                            <img
                                src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                                alt="Cipher Logo"
                                className="relative h-10 w-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-quantum-blue/20 to-transparent"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter leading-none italic">
                                <span className="text-white">Cipher</span>
                                <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic font-sans">Police</span>
                            </span>
                            <span className="text-[8px] font-black text-quantum-blue tracking-[0.4em] uppercase opacity-70 mt-1">Sovereign Guard</span>
                        </div>
                    </a>

                    {/* Desktop Navigation - Centered via Grid Alignment */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-[10px] font-black text-gray-500 hover:text-white transition-all duration-500 group uppercase tracking-[0.2em]"
                                >
                                    {item.name}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-quantum-blue group-hover:w-1/3 transition-all duration-500 shadow-[0_0_10px_rgba(0,242,255,0.8)]"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Actions & Status */}
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center px-4 py-1.5 bg-quantum-blue/[0.03] border border-quantum/20 rounded-full gap-2 shadow-xl group hover:border-quantum/40 transition-all duration-500">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-quantum-blue"></span>
                            </span>
                            <span className="text-[9px] font-black text-quantum-blue/80 tracking-widest uppercase group-hover:text-quantum-blue transition-colors">Vigilance Active</span>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-quantum/20"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* Mobile Menu - 8px Rhythm */}
            <div className={`lg:hidden transition-all duration-700 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="glass-ethereal border border-quantum/20 p-4 space-y-2 rounded-2xl shadow-2xl mx-auto w-[98%]">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-500 hover:text-white hover:bg-quantum-blue/10 transition-all duration-500 font-black border border-transparent hover:border-quantum/20 uppercase text-[9px] tracking-widest"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
