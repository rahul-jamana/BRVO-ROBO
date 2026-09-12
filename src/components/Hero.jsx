import React from 'react';
import { Robot3D } from './Robot3D';
import { ArrowUpRight, Cpu, Zap, Activity, ShieldCheck, Compass, Sparkles, Volume2, Code, Users, Bot, Crown } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Hero({ onExplore360, onOpenControlCenter }) {
  const scrollToSection = (id) => {
    soundFx.playCyberClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const websiteDevTeam = [
    { name: "Jitendra Nial", role: "Website Developer", initials: "JN" },
    { name: "Rahul Jamana", role: "Website Developer", initials: "RJ" },
    { name: "Bhagyabrata Gantayat", role: "Website Developer", initials: "BG" },
    { name: "Shiva Sundar Mohanty", role: "Website Developer", initials: "SM" }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Cyber Grid & Lighting Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-8">
        
        {/* ========================================================
            PROMINENT WEBSITE DEVELOPMENT TEAM HIGHLIGHT (TOP OF 1ST PAGE)
           ======================================================== */}
        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-cyan-500/40 bg-slate-900/85 shadow-glow-cyan/20 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Title & Distinction Badge */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/90 border border-cyan-500/50 text-cyan-400">
                <Code className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-widest text-white">
                    WEBSITE DEVELOPMENT TEAM
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    WEB CREATORS
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">
                  Interactive 3D Web Experience developed for BRVO Robot
                </p>
              </div>
            </div>

            {/* 4 Website Developer Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {websiteDevTeam.map((member, i) => (
                <div
                  key={i}
                  onClick={() => scrollToSection('team')}
                  onMouseEnter={() => soundFx.playCyberHover()}
                  className="cursor-pointer px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900/90 transition-all flex items-center gap-2.5 group shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 group-hover:border-cyan-400 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    {member.initials}
                  </div>
                  <div className="overflow-hidden text-left">
                    <div className="text-xs font-mono font-bold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                      {member.name}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400/90">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================
            HERO MAIN GRID
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Title & Product Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md w-fit shadow-glow-cyan/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-cyan-300 font-semibold uppercase">
                ADVANCED HUMANOID SERVICE PLATFORM
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-lg">
                  BRVO
                </h1>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-400 tracking-wider">
                  ROBOTICS
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-mono text-slate-300 tracking-wide font-medium flex items-center gap-2">
                <span className="text-cyan-400 font-bold">BEC ROBOT</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 text-base sm:text-lg">Autonomous & Interactive</span>
              </div>
            </div>

            {/* Core Tagline */}
            <p className="text-xl sm:text-2xl font-display font-semibold text-slate-100 italic border-l-4 border-cyan-400 pl-4 py-1">
              “Built to Welcome. Designed to Impress.”
            </p>

            {/* Subtext & Dual Credits */}
            <div className="space-y-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <Crown className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-400 font-semibold">Supported & Guided By:</strong>{' '}
                  <span className="text-slate-200">Er. Alok Mallick (Chairman), Ayush Mallick (Executive Director), Dr. B. N. Biswal (Director)</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <Bot className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-400 font-semibold">Robot Hardware (BEC Drone Team):</strong>{' '}
                  <span>Nihar Ranjan Sahoo, Kritiranjan Rout, Bidyadhar, Akash Nayak</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <Code className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cyan-400 font-semibold">Website Development Team:</strong>{' '}
                  <span>Jitendra Nial, Rahul Jamana, Bhagyabrata Gantayat, Shiva Sundar Mohanty</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('explore360')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-sm hover:brightness-110 shadow-glow-cyan flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4" />
                <span>EXPLORE 360° MODEL</span>
              </button>

              <button
                onClick={() => scrollToSection('control-center')}
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 font-mono font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>SIMULATE CONTROLS</span>
              </button>
            </div>

            {/* Realtime Telemetry Grid Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span>ORIENTATION</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">360° ROTARY</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  <span>PLATFORM</span>
                </div>
                <div className="text-sm font-mono font-bold text-emerald-400 mt-1">BEC SERVICE</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>DECK LOAD</span>
                </div>
                <div className="text-sm font-mono font-bold text-white mt-1">MULTI-TRAY</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Robot Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full relative">
              {/* Outer Neon Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent blur-lg opacity-70 pointer-events-none" />
              
              <Robot3D
                height="540px"
                autoRotate={true}
                ledColor="#00F0FF"
                baseLedColor="#EF4444"
                enableControls={true}
              />
            </div>

            {/* Quick Status Bar below 3D */}
            <div className="mt-4 w-full flex items-center justify-between text-xs font-mono text-slate-400 px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>ROBOT: BEC DRONE TEAM</span>
              </div>
              <div className="text-cyan-400 font-semibold">
                WEB: JITENDRA, RAHUL, BHAGYABRATA, SHIVA
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
