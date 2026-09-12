import React, { useState, useEffect } from 'react';
import { Bot, Volume2, VolumeX, Menu, X, ShieldCheck, Sparkles, Terminal, Layers } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Navbar({ activeSection, onNavigate }) {
  const [isMuted, setIsMuted] = useState(soundFx.muted);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playTelemetryPing();
    }
  };

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'MEET BRVO' },
    { id: 'explore360', label: '360° VIEW' },
    { id: 'technology', label: 'ENGINEERING' },
    { id: 'how-it-works', label: 'SYSTEM ARCHITECTURE' },
    { id: 'applications', label: 'CAPABILITIES' },
    { id: 'control-center', label: 'CONTROL CENTER' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'team', label: 'THE TEAM' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'guestbook', label: 'GUESTBOOK' },
  ];

  const handleNavClick = (id) => {
    soundFx.playCyberClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Unit Identifier */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all">
            <Bot className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                BRVO
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded font-semibold">
                BEC ROBOT
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-tight">
              BEC DRONE TEAM
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls: Audio Toggle, System Status & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Telemetry / Status Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-semibold">ONLINE</span>
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleAudio}
            title={isMuted ? "Enable High-Tech Audio" : "Mute High-Tech Audio"}
            className={`p-2.5 rounded-xl border transition-all ${
              !isMuted 
                ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 shadow-glow-cyan/30' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Interactive Demo CTA */}
          <button
            onClick={() => handleNavClick('control-center')}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-mono font-bold hover:brightness-110 shadow-glow-cyan transition-all uppercase tracking-wider"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CONTROL CENTER</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playCyberClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-cyan-500/20 backdrop-blur-2xl px-6 py-6 transition-all animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900 border border-transparent hover:border-cyan-500/30 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SYSTEM DIAGNOSTIC:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>
            <button
              onClick={() => handleNavClick('control-center')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-mono font-bold text-center uppercase tracking-widest shadow-glow-cyan"
            >
              LAUNCH SIMULATION CONSOLE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
