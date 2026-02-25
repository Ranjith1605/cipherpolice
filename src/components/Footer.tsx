export const Footer = () => (
    <footer className="py-12 bg-black/80 border-t border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
                <img
                    src="/logo.png"
                    alt="CipherPolice Neural Emblem"
                    className="h-16 w-auto opacity-50 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                />
                <div className="text-center">
                    <h2 className="text-lg font-black tracking-tighter bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent">CipherPolice</h2>
                    <p className="text-xs text-gray-600 uppercase tracking-[0.3em] mt-1">Neural Perimeter Security</p>
                </div>
            </div>
            <div className="text-center text-gray-500">
                <p className="text-sm tracking-widest font-light">
                    © 2026 CipherPolice. All rights reserved.
                    <span className="block mt-2 text-[10px] opacity-30">ENCRYPTED BY ASI PERIMETER</span>
                </p>
            </div>
        </div>
    </footer>
);
