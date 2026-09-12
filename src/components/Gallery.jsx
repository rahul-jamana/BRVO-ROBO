import React, { useState } from 'react';
import { Camera, Maximize2, X, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "BRVO Prototype — Physical Assembly",
      category: "HARDWARE BUILD",
      src: "/images/brvo-real.jpg",
      caption: "The fully assembled physical BRVO robot in the BEC Drone Team innovation lab, showcasing the head unit, ocular vision, service tray deck, dual column risers, and red LED mobile base.",
      isPrimary: true
    },
    {
      id: 2,
      title: "Head Unit & Dual Ocular Vision",
      category: "SENSORY MODULE",
      src: "/images/brvo-real.jpg",
      caption: "High-contrast visual alignment of BRVO's ocular sensors, central neck optical unit, and responsive cyan mouth visor element.",
      isPrimary: false
    },
    {
      id: 3,
      title: "Service Tray & Multi-Deck Structure",
      category: "CHASSIS & PAYLOAD",
      src: "/images/brvo-real.jpg",
      caption: "Mid-tier delivery tray designed for guest greeting, badge distribution, and touchscreen interface integration during college events.",
      isPrimary: false
    },
    {
      id: 4,
      title: "4-Wheel Mobile Platform & Underglow",
      category: "MOBILITY PLATFORM",
      src: "/images/brvo-real.jpg",
      caption: "Heavy-duty 4-wheel mobile platform equipped with front horizontal red LED safety dot matrix for floor path illumination.",
      isPrimary: false
    }
  ];

  const openLightbox = (index) => {
    soundFx.playCyberClick();
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    soundFx.playCyberClick();
    setLightboxIndex(null);
  };

  const nextImage = () => {
    soundFx.playCyberClick();
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    soundFx.playCyberClick();
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="relative py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      {/* Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL DOCUMENTATION</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            BRVO <span className="text-gradient-cyan">IN ACTION</span>
          </h2>

          <p className="text-base text-slate-400 font-sans leading-relaxed">
            Photographic records and technical captures of the BRVO humanoid service robot manufactured by the BEC Drone Team.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              onMouseEnter={() => soundFx.playCyberHover()}
              className="cursor-pointer group rounded-2xl overflow-hidden glass-panel border border-slate-800 hover:border-cyan-400/70 bg-slate-900/70 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden bg-slate-950 flex items-center justify-center p-3">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                  {item.category}
                </div>

                {/* Hover Overlay Zoom Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-glow-cyan">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title & Caption snippet */}
              <div className="p-4 border-t border-slate-800 space-y-1">
                <h3 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>BEC INNOVATION LAB</span>
                  <span className="text-cyan-400">VIEW PHOTO →</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 border border-cyan-500/40 text-slate-300 hover:text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Controls */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div 
            className="max-w-4xl w-full rounded-2xl overflow-hidden glass-panel border border-cyan-500/40 bg-slate-900/90 p-4 sm:p-6 space-y-4 max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-0 flex items-center justify-center bg-slate-950 rounded-xl overflow-hidden p-2">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
                  {galleryItems[lightboxIndex].category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
              </div>
              <h3 className="font-display font-black text-xl text-white">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                {galleryItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
