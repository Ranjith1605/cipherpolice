import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import BrowserMonitorSection from './components/BrowserMonitorSection';
import { ActiveDefenseGrid } from './components/ActiveDefenseGrid';
import DashboardPage from './pages/DashboardPage';
import DataEthics from './components/DataEthics';
import Team from './components/Team';
import { Footer } from './components/Footer';
import { ChatSidebar } from './components/ChatSidebar';
import { SentryHeartbeat } from './components/SentryHeartbeat';
import { AgentTerminal } from './components/AgentTerminal';

import { About } from './components/About';
import { GuardianCreed } from './components/GuardianCreed';
import { Methodology } from './components/Methodology';
import { Scanner } from './components/Scanner';
import ComplianceGuide from './components/ComplianceGuide';
import { Contact } from './components/Contact';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Mouse reactive motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);

    document.title = 'CipherPolice – Anti-Gravity Meta-Quantum Protocol';
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14] font-sans text-white relative overflow-x-hidden selection:bg-quantum-blue selection:text-black">
      {/* Anti-Gravity Reactive Background */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--quantum-blue)_1px,_transparent_1px)] bg-[size:100px_100px]" />
      </motion.div>

      <div className="fixed inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent pointer-events-none z-[1]"></div>

      <SentryHeartbeat />
      <AgentTerminal />

      <Navbar />
      <main className="relative z-10">
        <Hero />

        <About />
        <GuardianCreed />

        <Features />

        <Methodology />

        <BrowserMonitorSection />
        <ActiveDefenseGrid />

        <DashboardPage />

        <Scanner />

        <ComplianceGuide />

        <DataEthics />

        <Team />

        <Contact />
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}
