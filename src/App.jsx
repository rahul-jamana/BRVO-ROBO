import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RobotExplorer360 } from './components/RobotExplorer360';
import { TechDashboard } from './components/TechDashboard';
import { HowItWorks } from './components/HowItWorks';
import { Applications } from './components/Applications';
import { ControlCenter } from './components/ControlCenter';
import { Timeline } from './components/Timeline';
import { TeamSection } from './components/TeamSection';
import { Gallery } from './components/Gallery';
import { ExhibitionGuestbook } from './components/ExhibitionGuestbook';
import { AboutBEC } from './components/AboutBEC';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <RobotExplorer360 />
        <TechDashboard />
        <HowItWorks />
        <Applications />
        <ControlCenter />
        <Timeline />
        <TeamSection />
        <Gallery />
        <ExhibitionGuestbook />
        <AboutBEC />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
