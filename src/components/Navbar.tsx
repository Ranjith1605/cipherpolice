import { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';
import { playTechClick } from '../utils/sounds';

interface NavbarProps {
    onOpenFirewall?: () => void;
}

export const Navbar = ({ onOpenFirewall }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Privacy', href: '#ethics' },
        { name: 'Compliance', href: '#compliance' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-[200] transition-all duration-500`}>
            <div className={`relative px-6 py-3 border rounded-2xl transition-all duration-500 ${scrolled ? 'bg-[#050a14]/95 border-white/10 backdrop-blur-xl' : 'bg-[#050a14]/60 border-white/5 backdrop-blur-md'}`}>
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative p-1.5 rounded-xl bg-white/[0.03] border border-white/10 transition-all duration-300 group-hover:border-primary/30">
                            <img
                                src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                                alt="CipherPolice Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-black tracking-tight leading-none">
                                <span className="text-white">Cipher</span><span className="text-primary">Police</span>
                            </span>
                            <span className="text-[8px] text-white/30 tracking-[0.3em] uppercase mt-0.5">Browser Security</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => playTechClick()}
                                className="px-4 py-2 text-[11px] font-semibold text-white/40 hover:text-white transition-colors duration-300 uppercase tracking-[0.15em]"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Status dot + mobile toggle */}
                    <div className="flex items-center gap-4">
                        {/* Cognitive Firewall Subchain Trigger */}
                        <button
                            onClick={() => {
                                playTechClick();
                                onOpenFirewall?.();
                            }}
                            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/20 transition-all group"
                            title="Open Cognitive Firewall Subchain"
                        >
                            <BrainCircuit className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-bold text-primary/70 group-hover:text-primary tracking-[0.2em] uppercase transition-colors">Firewall</span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#050a14]/95 border border-white/10 backdrop-blur-xl p-3 space-y-1 rounded-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all text-[11px] font-semibold uppercase tracking-[0.2em]"
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Mobile Firewall Trigger */}
                    <button
                        onClick={() => {
                            playTechClick();
                            setIsOpen(false);
                            onOpenFirewall?.();
                        }}
                        className="w-full text-left px-4 py-3 rounded-xl text-primary/70 hover:text-primary hover:bg-primary/10 transition-all text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2"
                    >
                        <BrainCircuit className="w-3.5 h-3.5" />
                        Enter Subchain
                    </button>
                </div>
            </div>
        </nav>
    );
};
