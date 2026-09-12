import React, { useState } from 'react';
import { Bot, Cpu, Volume2, Lightbulb, Disc, Wrench, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function AboutSection() {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "Intelligent Interaction",
      tag: "HUMAN-MACHINE INTERFACE",
      desc: "Engineered for intuitive human-centric engagement, visitor greeting, and contextual feedback during college events and exhibitions.",
      glow: "border-cyan-500/40"
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Robotics & Automation",
      tag: "KINEMATICS & CONTROL",
      desc: "Robust mechanical architecture featuring structural column supports, service tray payload capacity, and integrated automation logic.",
      glow: "border-blue-500/40"
    },
    {
      icon: <Volume2 className="w-6 h-6 text-emerald-400" />,
      title: "Voice Interaction",
      tag: "ACOUSTIC FEEDBACK",
      desc: "Integrated audio guidance and synthetic voice protocols tailored for seamless communication with guests, faculties, and students.",
      glow: "border-emerald-500/40"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Smart LED System",
      tag: "VISUAL EXPRESSION",
      desc: "Dynamic multi-channel illumination across the ocular visor, torso edge guide strips, and front underglow ground matrix.",
      glow: "border-amber-500/40"
    },
    {
      icon: <Disc className="w-6 h-6 text-purple-400" />,
      title: "Mobile Robotic Platform",
      tag: "OMNI-STABLE MOBILITY",
      desc: "Four-wheel drive platform with low center of gravity ensuring smooth navigation and stability while carrying payloads on the deck.",
      glow: "border-purple-500/40"
    },
    {
      icon: <Wrench className="w-6 h-6 text-rose-400" />,
      title: "BEC Student Innovation",
      tag: "HARDWARE & SOFTWARE",
      desc: "Designed, fabricated, programmed, and calibrated in-house by the BEC Drone Team using modern engineering principles.",
      glow: "border-rose-500/40"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950/60 border-t border-b border-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLATFORM OVERVIEW</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white">
            MEET <span className="text-gradient-cyan">BRVO</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            “BRVO is a BEC-developed robotic platform created by the <strong className="text-cyan-400 font-semibold">BEC Drone Team</strong> to demonstrate robotics, automation, electronics, embedded systems and intelligent human-machine interaction.”
          </p>
        </div>

        {/* Real Reference Robot Callout & Feature Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Authentic Robot Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/10 to-transparent blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 bg-slate-950/80 p-5 space-y-4">
              {/* Photo Box */}
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                <img
                  src="/images/brvo-real.jpg"
                  alt="BRVO Real Robot Photograph"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                  AUTHENTIC BEC BUILD
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                  FIG 1.0 PHYSICAL PROTOTYPE
                </div>
              </div>

              {/* Caption Specs */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">DESIGNATION:</span>
                  <span className="text-cyan-400 font-bold">BRVO-GEN1</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">DEVELOPER LAB:</span>
                  <span className="text-white font-medium">BEC DRONE TEAM</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">ARCHITECTURE:</span>
                  <span className="text-emerald-400 font-medium">HUMANOID-SERVICE DUAL TIER</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Interactive Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  soundFx.playCyberHover();
                  setActiveCard(index);
                }}
                className={`p-5 rounded-xl glass-panel glass-panel-hover border transition-all duration-300 cursor-pointer ${
                  activeCard === index 
                    ? 'border-cyan-400/80 bg-slate-900/90 shadow-glow-cyan/25 -translate-y-1' 
                    : 'border-slate-800/80 bg-slate-950/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
