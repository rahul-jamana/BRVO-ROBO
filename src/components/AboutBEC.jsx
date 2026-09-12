import React from 'react';
import { Building, ShieldCheck, Sparkles, Cpu, Award, Code, Bot } from 'lucide-react';

export function AboutBEC() {
  return (
    <section className="relative py-20 bg-slate-950/90 border-b border-slate-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Building className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL INNOVATION</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
          BUILT AT <span className="text-gradient-cyan">BEC</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-200 font-sans leading-relaxed max-w-3xl mx-auto font-medium">
          “BRVO is a flagship robotics innovation project manufactured and developed by the <strong className="text-blue-400 font-bold">BEC Drone Team</strong>, with its digital 3D interactive web portal engineered by the <strong className="text-cyan-400 font-bold">Website Development Team</strong> at Bhubaneswar Engineering College.”
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl glass-panel border border-slate-800 text-left">
            <div className="text-xs font-mono text-blue-400 font-bold flex items-center gap-1.5">
              <Bot className="w-4 h-4" />
              <span>ROBOT ENGINEERING</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Physical chassis, kinematics, dual ocular vision, and embedded circuits by BEC Drone Team (Nihar, Kritiranjan, Bidyadhar, Akash).
            </p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800 text-left">
            <div className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>WEB & 3D INTERFACE</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Interactive 3D Three.js model, 360° inspector, sound synthesis, and telemetry dashboard by Jitendra, Rahul, Bhagyabrata, and Shiva.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800 text-left">
            <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>BEC STUDENT INNOVATION</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Bringing together robotics, automation, and modern web technology representing Bhubaneswar Engineering College.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
