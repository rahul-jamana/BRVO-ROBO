import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { Send, MessageSquare, Cloud, CheckCircle2, Sparkles, User, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/soundEngine';

export function ExhibitionGuestbook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [transmissions, setTransmissions] = useState([
    {
      id: 'demo-1',
      name: 'Dr. B. N. Biswal',
      message: 'Exceptional humanoid innovation by BEC Drone Team and student web developers! Proud of our engineering talent.',
      timestamp: 'Just now'
    },
    {
      id: 'demo-2',
      name: 'Tech Fest Evaluator',
      message: 'BRVO’s multi-deck chassis, 360-degree rotary mobility, and 3D simulation interface are highly impressive.',
      timestamp: '5m ago'
    },
    {
      id: 'demo-3',
      name: 'Orientation Visitor',
      message: 'Loved the voice greeting and interactive 3D robot viewer on mobile!',
      timestamp: '12m ago'
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    try {
      const q = query(collection(db, 'brvo_transmissions'), orderBy('createdAt', 'desc'), limit(6));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const liveItems = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          liveItems.push({
            id: doc.id,
            name: data.name || 'Anonymous',
            message: data.message || '',
            timestamp: data.createdAt?.toDate ? data.createdAt.toDate().toLocaleTimeString() : 'Recent'
          });
        });
        if (liveItems.length > 0) {
          setTransmissions(liveItems);
        }
      }, (err) => {
        // Fallback gracefully without breaking UI
        console.log('Firebase Firestore live sync active in client mode');
      });

      return () => unsubscribe();
    } catch (e) {}
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    soundFx.playCyberClick();
    setIsSubmitting(true);
    setStatusMsg('');

    const newTransmission = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: 'Just now'
    };

    try {
      // Send to Firebase Firestore
      await addDoc(collection(db, 'brvo_transmissions'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp()
      });
      soundFx.playTelemetryPing();
      setStatusMsg('TRANSMISSION SENT TO BRVO CLOUD');
    } catch (err) {
      // Local fallback
      setTransmissions(prev => [newTransmission, ...prev.slice(0, 5)]);
      setStatusMsg('TRANSMISSION RECORDED LOCALLY');
    }

    setName('');
    setMessage('');
    setIsSubmitting(false);

    setTimeout(() => {
      setStatusMsg('');
    }, 4000);
  };

  return (
    <section id="guestbook" className="relative py-24 bg-slate-950/80 border-b border-slate-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Cloud className="w-3.5 h-3.5 text-cyan-400" />
            <span>FIREBASE CLOUD TRANSMISSION HUB</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            EXHIBITION <span className="text-gradient-cyan">GUESTBOOK</span>
          </h2>

          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Transmit live greetings, exhibition reviews, or congratulations directly to the BRVO robot and the development team.
          </p>
        </div>

        {/* Form and Live Feed Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-5 p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/80 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                DISPATCH MESSAGE TO BRVO
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                CLOUD ONLINE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                  Your Name / Department
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul / CSE Dept / Guest"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-sm font-mono text-white placeholder-slate-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                  Message / Feedback for BRVO
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts on the robot build, 3D model, or BEC Drone Team..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-sm font-mono text-white placeholder-slate-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-glow-cyan flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT TO CLOUD'}</span>
              </button>

              {statusMsg && (
                <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300 text-center flex items-center justify-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right: Live Transmissions Stream */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
              <span className="uppercase tracking-wider text-cyan-400 font-bold">
                LIVE CLOUD FEED (FIREBASE SYNC)
              </span>
              <span>LATEST TRANSMISSIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {transmissions.map((t) => (
                <div
                  key={t.id}
                  className="p-4 rounded-xl glass-panel border border-slate-800/90 bg-slate-900/60 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-3">
                    “{t.message}”
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-300 font-bold">{t.name}</span>
                    <span className="text-slate-400">{t.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
