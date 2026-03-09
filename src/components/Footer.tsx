export const Footer = () => (
    <footer className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
                <img
                    src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
                    alt="CipherPolice"
                    className="h-7 w-auto opacity-60"
                />
                <span className="text-base font-black tracking-tight">
                    <span className="text-white">Cipher</span><span className="text-[#00f2ff]">Police</span>
                </span>
            </div>

            <p className="text-[11px] text-white/20 text-center">
                AI-powered browser security · Zero data transmission · Privacy by default
            </p>

            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
                <span className="text-[10px] text-white/20 tracking-[0.2em] uppercase">
                    © 2026 CipherPolice
                </span>
            </div>
        </div>
    </footer>
);
