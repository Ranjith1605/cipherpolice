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
        { name: 'Features', href: '#features' },
        { name: 'AI Monitor', href: '#browser-monitor' },
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Data & Ethics', href: '#data-ethics' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 border-b ${scrolled ? 'bg-asi-dark/95 border-cyan-500/20 shadow-lg shadow-black/30' : 'bg-asi-dark/80 border-white/5'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex items-center space-x-3 transition duration-300 hover:opacity-80 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-asi-neon/50 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                                alt="Cipher Logo"
                                className="relative h-12 w-auto"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-wider">
                            <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent">Cipher</span>
                        </span>
                    </a>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-asi-neon hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition duration-200"
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

            {isOpen && (
                <div className="md:hidden bg-asi-dark border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:bg-white/5 hover:text-asi-neon block px-3 py-2 rounded-md text-base font-medium transition duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
