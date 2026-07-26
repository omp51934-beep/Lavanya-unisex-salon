import React from 'react';
import { motion } from 'motion/react';
import { EXPERTS } from '../data/salonData';
import { Star, Award, Calendar, Sparkles } from 'lucide-react';

interface ExpertsSectionProps {
  onOpenBooking: (serviceId?: string, stylistId?: string) => void;
}

export const ExpertsSection: React.FC<ExpertsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="experts" className="py-24 bg-[#FAF9F6] dark:bg-[#0E0E10] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
            Master Artisans
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Meet Our <span className="text-gold-gradient italic">Certified Experts</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Trained internationally in hair design, skin aesthetics, and couture bridal styling.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTS.map((expert, idx) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#141416] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-400 font-bold text-xs border border-amber-500/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{expert.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block">
                      {expert.experience}
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold">{expert.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {expert.role}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Specialty: {expert.specialty}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/80 mt-4">
                <button
                  onClick={() => onOpenBooking(undefined, expert.id)}
                  className="w-full py-3 rounded-full font-bold uppercase text-[11px] tracking-wider bg-neutral-100 dark:bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-neutral-800 dark:text-neutral-200 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {expert.name.split(' ')[0]}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
