import React, { useState, useEffect } from 'react';
import { Robot3D } from './Robot3D';
import { 
  Terminal, 
  RotateCw, 
  Lightbulb, 
  Play, 
  Volume2, 
  Activity, 
  Battery, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Sliders,
  CheckCircle2,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function ControlCenter() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [ledColorIndex, setLedColorIndex] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [logs, setLogs] = useState([
    "[00:00:01] SYSTEM INITIALIZED: BEC_ROBOT_CORE_V1.0",
    "[00:00:02] CHASSIS_CALIBRATION: 4-WHEEL DRIVE OK",
    "[00:00:03] PERCEPTION_BUS: DUAL OCULAR LENSES READY",
    "[00:00:04] TELEMETRY_STREAM: ONLINE & STABLE"
  ]);

  const ledColorPresets = [
    { name: 'CYAN CYBER (DEFAULT)', val: '#00F0FF', base: '#EF4444' },
    { name: 'RUBY RED PROTOCOL', val: '#EF4444', base: '#EF4444' },
    { name: 'EMERALD SERVICE', val: '#10B981', base: '#10B981' },
    { name: 'AMBER CAUTION', val: '#F59E0B', base: '#F59E0B' },
    { name: 'HYPER WHITE', val: '#FFFFFF', base: '#EF4444' }
  ];

  const currentPreset = ledColorPresets[ledColorIndex];

  const addLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${time}] ${msg}`, ...prev.slice(0, 5)]);
  };

  const toggleAutoRotate = () => {
    soundFx.playCyberClick();
    setAutoRotate(!autoRotate);
    addLog(`COMMAND_EXEC: ROTATE_STATE = ${!autoRotate ? 'ENABLED' : 'PAUSED'}`);
  };

  const cycleLights = () => {
    soundFx.playCyberClick();
    const nextIdx = (ledColorIndex + 1) % ledColorPresets.length;
    setLedColorIndex(nextIdx);
    addLog(`LIGHTS_SWITCH: MODE_${ledColorPresets[nextIdx].name}`);
  };

  const handleTriggerGreeting = () => {
    soundFx.playCyberClick();
    soundFx.playRobotVoiceGreeting();
    addLog("AUDIO_SYNTH: 'Welcome to BRVO Robotics - BEC Drone Team'");
  };

  const handleRunDemoMode = () => {
    if (isDemoRunning) return;
    soundFx.playCyberClick();
    setIsDemoRunning(true);
    addLog("DEMO_SEQUENCE: INITIATING WELCOME PROTOCOL...");
    
    // Play voice greeting & sound
    soundFx.playRobotVoiceGreeting();

    // Step 1: Lights pulse
    setTimeout(() => {
      setLedColorIndex(2); // Emerald
      addLog("DEMO_SEQUENCE: GUEST_RECEPTION_LIGHTS = EMERALD");
    }, 1200);

    // Step 2: Telemetry ping
    setTimeout(() => {
      soundFx.playTelemetryPing();
      setLedColorIndex(0); // Cyan
      addLog("DEMO_SEQUENCE: 360 ROTATIONAL SWEEP COMPLETED");
      setIsDemoRunning(false);
    }, 4500);
  };

  return (
    <section id="control-center" className="relative py-24 bg-slate-950/90 border-b border-slate-900 overflow-hidden">
      {/* Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIMULATION LAB</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            BRVO <span className="text-gradient-cyan">CONTROL CENTER</span>
          </h2>

          <p className="text-base text-slate-400 font-sans leading-relaxed">
            Test and interact with BRVO’s simulated robotic subsystems, lighting modes, rotational kinetics, and audio voice synthesis.
          </p>
        </div>

        {/* Main Control Console Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 3D Model with real-time reactive state */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <Robot3D
              height="520px"
              autoRotate={autoRotate}
              ledColor={currentPreset.val}
              baseLedColor={currentPreset.base}
              enableControls={true}
            />

            {/* Simulated Disclaimer Alert */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                SIMULATION CONSOLE: Commands trigger interactive browser telemetry & audio synthesis. Physical hardware telemetry reflects BEC student build specs.
              </span>
            </div>
          </div>

          {/* Right Column: High-tech Telemetry HUD & Control Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            {/* Robot Status Dashboard */}
            <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/80 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  SYSTEM TELEMETRY HUD
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  ONLINE
                </span>
              </div>

              {/* Specification Matrix */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">ROBOT:</div>
                  <div className="text-white font-bold text-sm mt-0.5">BRVO</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">PROJECT:</div>
                  <div className="text-cyan-300 font-bold text-sm mt-0.5">BEC ROBOT</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">ROBOT HARDWARE:</div>
                  <div className="text-white font-bold text-sm mt-0.5">BEC DRONE TEAM</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">WEB DEVELOPERS:</div>
                  <div className="text-cyan-300 font-bold text-xs mt-0.5 truncate">JITENDRA, RAHUL, BHAGYABRATA, SHIVA</div>
                </div>
              </div>

              {/* Dynamic Control Buttons */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  DISPATCH SIMULATION CONTROLS:
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {/* Auto-Rotate Switch */}
                  <button
                    onClick={toggleAutoRotate}
                    className={`p-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                      autoRotate
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-glow-cyan/20'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin-slow text-cyan-400' : ''}`} />
                    <span>{autoRotate ? 'AUTO ROTATE [ON]' : 'AUTO ROTATE [OFF]'}</span>
                  </button>

                  {/* Lighting Modes */}
                  <button
                    onClick={cycleLights}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>LIGHTS: {currentPreset.name.split(' ')[0]}</span>
                  </button>

                  {/* Voice Synthesizer Audio Trigger */}
                  <button
                    onClick={handleTriggerGreeting}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span>VOICE GREETING</span>
                  </button>

                  {/* Full Demo Routine */}
                  <button
                    onClick={handleRunDemoMode}
                    disabled={isDemoRunning}
                    className={`p-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                      isDemoRunning
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 animate-pulse'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 hover:brightness-110 shadow-glow-cyan'
                    }`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isDemoRunning ? 'DEMO IN PROGRESS...' : 'RUN DEMO MODE'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Real-time System Console Stream */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-400 space-y-1.5 shadow-inner">
              <div className="flex items-center justify-between text-[10px] text-cyan-400 border-b border-slate-800 pb-1 font-bold">
                <span>TERMINAL LOGS</span>
                <span>BAUD: 115200</span>
              </div>
              <div className="space-y-1 pt-1 font-mono text-[11px]">
                {logs.map((log, i) => (
                  <div key={i} className={i === 0 ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                    {log}
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
