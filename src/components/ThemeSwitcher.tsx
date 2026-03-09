import { useState, useEffect } from 'react';
import { Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
    { id: 'default', name: 'Cyber Blue', class: '', color: 'var(--primary)' },
    { id: 'neon', name: 'Neon Night', class: 'theme-neon', color: '#bc13fe' },
    { id: 'matrix', name: 'Matrix', class: 'theme-matrix', color: '#00ff00' },
    { id: 'solar', name: 'Solar Flare', class: 'theme-solar', color: '#ff8c00' },
    { id: 'void', name: 'Void Red', class: 'theme-void', color: '#ff003c' },
];

export const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('default');

    useEffect(() => {
        const savedTheme = localStorage.getItem('cipher_theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        }
    }, []);

    const applyTheme = (themeId: string) => {
        const theme = themes.find(t => t.id === themeId);
        if (!theme) return;

        // Remove all previous theme classes
        document.documentElement.classList.remove('theme-neon', 'theme-matrix', 'theme-solar', 'theme-void');

        if (theme.class) {
            document.documentElement.classList.add(theme.class);
        }

        setActiveTheme(themeId);
        localStorage.setItem('cipher_theme', themeId);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 left-0 p-4 rounded-2xl border border-white/10 bg-[#050a14]/90 backdrop-blur-xl shadow-2xl w-48"
                    >
                        <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-3">
                            Select Theme
                        </h3>
                        <div className="space-y-2">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => applyTheme(theme.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${activeTheme === theme.id
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5'
                                        }`}
                                >
                                    <span
                                        className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                                        style={{ color: theme.color, backgroundColor: theme.color }}
                                    />
                                    <span className={`text-xs ${activeTheme === theme.id ? 'text-white font-bold' : 'text-white/60 font-medium'}`}>
                                        {theme.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:scale-105"
                style={{
                    background: 'rgba(5, 10, 20, 0.9)',
                    border: isOpen ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: isOpen ? '0 0 20px var(--bg-glow)' : '0 8px 24px rgba(0,0,0,0.5)',
                }}
            >
                {isOpen ? (
                    <X className="w-4 h-4 text-white/50" />
                ) : (
                    <Palette className="w-4 h-4 text-[var(--primary)]" />
                )}
            </button>
        </div>
    );
};
