import React from 'react';
import { motion } from 'motion/react';
import { SPECIAL_OFFERS } from '../data/salonData';
import { Sparkles, CheckCircle2, Clock, Calendar, Tag, ChevronRight } from 'lucide-react';

interface SpecialOffersProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onOpenBooking }) => {
  return (
    <section id="offers" className="py-24 bg-[#0A0A0A] text-[#FAF9F6] relative transition-colors border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Tag className="w-3.5 h-3.5" />
            <span>Exclusive Pamper Deals</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase">
            Curated <span className="italic font-serif text-[#D4AF37]">Packages</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto tracking-wide font-sans">
            Head-to-toe salon transformations at special introductory package rates in Vaishali Nagar.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />

                {/* Special Tag Badge if present */}
                {offer.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-extrabold text-[9px] uppercase tracking-widest shadow-md">
                    {offer.badge}
                  </span>
                )}

                {/* Discount Tag */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest border border-[#D4AF37]/30">
                  {offer.discount}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif-luxury text-xl font-bold tracking-wide">{offer.title}</h3>
                  <p className="text-xs text-[#D4AF37]/80">{offer.subtitle}</p>
                </div>
              </div>

              {/* Offer Body */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                    Package Inclusions:
                  </div>
                  <ul className="space-y-2 mb-6">
                    {offer.includedServices.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 block font-manrope uppercase tracking-wider">Package Enquiry</span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                        Exclusive Offer
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                      <Clock className="w-3 h-3" />
                      <span>{offer.validTill}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(offer.id)}
                    className="w-full py-3.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enquire & Reserve Package</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

