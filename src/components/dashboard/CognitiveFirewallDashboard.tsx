import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Activity } from 'lucide-react';
import CognitivePanelV2 from './CognitivePanelV2';
import SecurityPanelV2 from './SecurityPanelV2';
import DefenseGridPanel from './DefenseGridPanel';

interface CognitiveFirewallDashboardProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CognitiveFirewallDashboard: React.FC<CognitiveFirewallDashboardProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[300] bg-[#050a14] overflow-hidden"
                >
                    {/* Darker cyber grid background overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:100px_100px] opacity-[0.05]" />
                    
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 h-20 border-b border-white/5 bg-[#050a14]/80 backdrop-blur-xl flex items-center justify-between px-8 z-50">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                                <Activity className="w-6 h-6 text-primary animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black font-heading tracking-wider uppercase">
                                    Cognitive <span className="text-primary">Firewall</span>
                                </span>
                                <span className="text-[10px] text-white/40 tracking-[0.3em] font-mono uppercase">
                                    Subchain Protection Level: Maximum
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5">
                                <ShieldAlert className="w-4 h-4 text-red-500" />
                                <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase font-mono">
                                    Monitoring AI Threats
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-red-400 transition-all border border-white/5 hover:border-red-500/30 group"
                            >
                                <X className="w-5 h-5 text-white/60 group-hover:text-red-400" />
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Layout Grid */}
                    <div className="absolute inset-0 top-20 overflow-y-auto p-6 lg:p-10 scrollbar-precise">
                        <div className="max-w-7xl mx-auto space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black text-white font-heading uppercase tracking-wide">
                                        Active <span className="text-primary">Overwatch</span>
                                    </h2>
                                    <p className="text-sm font-mono text-white/40 mt-1">Protecting Digital Citizens from Hostile AI Queries</p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto min-h-[500px]">
                                    <SecurityPanelV2 />
                                    <CognitivePanelV2 defaultPersona="focused" />
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="w-full"
                            >
                                <DefenseGridPanel />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
