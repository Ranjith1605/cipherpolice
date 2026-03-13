import React, { useState, useEffect } from 'react';
import { motion as fm } from 'framer-motion';
import { Activity, Zap, ShieldCheck } from 'lucide-react';

const DefenseGridPanel: React.FC = () => {
    const [shieldLevel, setShieldLevel] = useState(99.9);
    const [blockedToday] = useState(4892);
    const [neuralStability, setNeuralStability] = useState(99.4);

    useEffect(() => {
        const t = setInterval(() => {
            setShieldLevel(prev => {
                const j = Math.random() * 0.1 - 0.05;
                return Math.min(100, Math.max(99.0, parseFloat((prev + j).toFixed(1))));
            });
            setNeuralStability(prev => {
                const j = Math.random() * 0.2 - 0.1;
                return Math.min(100, Math.max(98.0, parseFloat((prev + j).toFixed(1))));
            });
        }, 4000);
        return () => clearInterval(t);
    }, []);

    const defenseLines = [
        { label: 'Harm Interception', status: 'Optimal', health: 100, color: 'var(--primary)' },
        { label: 'Empathy Calibration', status: 'Encrypted', health: 99, color: 'var(--secondary)' },
        { label: 'Mankind Protection', status: 'Active', health: 100, color: 'var(--primary)' },
        { label: 'Hostile Intent Filter', status: 'Scanning', health: 98, color: 'var(--secondary)' },
    ];

    return (
        <div className="glass-ethereal border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl h-full flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase italic font-mono">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                        Mankind Defense
                    </h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mt-1 font-black italic">AI Overwatch Network v7.0</p>
                </div>
                <div className="text-right">
                    <fm.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-3xl font-black font-mono text-primary tracking-tighter drop-shadow-[0_0_10px_var(--primary)]"
                    >
                        {shieldLevel}%
                    </fm.div>
                    <div className="text-[9px] font-black text-gray-600 uppercase tracking-widest mt-1">Grid Integrity</div>
                </div>
            </div>

            {/* Main Grid Status */}
            <div className="grid grid-cols-2 gap-6 mb-10">
                <fm.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-6 rounded-3xl glass-ethereal border border-white/5 shadow-xl group hover:border-primary/20 transition-all"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <Activity className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Malicious Hits</span>
                    </div>
                    <div className="text-3xl font-black font-mono text-white tracking-tighter">{blockedToday}</div>
                    <div className="text-[8px] font-black text-secondary mt-2 tracking-widest">+114 SINCE LAST CYCLE</div>
                </fm.div>
                <fm.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-6 rounded-3xl glass-ethereal border border-white/5 shadow-xl group hover:border-secondary/20 transition-all"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Safety Net</span>
                    </div>
                    <div className="text-3xl font-black font-mono text-white tracking-tighter">{neuralStability}%</div>
                    <div className="text-[8px] font-black text-primary mt-2 tracking-widest">ZERO HARM STATUS</div>
                </fm.div>
            </div>

            {/* Detail Modules */}
            <div className="space-y-6 flex-1">
                {defenseLines.map((line) => (
                    <div key={line.label} className="group cursor-help">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">{line.label}</span>
                            <span className="text-[9px] font-black font-mono uppercase tracking-widest" style={{ color: line.color }}>{line.status}</span>
                        </div>
                        <div className="h-2 bg-white/[0.03] rounded-full overflow-hidden border border-white/5 shadow-inner">
                            <fm.div
                                initial={{ width: 0 }}
                                animate={{ width: `${line.health}%` }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="h-full rounded-full relative"
                                style={{ backgroundColor: line.color, boxShadow: `0 0 10px ${line.color}44` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                            </fm.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom HUD */}
            <div className="mt-10 pt-8 border-t border-white/5">
                <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
                        <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] font-mono">Live Threat Network</span>
                    </div>
                    <span className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em] italic font-mono">CipherPolice | Firewall</span>
                </div>
            </div>
        </div>
    );
};

export default DefenseGridPanel;
