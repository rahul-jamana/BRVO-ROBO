import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { RobotModel } from './RobotModel';
import { RotateCw, ZoomIn, ZoomOut, RefreshCw, Eye, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Robot3D({ 
  autoRotate = true, 
  ledColor = '#00F0FF', 
  baseLedColor = '#EF4444', 
  showHotspots = false,
  activeHotspot = null,
  onSelectHotspot = null,
  height = '500px',
  enableControls = true
}) {
  const controlsRef = useRef();
  const [isRotating, setIsRotating] = useState(autoRotate);

  const handleResetView = () => {
    soundFx.playCyberClick();
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleAutoRotate = () => {
    soundFx.playCyberClick();
    setIsRotating(!isRotating);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden glass-panel border border-cyan-500/20 shadow-glow-cyan/20 group" style={{ height }}>
      {/* Background Cyber Glow & Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Futuristic HUD Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
          BRVO 3D RENDERING CORE
        </span>
      </div>

      {/* 360 Indicator */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/60 text-slate-300 text-xs font-mono">
        <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span>360° INTERACTIVE</span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1.2, 3.8], fov: 45 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#00f0ff" />
        <pointLight position={[0, 2, 2]} intensity={1.2} color="#ffffff" />
        <pointLight position={[0, -1, 1]} intensity={0.8} color={baseLedColor} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <RobotModel
              ledColor={ledColor}
              baseLedColor={baseLedColor}
              showHotspots={showHotspots}
              activeHotspot={activeHotspot}
              onSelectHotspot={onSelectHotspot}
            />
          </Float>
          <ContactShadows
            position={[0, -1.05, 0]}
            opacity={0.65}
            scale={5}
            blur={2}
            far={3}
            color="#000000"
          />
        </Suspense>

        {enableControls && (
          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={true}
            minDistance={2.0}
            maxDistance={5.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate={isRotating}
            autoRotateSpeed={1.8}
            dampingFactor={0.05}
          />
        )}
      </Canvas>

      {/* Interactive Controls Overlay Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/85 border border-cyan-500/30 backdrop-blur-md shadow-lg">
        <button
          onClick={toggleAutoRotate}
          title={isRotating ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            isRotating
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin-slow text-cyan-400" : ""}`} />
          <span>{isRotating ? "ROTATING" : "PAUSED"}</span>
        </button>

        <div className="w-px h-4 bg-slate-800" />

        <button
          onClick={handleResetView}
          title="Reset Camera View"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>RESET</span>
        </button>
      </div>

      {/* Mouse Drag Hint */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400/80 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800 pointer-events-none">
        <span>DRAG TO ROTATE • SCROLL TO ZOOM</span>
      </div>
    </div>
  );
}
