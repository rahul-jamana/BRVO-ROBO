import React, { useState } from 'react';
import { Cpu, Cog, Zap, Compass, Users, Sparkles, Binary, Radio, Shield, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function TechDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const systems = [
    {
      id: 'robotics',
      title: 'ROBOTICS',
      subtitle: 'Mechanical structure & kinematic movement',
      icon: <Cog className="w-5 h-5 text-cyan-400" />,
      desc: 'Robust mechanical structural design comprising dual vertical riser columns, service tray deck, articulated head unit, and balanced payload distribution for stable autonomous operation.',
      highlights: [
        'High-rigidity modular chassis framing',
        'Balanced mass center with service deck utility',
        'Vibration-damped structural column mounts',
        'Kinematic stability during indoor transit'
      ],
      metrics: { title: 'Structural Integrity', val: 'High Strength Frame' }
    },
    {
      id: 'electronics',
      title: 'ELECTRONICS',
      subtitle: 'Sensors, controllers, LEDs & electronic systems',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      desc: 'Comprehensive electrical layout integrating power management, sensory feedback loops, multi-zone LED drivers, and noise-isolated signal buses connecting all hardware components.',
      highlights: [
        'Multi-rail regulated power distribution',
        'Optically isolated control signal routing',
        'Multi-channel LED driver circuitry',
        'Real-time sensory telemetry acquisition'
      ],
      metrics: { title: 'Circuit Isolation', val: 'Low Noise Bus' }
    },
    {
      id: 'embedded',
      title: 'EMBEDDED SYSTEM',
      subtitle: 'Microcontroller logic & hardware integration',
      icon: <Binary className="w-5 h-5 text-blue-400" />,
      desc: 'Microcontroller architecture coordinating low-latency sensor parsing, motor PWM generation, communication protocols, and deterministic state transitions for reliable responsiveness.',
      highlights: [
        'Dedicated real-time microcontroller core',
        'Deterministic hardware interrupt routines',
        'Synchronized motor and sensory buses',
        'Fail-safe watchdog & recovery states'
      ],
      metrics: { title: 'Control Cycle', val: 'Real-Time State Machine' }
    },
    {
      id: 'mobility',
      title: 'MOBILITY',
      subtitle: 'Motorized mobile platform for movement',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      desc: 'Motorized 4-wheel mobile base engineered for high traction, smooth indoor maneuvers, precise directional control, and floor-level red LED obstacle warning illumination.',
      highlights: [
        'High-torque motorized drive integration',
        'Smooth velocity ramping and deceleration',
        'Sturdy floor-level traction wheels',
        'Ground illumination safety indicator'
      ],
      metrics: { title: 'Drive Config', val: '4-Wheel Stable Platform' }
    },
    {
      id: 'hri',
      title: 'HUMAN-ROBOT INTERACTION',
      subtitle: 'Voice, visual & interactive communication',
      icon: <Users className="w-5 h-5 text-purple-400" />,
      desc: 'Multimodal interaction suite combining acoustic greeting synthesis, responsive ocular visor LEDs, camera orientation feedback, and mid-deck touch console for guest engagement.',
      highlights: [
        'Acoustic guest welcoming protocols',
        'Visual status visor lighting cues',
        'Proximity detection and gaze orientation',
        'Multi-touch event greeting interface'
      ],
      metrics: { title: 'Engagement Mode', val: 'Multimodal HRI' }
    },
    {
      id: 'smart-systems',
      title: 'SMART SYSTEMS',
      subtitle: 'Hardware & software intelligent operation',
      icon: <Sparkles className="w-5 h-5 text-rose-400" />,
      desc: 'Unified software integration harmonizing motion routines, sensory feedback, interactive displays, and automated hospitality behaviors into an intuitive student-developed robotics platform.',
      highlights: [
        'Modular software architecture',
        'Dynamic demo and greeting presets',
        'Integrated diagnostic telemetry monitoring',
        'Extensible for future AI & vision upgrades'
      ],
      metrics: { title: 'Integration', val: 'Unified Robotics Hub' }
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-slate-950/80 border-b border-slate-900 overflow-hidden">
      {/* Background Cyber Styling */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Radio className="w-3.5 h-3.5" />
            <span>TECHNICAL SPECIFICATION DASHBOARD</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white">
            ENGINEERED BY <span className="text-gradient-cyan">BEC STUDENTS</span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed font-sans">
            A comprehensive overview of the core engineering subsystems powering BRVO, designed and integrated by the BEC Drone Team.
          </p>
        </div>

        {/* Dashboard Systems Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, idx) => (
            <div
              key={sys.id}
              onMouseEnter={() => soundFx.playCyberHover()}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/40 bg-slate-900/60 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {sys.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    SYS-0{idx + 1}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {sys.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-3">
                  {sys.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sys.desc}
                </p>

                {/* Key Bullet Points */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                  {sys.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Telemetry Card */}
              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{sys.metrics.title}:</span>
                <span className="text-cyan-300 font-semibold">{sys.metrics.val}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
