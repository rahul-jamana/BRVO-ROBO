import React from 'react';
import { Users, Code, Bot, Sparkles, Award, Shield, Cpu, Crown, Star } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function TeamSection() {
  const leadership = [
    {
      name: "Er. Alok Mallick",
      role: "Chairman",
      initials: "AM",
      tag: "HON'BLE CHAIRMAN"
    },
    {
      name: "Ayush Mallick",
      role: "Executive Director",
      initials: "AY",
      tag: "EXECUTIVE DIRECTOR"
    },
    {
      name: "Dr. B. N. Biswal",
      role: "Director",
      initials: "BB",
      tag: "DIRECTOR"
    }
  ];

  const websiteTeamMembers = [
    {
      name: "Jitendra Nial",
      role: "Website Developer",
      initials: "JN",
      tag: "FRONTEND & UI"
    },
    {
      name: "Rahul Jamana",
      role: "Website Developer",
      initials: "RJ",
      tag: "FRONTEND & 3D"
    },
    {
      name: "Bhagyabrata Gantayat",
      role: "Website Developer",
      initials: "BG",
      tag: "FRONTEND & UI"
    },
    {
      name: "Shiva Sundar Mohanty",
      role: "Website Developer",
      initials: "SM",
      tag: "FRONTEND & INTERACTIVE"
    }
  ];

  const droneTeamMembers = [
    {
      name: "Nihar Ranjan Sahoo",
      role: "Robot Developer",
      initials: "NS",
      tag: "HARDWARE & EMBEDDED"
    },
    {
      name: "Kritiranjan Rout",
      role: "Robot Developer",
      initials: "KR",
      tag: "MECHANICAL & CHASSIS"
    },
    {
      name: "Bidyadhar",
      role: "Robot Developer",
      initials: "B",
      tag: "ELECTRONICS & POWER"
    },
    {
      name: "Akash Nayak",
      role: "Robot Developer",
      initials: "AN",
      tag: "SYSTEMS & DRONE TEAM"
    }
  ];

  return (
    <section id="team" className="relative py-24 bg-slate-950/90 border-b border-slate-900 overflow-hidden">
      {/* Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ========================================================
            1. SUPPORTED & GUIDED BY (INSTITUTIONAL LEADERSHIP)
           ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-xs font-mono text-amber-400">
              <Crown className="w-4 h-4" />
              <span>INSTITUTIONAL LEADERSHIP & PATRONS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              SUPPORTED & <span className="text-amber-400">GUIDED BY</span>
            </h2>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Under the visionary leadership and guidance of Bhubaneswar Engineering College:
            </p>
          </div>

          {/* 3 Leadership Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playCyberHover()}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-amber-500/30 hover:border-amber-400 bg-slate-900/80 flex flex-col items-center text-center transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-amber-500/40 group-hover:border-amber-400 flex items-center justify-center font-display font-black text-2xl text-amber-400 shadow-inner transition-all">
                    {leader.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 border border-amber-500 text-amber-400 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                  {leader.name}
                </h3>

                <p className="text-xs font-mono text-amber-400 font-semibold mt-1 uppercase tracking-wider">
                  {leader.role}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>BHUBANESWAR ENGINEERING COLLEGE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            2. WEBSITE DEVELOPMENT TEAM (PRIMARY SPOTLIGHT)
           ======================================================== */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-400">
              <Code className="w-4 h-4" />
              <span>DIGITAL & 3D PORTAL CREATORS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              WEBSITE <span className="text-gradient-cyan">DEVELOPMENT TEAM</span>
            </h2>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Designed, developed, and engineered the interactive 3D WebGL portal, 360° inspector, audio synthesis engine, and simulation suite for BRVO:
            </p>
          </div>

          {/* 4 Web Developers */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteTeamMembers.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playCyberHover()}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-cyan-500/20 hover:border-cyan-400 bg-slate-900/60 flex flex-col items-center text-center transition-all duration-300 group shadow-lg"
              >
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400 flex items-center justify-center font-display font-black text-2xl text-cyan-400 shadow-inner group-hover:shadow-glow-cyan/50 transition-all">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 border border-cyan-500 text-cyan-400 shadow-md">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs font-mono text-cyan-400 font-semibold mt-1 uppercase tracking-wider">
                  {member.role}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>WEB & 3D INTERFACE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. ROBOT DEVELOPMENT TEAM (BEC DRONE TEAM)
           ======================================================== */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/40 text-xs font-mono text-blue-400">
              <Bot className="w-4 h-4" />
              <span>ROBOT MANUFACTURING & HARDWARE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              ROBOT DEVELOPMENT — <span className="text-blue-400">BEC DRONE TEAM</span>
            </h2>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              The physical BRVO humanoid robot, mechanical structural columns, 4-wheel mobile chassis, service tray, and embedded circuits were manufactured and developed by:
            </p>
          </div>

          {/* 4 Drone Team Members */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {droneTeamMembers.map((member, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playCyberHover()}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-blue-500/20 hover:border-blue-400 bg-slate-900/60 flex flex-col items-center text-center transition-all duration-300 group shadow-lg"
              >
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-400 flex items-center justify-center font-display font-black text-2xl text-blue-400 shadow-inner group-hover:shadow-glow-blue/50 transition-all">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-slate-900 border border-blue-500 text-blue-400 shadow-md">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs font-mono text-blue-400 font-semibold mt-1 uppercase tracking-wider">
                  {member.role}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400">
                  <Bot className="w-3.5 h-3.5 text-blue-400" />
                  <span>BEC DRONE TEAM</span>
                </div>
              </div>
            ))}
          </div>

          {/* BEC Drone Team Honorary Banner */}
          <div className="mt-12 p-6 rounded-2xl glass-panel border border-blue-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-center space-y-2">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-bold">
              OFFICIAL ROBOTICS WING
            </span>
            <h4 className="font-display font-black text-2xl text-white">
              BEC DRONE TEAM
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-sans">
              Specializing in student robotics innovation, autonomous drone flight systems, and embedded hardware fabrication at Bhubaneswar Engineering College.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
