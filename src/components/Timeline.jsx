import React, { useState } from 'react';
import { Lightbulb, PenTool, Layers, Hammer, ShieldCheck, Bot, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Timeline() {
  const [activeStage, setActiveStage] = useState(5); // Default to BRVO completed

  const milestones = [
    {
      id: 'idea',
      step: '01',
      title: 'IDEA',
      subtitle: 'Conceptualization & Mission Definition',
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      desc: 'Identifying the vision for an authentic humanoid-service robotics platform to represent BEC at college events, research symposiums, and exhibitions.',
      details: 'Defined physical dimensions, service deck payload targets, dual ocular sensor layout, and multi-tier structure.'
    },
    {
      id: 'design',
      step: '02',
      title: 'DESIGN',
      subtitle: 'CAD Layout & Component Architecture',
      icon: <PenTool className="w-5 h-5 text-cyan-400" />,
      desc: 'Formulating geometric proportions for the base chassis, dual vertical column risers, white front panel torso, and camera neck mount.',
      details: 'Coordinated weight distribution, motor positioning, internal wire routing, and aesthetic LED guide placements.'
    },
    {
      id: 'prototype',
      step: '03',
      title: 'PROTOTYPE',
      subtitle: 'Subsystem Breadboarding & Kinematics',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      desc: 'Validating the 4-wheel drive base, sensor communications, ocular display illumination, and microcontroller firmware.',
      details: 'Engineered sensor buses, signal isolation, initial power delivery rails, and basic greeting routines.'
    },
    {
      id: 'build',
      step: '04',
      title: 'BUILD',
      subtitle: 'Physical Fabrication & Hardware Assembly',
      icon: <Hammer className="w-5 h-5 text-rose-400" />,
      desc: 'Fabricating the chassis, mounting structural risers, fitting the service tray, assembling the head unit, and integrating the red LED underglow.',
      details: 'Hand-crafted by the BEC Drone Team with robust materials, clean paneling, and custom mounting brackets.'
    },
    {
      id: 'test',
      step: '05',
      title: 'TEST',
      subtitle: 'Calibration & Stability Optimization',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: 'Fine-tuning motorized movement, floor stability under payload, acoustic projection clarity, and multi-zone LED coordination.',
      details: 'Stress testing mobile transit, continuous 360 rotation verification, and live demonstration trials.'
    },
    {
      id: 'brvo',
      step: '06',
      title: 'BRVO',
      subtitle: 'Operational Humanoid Service Robot',
      icon: <Bot className="w-5 h-5 text-cyan-300" />,
      desc: 'The official debut of BRVO (BEC Robot) — manufactured and developed by BEC Drone Team, ready for campus reception and innovation showcases.',
      details: 'Fully realized student innovation platform embodying modern robotics and intelligent interaction.'
    }
  ];

  return (
    <section id="timeline" className="relative py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPMENT ROADMAP</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            PROJECT <span className="text-gradient-cyan">TIMELINE</span>
          </h2>

          <p className="text-base text-slate-400 font-sans leading-relaxed">
            The chronological journey of how the BEC Drone Team conceptualized, engineered, assembled, and deployed BRVO.
          </p>
        </div>

        {/* Timeline Flow Horizontal / Vertical Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {milestones.map((m, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={m.id}
                onClick={() => {
                  soundFx.playCyberClick();
                  setActiveStage(idx);
                }}
                className={`cursor-pointer p-4 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-slate-900/90 shadow-glow-cyan/25 -translate-y-1.5'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      PHASE {m.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {m.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">
                    {m.title}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 mt-1 line-clamp-2">
                    {m.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'SELECTED' : 'CLICK TO VIEW'}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/85">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                PHASE 0{activeStage + 1} OVERVIEW
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                {milestones[activeStage].title} — {milestones[activeStage].subtitle}
              </h3>
              <div className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PHASE COMPLETED BY BEC DRONE TEAM</span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {milestones[activeStage].desc}
              </p>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-cyan-300 font-mono">
                <strong>Key Milestone Focus:</strong> {milestones[activeStage].details}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
