import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import DataEthics from './components/DataEthics';
import Team from './components/Team';
import { Footer } from './components/Footer';
import { ChatSidebar } from './components/ChatSidebar';
import ComplianceGuide from './components/ComplianceGuide';
import { Contact } from './components/Contact';
import { useState } from 'react';
import { HyperspaceBackground } from './components/HyperspaceBackground';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = 'CipherPolice – Browser Security & Privacy Shield';
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14] font-sans text-white relative overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Dynamic Background */}
      <HyperspaceBackground />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <DataEthics />
        <ComplianceGuide />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      <ThemeSwitcher />
    </div>
  );
}
