import React from 'react';
import { Bot, ArrowUp, Code, ShieldCheck, Cpu, Crown } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Footer() {
  const scrollToTop = () => {
    soundFx.playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leadership = [
    { name: "Er. Alok Mallick", role: "Chairman" },
    { name: "Ayush Mallick", role: "Executive Director" },
    { name: "Dr. B. N. Biswal", role: "Director" }
  ];

  const websiteTeam = [
    "Jitendra Nial",
    "Rahul Jamana",
    "Bhagyabrata Gantayat",
    "Shiva Sundar Mohanty"
  ];

  const droneTeam = [
    "Nihar Ranjan Sahoo",
    "Kritiranjan Rout",
    "Bidyadhar",
    "Akash Nayak"
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 font-sans border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-400">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-wider">
                  BRVO
                </span>
                <span className="ml-2 text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 uppercase font-semibold">
                  BEC ROBOT
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-mono">
              “Built to Welcome. Designed to Impress.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Humanoid service robotics platform engineered at Bhubaneswar Engineering College.
            </p>
          </div>

          {/* Supported & Guided By Leadership Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>SUPPORTED & GUIDED BY</span>
            </div>
            <ul className="space-y-1.5 text-xs font-mono text-slate-300">
              {leadership.map((leader, i) => (
                <li key={i} className="hover:text-amber-300 transition-colors">
                  <span className="text-white font-medium">{leader.name}</span>
                  <span className="text-[10px] text-amber-400/90 ml-1.5">({leader.role})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Development Team Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>WEBSITE DEVELOPERS</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
              {websiteTeam.map((member, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span className="text-white font-medium">{member}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Drone Team Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>ROBOT (BEC DRONE TEAM)</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-mono text-slate-300">
              {droneTeam.map((member, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span className="text-white font-medium">{member}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Brand Signature */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 BRVO Robotics • Bhubaneswar Engineering College.
          </div>
          <div className="flex items-center gap-3 text-slate-400 flex-wrap">
            <span className="text-amber-400 font-semibold">LEADERSHIP: ER. ALOK MALLICK, AYUSH MALLICK, DR. B.N. BISWAL</span>
            <span>•</span>
            <span className="text-blue-400 font-semibold">ROBOT: BEC DRONE TEAM</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">WEB: JITENDRA, RAHUL, BHAGYABRATA, SHIVA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
