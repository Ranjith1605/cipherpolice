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

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = 'CipherPolice – Browser Security & Privacy Shield';
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14] font-sans text-white relative overflow-x-hidden selection:bg-[#00f2ff] selection:text-black">
      {/* Subtle dot-grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00f2ff_1px,_transparent_1px)] bg-[size:80px_80px]" />
      </div>

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
    </div>
  );
}
