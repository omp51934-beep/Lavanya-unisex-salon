import React, { useState } from 'react';
import { TRANSFORMATIONS } from '../data/salonData';
import { Sparkles, Scissors, Sliders, ArrowLeftRight } from 'lucide-react';

export const TransformationSlider: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100

  const activeTrans = TRANSFORMATIONS[selectedIdx];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="transformations" className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 font-manrope">
            Real Client Results
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold">
            Before & After <span className="text-gold-gradient italic">Transformations</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Slide horizontally to witness the extraordinary craftsmanship of our master stylists.
          </p>
        </div>

        {/* Transformation Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {TRANSFORMATIONS.map((tr, idx) => (
            <button
              key={tr.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                selectedIdx === idx
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-amber-500/40'
              }`}
            >
              {tr.category}: {tr.title.split(' to ')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-amber-500/30 select-none cursor-ew-resize shadow-2xl group"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src={activeTrans.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 font-bold text-xs uppercase border border-amber-500/30">
              AFTER (Lavanya Touch)
            </span>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeTrans.beforeImage}
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-neutral-300 font-bold text-xs uppercase border border-white/20">
                BEFORE
              </span>
            </div>

            {/* Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(212,175,55,1)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-2xl border-2 border-white">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Hint overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/20 text-[11px] text-neutral-300 pointer-events-none flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Drag or hover to compare</span>
            </div>
          </div>

          {/* Transformation Story Note */}
          <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-amber-400">{activeTrans.title}</h4>
              <p className="text-xs text-neutral-300 mt-1">{activeTrans.description}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] uppercase text-neutral-400 block">Master Artist</span>
              <span className="text-sm font-semibold text-white">{activeTrans.stylistName}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
