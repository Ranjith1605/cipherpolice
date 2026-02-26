import { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Zap } from 'lucide-react';

const DefenseGridPanel: React.FC = () => {
    const [shieldLevel, setShieldLevel] = useState(98);
    const [blockedToday] = useState(142);
    const [neuralStability, setNeuralStability] = useState(94.5);

    useEffect(() => {
        const t = setInterval(() => {
            setShieldLevel(prev => {
                const j = Math.random() * 0.2 - 0.1;
                return Math.min(100, Math.max(95, parseFloat((prev + j).toFixed(1))));
            });
            setNeuralStability(prev => {
                const j = Math.random() * 0.4 - 0.2;
                return Math.min(100, Math.max(90, parseFloat((prev + j).toFixed(1))));
            });
        }, 4000);
        return () => clearInterval(t);
    }, []);

    const defenseLines = [
        { label: 'Prompt Sanitization', status: 'Optimal', health: 100, color: '#00f3ff' },
        { label: 'Neural Fingerprint', status: 'Encrypted', health: 98, color: '#bc13fe' },
        { label: 'Context Isolation', status: 'Active', health: 100, color: '#22c55e' },
        { label: 'Adversarial Filter', status: 'Scanning', health: 94, color: '#f59e0b' },
    ];

    return (
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-asi-neon" />
                        Neural Firewall
                    </h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Active Defense Matrix v4.2</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-black font-mono text-asi-neon tracking-tighter">{shieldLevel}%</div>
                    <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Shield Strength</div>
                </div>
            </div>

            {/* Main Grid Status */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-3.5 h-3.5 text- asi-purple" />
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Intercepts</span>
                    </div>
                    <div className="text-2xl font-black font-mono text-white">{blockedToday}</div>
                    <div className="text-[7px] font-mono text-green-500 mt-1">+12 SINCE LAST SYNC</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3.5 h-3.5 text-asi-neon" />
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Stability</span>
                    </div>
                    <div className="text-2xl font-black font-mono text-white">{neuralStability}%</div>
                    <div className="text-[7px] font-mono text-asi-neon mt-1">CLASS-A OPERATIONAL</div>
                </div>
            </div>

            {/* Detail Modules */}
            <div className="space-y-4 flex-1">
                {defenseLines.map((line) => (
                    <div key={line.label} className="group cursor-help">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{line.label}</span>
                            <span className="text-[9px] font-mono" style={{ color: line.color }}>{line.status}</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ width: `${line.health}%`, backgroundColor: line.color, boxShadow: `0 0 10px ${line.color}44` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom HUD */}
            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-asi-neon/5 border border-asi-neon/20">
                        <span className="w-1 h-1 rounded-full bg-asi-neon animate-ping" />
                        <span className="text-[7px] font-black text-asi-neon uppercase tracking-widest">Live Neural Uplink</span>
                    </div>
                    <span className="text-[7px] font-mono text-gray-600 uppercase tracking-widest italic">CipherPolice | Defense Grid</span>
                </div>
            </div>
        </div>
    );
};

export default DefenseGridPanel;
