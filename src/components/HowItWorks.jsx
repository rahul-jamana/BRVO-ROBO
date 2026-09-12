import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Cpu, Network, Zap, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'input',
      name: 'INPUT',
      sub: 'User & Environment Triggers',
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      desc: 'BRVO continuously scans surrounding surroundings for human proximity, touch input on the mid-deck tray, and voice interactions.',
      details: [
        'Guest approach detection via front optical sensor',
        'Touch screen commands from the tray interface',
        'Physical event triggers & orientation requests'
      ],
      state: 'OPTICAL & PROXIMITY SIGNAL CAPTURE'
    },
    {
      id: 'sensing',
      name: 'SENSING',
      sub: 'Signal Conversion & Telemetry',
      icon: <Network className="w-5 h-5 text-blue-400" />,
      desc: 'Raw inputs from dual ocular lenses, neck optical module, and electronic switches are filtered and converted to digital packets.',
      details: [
        'Multi-channel analog to digital conversion',
        'High-speed noise reduction & packet validation',
        'Environmental telemetry stream consolidation'
      ],
      state: 'LOW-LATENCY BUS TRANSMISSION'
    },
    {
      id: 'processing',
      name: 'PROCESSING',
      sub: 'Embedded Logic & State Engine',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      desc: 'The embedded microcontroller processes incoming sensory packets, calculates orientation coordinates, and determines current robot mode.',
      details: [
        'Real-time state machine execution',
        'Priority task scheduling & power balancing',
        'Safety threshold & collision verification'
      ],
      state: 'DETERMINISTIC COMPUTE PIPELINE'
    },
    {
      id: 'decision',
      name: 'DECISION',
      sub: 'Behavior & Command Mapping',
      icon: <Activity className="w-5 h-5 text-purple-400" />,
      desc: 'BRVO resolves the optimal interaction path: executing a welcome speech greeting, triggering LED feedback patterns, or navigating smoothly.',
      details: [
        'Behavior state selection (Greet, Demo, Idle, Escort)',
        'LED pattern synthesis matching audio playback',
        'Drive speed & steering curve calculation'
      ],
      state: 'ACTION VECTOR FORMULATION'
    },
    {
      id: 'action',
      name: 'ACTION',
      sub: 'Physical Actuation & Interaction',
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      desc: 'Motors drive the 4-wheel mobile base, audio speakers deliver crisp hospitality messages, and LED arrays pulse in synchronized harmony.',
      details: [
        'Smooth 4-wheel motor acceleration & steering',
        'Clear acoustic voice greeting delivery',
        'Multi-zone LED visor & underglow light show'
      ],
      state: 'REAL-TIME PHYSICAL EXECUTION'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL PIPELINE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            HOW <span className="text-gradient-cyan">BRVO WORKS</span>
          </h2>

          <p className="text-base text-slate-400 font-sans leading-relaxed">
            From sensory perception to physical actuation: the synchronized 5-stage robotics control architecture developed by BEC students.
          </p>
        </div>

        {/* 5-Stage Interactive Pipeline Stepper */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => {
                  soundFx.playCyberClick();
                  setActiveStep(idx);
                }}
                className={`cursor-pointer p-5 rounded-2xl glass-panel border transition-all duration-300 relative flex flex-col justify-between ${
                  isCurrent
                    ? 'border-cyan-400 bg-slate-900/90 shadow-glow-cyan/30 -translate-y-1.5'
                    : 'border-slate-800/80 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {/* Step Index & Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                      STEP 0{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">
                    {step.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {step.sub}
                  </p>
                </div>

                {/* Arrow Connector on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs shadow-md">
                      →
                    </div>
                  </div>
                )}

                {/* Progress bar on card bottom */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className={isCurrent ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                    {isCurrent ? 'ACTIVE STAGE' : 'VIEW DETAILS'}
                  </span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Stage Inspector Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/85 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                STAGE 0{activeStep + 1} DEEP DIVE
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                {steps[activeStep].name} ARCHITECTURE
              </h3>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>{steps[activeStep].state}</span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {steps[activeStep].details.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
