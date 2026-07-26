import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Calendar } from 'lucide-react';

interface StyleConsultationProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const StyleConsultation: React.FC<StyleConsultationProps> = ({ onOpenBooking }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [timeframe, setTimeframe] = useState<string>('');

  const resetQuiz = () => {
    setStep(1);
    setGoal('');
    setType('');
    setTimeframe('');
  };

  const getRecommendation = () => {
    if (goal === 'hair-frizz') {
      return {
        id: 's-keratin-treatment',
        title: 'Brazilian Keratin Smoothening',
        price: 3999,
        reason: 'Recommended for instant frizzy hair repair, mirror shine, and 4-6 months humidity defense.',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
      };
    } else if (goal === 'skin-tan') {
      return {
        id: 's-facial-o3-plus',
        title: 'O3+ Power Glow D-Tan Facial',
        price: 1999,
        reason: 'Recommended for deep tan removal, hyperpigmentation correction, and instant glass skin glow.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
      };
    } else if (goal === 'bridal') {
      return {
        id: 's-bridal-makeup',
        title: 'HD Royal Bridal Makeover & Styling',
        price: 14999,
        reason: 'Recommended for royal wedding glam with 24-hr water resistant airbrush finish & VIP suite access.',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
      };
    } else {
      return {
        id: 's-haircut-men',
        title: 'Executive Cut & Beard Architecture',
        price: 499,
        reason: 'Recommended for crisp facial framing, scalp detox wash, and hot towel finish.',
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-20 bg-white dark:bg-[#0A0A0B] relative transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-card-light dark:glass-card-dark rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Style Finder</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Find Your Ideal <span className="text-gold-gradient italic">Treatment Match</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Answer 3 quick questions to receive a tailored salon recommendation for your hair & skin.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-amber-500 text-center">
                  Step 1 of 3: Primary Goal
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'hair-frizz', label: 'Tame Frizzy / Damaged Hair', desc: 'Need sleek, mirror-like smooth hair' },
                    { id: 'skin-tan', label: 'Remove Tan & Glow Skin', desc: 'Need deep facial exfoliation & radiance' },
                    { id: 'bridal', label: 'Bridal / Celebration Glam', desc: 'Need HD makeup & full pamper package' },
                    { id: 'grooming', label: 'Precision Men’s Grooming', desc: 'Need haircut, beard shape & de-tan' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setGoal(opt.id);
                        setStep(2);
                      }}
                      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#141416] hover:border-amber-500 text-left transition-all hover:scale-[1.02] group"
                    >
                      <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-amber-500 block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 block mt-1">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-amber-500 text-center">
                  Step 2 of 3: Hair / Skin Type
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'dry', label: 'Dry & Dehydrated', desc: 'Needs intense moisture boost' },
                    { id: 'oily', label: 'Oily or Combination', desc: 'Needs pore balance & oil control' },
                    { id: 'color-treated', label: 'Color-Treated / Bleached', desc: 'Needs bond protection' },
                    { id: 'normal', label: 'Normal / Daily Maintenance', desc: 'Needs refresh & maintenance' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setType(opt.id);
                        setStep(3);
                      }}
                      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#141416] hover:border-amber-500 text-left transition-all hover:scale-[1.02] group"
                    >
                      <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-amber-500 block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 block mt-1">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-amber-500 text-center">
                  Step 3 of 3: When are you planning?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'today', label: 'Today / Next 24 Hours', desc: 'Urgent pamper session' },
                    { id: 'weekend', label: 'This Weekend', desc: 'Relaxing weekend treat' },
                    { id: 'event', label: 'Upcoming Event / Festival', desc: 'Preparing for function' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTimeframe(opt.id);
                        setStep(4);
                      }}
                      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#141416] hover:border-amber-500 text-left transition-all hover:scale-[1.02] group"
                    >
                      <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-amber-500 block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 block mt-1">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Result */}
            {step === 4 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 space-y-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 px-3 py-1 rounded-full bg-amber-500/20 inline-block">
                    Your Personalized Match
                  </span>
                  <div className="flex flex-col sm:flex-row items-center gap-6 text-left">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 border border-amber-500/30"
                    />
                    <div className="space-y-2">
                      <h4 className="font-serif-luxury text-2xl font-bold text-neutral-900 dark:text-white">
                        {rec.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {rec.reason}
                      </p>
                      <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                        Consultation & Appointment
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={resetQuiz}
                    className="px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Start Over</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(rec.id)}
                    className="px-7 py-3.5 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {rec.title}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
