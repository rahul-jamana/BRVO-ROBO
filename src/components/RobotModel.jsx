import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RobotModel({ 
  ledColor = '#00F0FF', 
  baseLedColor = '#EF4444', 
  activeHotspot = null, 
  onSelectHotspot = null,
  showHotspots = false,
  isHovering = false 
}) {
  const groupRef = useRef();
  const neckRef = useRef();
  const headRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Subtle hovering breathing motion
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.04;
    }
    if (headRef.current) {
      // Very subtle lifelike idle head tilt
      headRef.current.rotation.y = Math.sin(t * 0.8) * 0.03;
      headRef.current.rotation.z = Math.cos(t * 0.6) * 0.01;
    }
  });

  const hotspots = [
    { id: 'head', name: 'HEAD UNIT', pos: [0, 1.85, 0.25], label: 'Head & Dual Vision' },
    { id: 'sensors', name: 'VISION / SENSORS', pos: [0, 1.42, 0.28], label: 'Neck Camera Sensor' },
    { id: 'speaker', name: 'AUDIO / SPEAKER', pos: [0.38, 1.85, 0.24], label: 'Audio Out / Ocular' },
    { id: 'control', name: 'CONTROL SYSTEM', pos: [0, 0.95, 0.32], label: 'Main MCU & Logic' },
    { id: 'body', name: 'ROBOT BODY', pos: [-0.6, 0.9, 0], label: 'Structural Chassis' },
    { id: 'tray', name: 'SERVICE TRAY', pos: [0, 0.45, 0.45], label: 'Multi-utility Tray' },
    { id: 'led', name: 'SMART LED SYSTEM', pos: [0.58, 0.9, 0.3], label: 'Edge LED Strips' },
    { id: 'base', name: 'MOBILE BASE', pos: [0, -0.65, 0.68], label: 'Drive & Underglow' },
  ];

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* ========================================================
          1. MOBILE BASE & WHEELS
         ======================================================== */}
      <group position={[0, -0.65, 0]}>
        {/* Main Base Chassis Box */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 0.28, 1.3]} />
          <meshStandardMaterial 
            color="#0f172a" 
            roughness={0.4} 
            metalness={0.7} 
          />
        </mesh>
        
        {/* Base Top Dark Plate */}
        <mesh position={[0, 0.145, 0]}>
          <boxGeometry args={[1.58, 0.02, 1.28]} />
          <meshStandardMaterial 
            color="#090d16" 
            roughness={0.3} 
            metalness={0.8} 
          />
        </mesh>

        {/* Front Base Lower Panel with Wood/Dark Finish Texture Tone */}
        <mesh position={[0, -0.06, 0.652]}>
          <planeGeometry args={[1.56, 0.14]} />
          <meshStandardMaterial color="#451a03" roughness={0.6} metalness={0.2} />
        </mesh>

        {/* Front Red LED Underglow Dot Array */}
        <mesh position={[0, -0.06, 0.66]}>
          <planeGeometry args={[1.45, 0.03]} />
          <meshStandardMaterial 
            color={baseLedColor} 
            emissive={baseLedColor} 
            emissiveIntensity={2.5} 
            roughness={0.1} 
          />
        </mesh>

        {/* 4 Robust Wheels */}
        {/* Front Left */}
        <group position={[-0.85, -0.05, 0.45]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.045, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Front Right */}
        <group position={[0.85, -0.05, 0.45]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.045, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Rear Left */}
        <group position={[-0.85, -0.05, -0.45]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.045, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Rear Right */}
        <group position={[0.85, -0.05, -0.45]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.08, 24]} />
            <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.045, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* ========================================================
          2. DUAL VERTICAL RISER COLUMNS
         ======================================================== */}
      <group position={[0, -0.15, 0]}>
        {/* Left Column */}
        <mesh position={[-0.26, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.18, 0.72, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.8} />
        </mesh>
        {/* Right Column */}
        <mesh position={[0.26, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.18, 0.72, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.8} />
        </mesh>
      </group>

      {/* ========================================================
          3. SERVICE TRAY / MID-DECK
         ======================================================== */}
      <group position={[0, 0.25, 0.08]}>
        {/* Main Tray Slab */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.55, 0.08, 1.1]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.4} metalness={0.1} />
        </mesh>
        {/* Tray Raised Edges */}
        {/* Left Guard */}
        <mesh position={[-0.74, 0.06, 0]}>
          <boxGeometry args={[0.07, 0.06, 1.1]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
        {/* Right Guard */}
        <mesh position={[0.74, 0.06, 0]}>
          <boxGeometry args={[0.07, 0.06, 1.1]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
        {/* Front Guard */}
        <mesh position={[0, 0.06, 0.52]}>
          <boxGeometry args={[1.55, 0.06, 0.06]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
        </mesh>
        {/* Smartphone / Control Device on Tray */}
        <mesh position={[-0.2, 0.045, 0.1]} rotation={[-Math.PI / 2, 0, 0.15]} castShadow>
          <boxGeometry args={[0.3, 0.58, 0.015]} />
          <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Smartphone Screen Glow */}
        <mesh position={[-0.2, 0.055, 0.1]} rotation={[-Math.PI / 2, 0, 0.15]}>
          <planeGeometry args={[0.26, 0.5]} />
          <meshStandardMaterial 
            color="#0284c7" 
            emissive="#0284c7" 
            emissiveIntensity={0.8} 
            roughness={0.1} 
          />
        </mesh>
      </group>

      {/* ========================================================
          4. TORSO / UPPER BODY BOX
         ======================================================== */}
      <group position={[0, 0.9, -0.05]}>
        {/* Torso White Front Panel Box */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.15, 1.05, 0.55]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Torso Top Cap & Dark Outer Frame */}
        <mesh position={[0, 0.53, 0]}>
          <boxGeometry args={[1.18, 0.03, 0.58]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Front LED Edge Strip Left */}
        <mesh position={[-0.56, 0, 0.28]}>
          <boxGeometry args={[0.02, 0.98, 0.02]} />
          <meshStandardMaterial 
            color={ledColor} 
            emissive={ledColor} 
            emissiveIntensity={2.0} 
            roughness={0.1} 
          />
        </mesh>

        {/* Front LED Edge Strip Right */}
        <mesh position={[0.56, 0, 0.28]}>
          <boxGeometry args={[0.02, 0.98, 0.02]} />
          <meshStandardMaterial 
            color={ledColor} 
            emissive={ledColor} 
            emissiveIntensity={2.0} 
            roughness={0.1} 
          />
        </mesh>

        {/* Side Joint Disks / Arm Bracket Flanges */}
        {/* Left Side */}
        <mesh position={[-0.58, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 24]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Right Side */}
        <mesh position={[0.58, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 24]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* BEC Logo / BRVO Emblem Plate on Chest */}
        <mesh position={[0, 0.2, 0.278]}>
          <planeGeometry args={[0.45, 0.12]} />
          <meshStandardMaterial 
            color="#0f172a" 
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
        <mesh position={[0, 0.2, 0.28]}>
          <planeGeometry args={[0.42, 0.02]} />
          <meshStandardMaterial 
            color={ledColor} 
            emissive={ledColor} 
            emissiveIntensity={1.5} 
          />
        </mesh>
      </group>

      {/* ========================================================
          5. NECK & SENSOR CUBE
         ======================================================== */}
      <group ref={neckRef} position={[0, 1.45, -0.05]}>
        {/* Neck Stepped Pillar */}
        <mesh castShadow>
          <boxGeometry args={[0.32, 0.28, 0.3]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Neck Accent Band */}
        <mesh position={[0, 0.04, 0.152]}>
          <planeGeometry args={[0.3, 0.04]} />
          <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={1.2} />
        </mesh>

        {/* Central Camera / Sensor Box (Front of Neck) */}
        <group position={[0, -0.05, 0.2]}>
          <mesh castShadow>
            <boxGeometry args={[0.18, 0.18, 0.14]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Camera Aperture / Lens */}
          <mesh position={[0, 0, 0.075]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.055, 0.02, 24]} />
            <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Glass Lens Core */}
          <mesh position={[0, 0, 0.086]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
            <meshStandardMaterial 
              color={ledColor} 
              emissive={ledColor} 
              emissiveIntensity={1.8} 
              roughness={0.1} 
            />
          </mesh>
        </group>
      </group>

      {/* ========================================================
          6. HEAD UNIT & DUAL OCULAR EYES
         ======================================================== */}
      <group ref={headRef} position={[0, 1.85, -0.05]}>
        {/* Head White Outer Enclosure */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.22, 0.46, 0.44]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Head Beveled Rim / Backplate */}
        <mesh position={[0, 0, -0.22]}>
          <boxGeometry args={[1.24, 0.48, 0.04]} />
          <meshStandardMaterial color="#090d16" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Left Circular Ocular Sensor / Eye */}
        <group position={[-0.32, 0.06, 0.222]}>
          {/* Outer Dark Ring Bezel */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
            <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
          </mesh>
          {/* Recessed Lens Mesh */}
          <mesh position={[0, 0, 0.012]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.015, 32]} />
            <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Glowing Sensor Pupil */}
          <mesh position={[0, 0, 0.02]}>
            <circleGeometry args={[0.04, 24]} />
            <meshStandardMaterial 
              color="#38bdf8" 
              emissive="#38bdf8" 
              emissiveIntensity={2.0} 
            />
          </mesh>
        </group>

        {/* Right Circular Ocular Sensor / Eye */}
        <group position={[0.32, 0.06, 0.222]}>
          {/* Outer Dark Ring Bezel */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
            <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
          </mesh>
          {/* Recessed Lens Mesh */}
          <mesh position={[0, 0, 0.012]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.015, 32]} />
            <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Glowing Sensor Pupil */}
          <mesh position={[0, 0, 0.02]}>
            <circleGeometry args={[0.04, 24]} />
            <meshStandardMaterial 
              color="#38bdf8" 
              emissive="#38bdf8" 
              emissiveIntensity={2.0} 
            />
          </mesh>
        </group>

        {/* Horizontal Blue Visor Strip / Mouth Element */}
        <mesh position={[0, -0.11, 0.222]}>
          <planeGeometry args={[0.55, 0.05]} />
          <meshStandardMaterial 
            color="#0284c7" 
            emissive="#00f0ff" 
            emissiveIntensity={2.5} 
            roughness={0.1} 
          />
        </mesh>
      </group>

      {/* ========================================================
          7. 3D HOTSPOT ANCHORS (for 360 viewer mode)
         ======================================================== */}
      {showHotspots && (
        <group>
          {hotspots.map((hs) => {
            const isSelected = activeHotspot === hs.id;
            return (
              <group 
                key={hs.id} 
                position={hs.pos} 
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectHotspot) onSelectHotspot(hs.id);
                }}
              >
                {/* Outer pulsing ring */}
                <mesh>
                  <sphereGeometry args={[0.055, 16, 16]} />
                  <meshBasicMaterial 
                    color={isSelected ? "#00F0FF" : "#38BDF8"} 
                    wireframe 
                  />
                </mesh>
                {/* Core dot */}
                <mesh>
                  <sphereGeometry args={[0.035, 16, 16]} />
                  <meshBasicMaterial color={isSelected ? "#FFFFFF" : "#00F0FF"} />
                </mesh>
              </group>
            );
          })}
        </group>
      )}
    </group>
  );
}
