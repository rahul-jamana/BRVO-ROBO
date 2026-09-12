import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Trophy, 
  Sparkles, 
  Users, 
  BookOpen, 
  Lightbulb, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Applications() {
  const [selectedApp, setSelectedApp] = useState(null);

  const applications = [
    {
      id: 'college-events',
      title: 'College Events',
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      tag: 'INSTITUTIONAL',
      desc: 'Welcomes dignitaries, guests, and attendees during annual college convocations, orientation days, and cultural symposiums.',
      features: ['Automated guest greeting', 'Event schedule guide', 'VIP escort and direction assist']
    },
    {
      id: 'student-demos',
      title: 'Student Demonstrations',
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      tag: 'ACADEMIC',
      desc: 'Hands-on practical learning platform for engineering students exploring embedded firmware, sensor interfacing, and motor kinematics.',
      features: ['Open architecture for student experiments', 'Sensor telemetry inspection', 'Real-world robotics testing']
    },
    {
      id: 'reception-welcome',
      title: 'Reception & Welcome',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
      tag: 'HOSPITALITY',
      desc: 'Greets campus visitors at department entrances, serving informational handouts or badges on its spacious service tray deck.',
      features: ['Stationary & mobile greeting', 'Service tray payload carriage', 'Audible hospitality dialogues']
    },
    {
      id: 'robotics-exhibitions',
      title: 'Robotics Exhibitions',
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      tag: 'SHOWCASE',
      desc: 'Stands as a centerpiece demonstration at state and national level robotics symposiums and inter-college tech fests.',
      features: ['Synchronized LED light show', 'Live 360 rotation demo', 'Interactive audience engagement']
    },
    {
      id: 'innovation-showcases',
      title: 'Innovation Showcases',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      tag: 'INNOVATION',
      desc: 'Demonstrates BEC’s multidisciplinary R&D capabilities to industry partners, government bodies, and prospective students.',
      features: ['Hardware-software co-design proof', 'BEC Drone Team flagship project', 'Student innovation highlight']
    },
    {
      id: 'hri-research',
      title: 'Human-Robot Interaction',
      icon: <Users className="w-6 h-6 text-pink-400" />,
      tag: 'HRI RESEARCH',
      desc: 'Tests ergonomic social robot presence, eye-contact visual cues, acoustic clarity, and comfortable human proximity distances.',
      features: ['Social robotics ergonomics', 'Visual visor expressiveness', 'Gaze tracking & approach cues']
    },
    {
      id: 'educational-demos',
      title: 'Educational Demonstrations',
      icon: <BookOpen className="w-6 h-6 text-teal-400" />,
      tag: 'EDUCATION',
      desc: 'Inspires school students and STEM enthusiasts during campus tours and science outreach workshops with live robotics demonstrations.',
      features: ['STEM motivation & outreach', 'Live subsystem breakdown', 'Interactive Q&A companion']
    },
    {
      id: 'automation-research',
      title: 'Future Automation Research',
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
      tag: 'FUTURE R&D',
      desc: 'Modular testbed for future upgrades including autonomous SLAM indoor navigation, AI conversational models, and robotic arms.',
      features: ['SLAM LiDAR ready chassis', 'Extensible compute mounts', 'Kinematic arm joint provisions']
    }
  ];

  return (
    <section id="applications" className="relative py-24 bg-slate-950/70 border-b border-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERSATILE DEPLOYMENT</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            WHAT CAN <span className="text-gradient-cyan">BRVO DO?</span>
          </h2>

          <p className="text-base text-slate-400 font-sans leading-relaxed">
            From campus hospitality and institutional demonstrations to advanced robotics research, explore the diverse capabilities of the BRVO platform.
          </p>
        </div>

        {/* Applications 8-Card Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              onMouseEnter={() => soundFx.playCyberHover()}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/50 bg-slate-900/60 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all">
                    {app.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {app.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {app.desc}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                  {app.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DEPLOYABLE</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  READY <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
