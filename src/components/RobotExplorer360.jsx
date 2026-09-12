import React, { useState } from 'react';
import { Robot3D } from './Robot3D';
import { 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Info, 
  Eye, 
  Cpu, 
  Volume2, 
  Lightbulb, 
  Layers, 
  Compass, 
  Crosshair, 
  Activity,
  Check,
  ChevronRight
} from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function RobotExplorer360() {
  const [selectedHotspot, setSelectedHotspot] = useState('head');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const hotspotData = {
    head: {
      title: "HEAD & DUAL OCULAR VISION",
      subtitle: "Primary Visual Sensor & Acoustic Enclosure",
      category: "SENSORY & DISPLAY",
      points: [
        "Horizontal wide-aperture robotic head enclosure in clean matte white.",
        "Dual circular optical lenses providing wide-angle field of view.",
        "Integrated central blue accent LED visor mouth strip indicating system speech/listening state."
      ],
      systemStatus: "OPTIMAL (60 FPS STEREO VISION)",
      color: "#00F0FF"
    },
    sensors: {
      title: "VISION / NECK SENSOR MODULE",
      subtitle: "Articulated Neck & Center Optical Module",
      category: "PERCEPTION SYSTEM",
      points: [
        "Stepped metallic neck bracket with precision tilt alignment.",
        "Central black camera/optical sensor unit with high-contrast focal lens.",
        "Detects obstacles, guest proximity, and directional motion triggers."
      ],
      systemStatus: "ACTIVE PROXIMITY SCAN",
      color: "#38BDF8"
    },
    speaker: {
      title: "AUDIO & VOICE INTERFACE",
      subtitle: "Acoustic Synthesizer & Sound Projection",
      category: "COMMUNICATION",
      points: [
        "High-fidelity speaker integration for greeting attendees and delivering announcements.",
        "Synchronized audio cues matching the visual LED animations.",
        "Pre-programmed for welcome messages, event guidance, and orientation dialogues."
      ],
      systemStatus: "ONLINE (92dB AUDIBLE RANGE)",
      color: "#10B981"
    },
    control: {
      title: "CENTRAL CONTROL SYSTEM",
      subtitle: "Embedded Microcontroller & Logic Hub",
      category: "COMPUTE & LOGIC",
      points: [
        "High-reliability embedded microcontroller architecture managing motor signals and telemetry.",
        "Integrated sensor bus bridging optical inputs with drive motors.",
        "Fail-safe power management and real-time state machine."
      ],
      systemStatus: "ARM PROCESSOR ONLINE",
      color: "#F59E0B"
    },
    body: {
      title: "ROBOT BODY & CHASSIS FRAME",
      subtitle: "Structural Core & Internal Electronics Bay",
      category: "MECHANICAL ENCLOSURE",
      points: [
        "Lightweight high-durability white polymer paneling with dark beveled framing.",
        "Shields internal power distribution boards, wire looms, and controllers.",
        "Includes lateral arm mounting joints for future kinematic appendages."
      ],
      systemStatus: "STRUCTURAL RIGIDITY: 100%",
      color: "#EC4899"
    },
    tray: {
      title: "SERVICE & DELIVERY TRAY",
      subtitle: "Mid-Deck Payload & Touch Interface",
      category: "SERVICE UTILITY",
      points: [
        "Spacious white service deck with reinforced raised safety edges.",
        "Designed to carry beverages, handouts, badges, or interactive touch tablets.",
        "Integrated device holder for direct guest touch interactions and survey kiosks."
      ],
      systemStatus: "PAYLOAD CAPABILITY: ACTIVE",
      color: "#8B5CF6"
    },
    led: {
      title: "SMART LED SYSTEM",
      subtitle: "Multi-Zone Expressive Lighting Array",
      category: "ILLUMINATION",
      points: [
        "Dual vertical LED guide strips flanking the frontal torso panel.",
        "Real-time visual feedback reflecting operational modes (Idle, Greet, Alert, Moving).",
        "High-efficiency LEDs engineered for low thermal dissipation."
      ],
      systemStatus: "MULTI-ZONE ACTIVE",
      color: "#00F0FF"
    },
    base: {
      title: "MOBILE BASE & DRIVE WHEELS",
      subtitle: "4-Wheel Low-Center Platform & Red Underglow",
      category: "MOBILITY PLATFORM",
      points: [
        "Heavy-duty rectangular mobile platform on 4 robust rubberized wheels.",
        "Dual vertical column risers distributing torso mass evenly over the wheel track.",
        "Front horizontal red LED matrix underglow for clear floor path illumination and safety."
      ],
      systemStatus: "4WD SMOOTH TRANSIT READY",
      color: "#EF4444"
    }
  };

  const handleSelectHotspot = (id) => {
    soundFx.playCyberClick();
    setSelectedHotspot(id);
  };

  const activeInfo = hotspotData[selectedHotspot] || hotspotData.head;

  return (
    <section id="explore360" className={`relative py-24 bg-slate-950 ${isFullScreen ? 'fixed inset-0 z-50 p-4 sm:p-8 bg-slate-950/98' : ''}`}>
      {/* Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-between">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-2">
              <Crosshair className="w-3.5 h-3.5" />
              <span>INTERACTIVE 3D INSPECTOR</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              EXPLORE BRVO — <span className="text-cyan-400">360°</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Rotate, zoom, and inspect each subsystem of the BRVO robot. Click any hotspot label to view live component specifications.
            </p>
          </div>

          {/* Quick Hotspot Filter Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playCyberClick();
                setIsFullScreen(!isFullScreen);
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-mono transition-all"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4 text-cyan-400" /> : <Maximize2 className="w-4 h-4 text-cyan-400" />}
              <span>{isFullScreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN'}</span>
            </button>
          </div>
        </div>

        {/* Main 3D Inspector + Hotspots Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          
          {/* Left: 3D Robot Canvas */}
          <div className="lg:col-span-7 relative">
            <Robot3D
              height={isFullScreen ? '75vh' : '580px'}
              autoRotate={autoRotate}
              showHotspots={true}
              activeHotspot={selectedHotspot}
              onSelectHotspot={handleSelectHotspot}
              ledColor="#00F0FF"
              baseLedColor="#EF4444"
            />
          </div>

          {/* Right: Subsystem Hotspot Diagnostics & Selectors */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* Hotspot Switcher Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(hotspotData).map((key) => {
                const item = hotspotData[key];
                const isSelected = selectedHotspot === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectHotspot(key)}
                    className={`px-2.5 py-2 rounded-lg text-[11px] font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-glow-cyan/30'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <span>{key.replace('-', ' ')}</span>
                    {isSelected && <Check className="w-3 h-3 text-cyan-400" />}
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Detail Card */}
            <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/80 shadow-2xl relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none" 
                style={{ backgroundColor: activeInfo.color }}
              />

              {/* Subsystem Tag & Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                  {activeInfo.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {activeInfo.systemStatus}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-4 space-y-1">
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  {activeInfo.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {activeInfo.subtitle}
                </p>
              </div>

              {/* Key Bullet Points */}
              <div className="mt-5 space-y-3">
                {activeInfo.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>INSPECTOR STATUS: ACTIVE</span>
                <span className="text-cyan-400 font-semibold">BEC INNOVATION LAB</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
