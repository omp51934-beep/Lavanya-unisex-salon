import React from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { Award, ShieldCheck, Sparkles, Heart, Users, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6] dark:bg-[#0E0E10] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Imagery Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                  alt="Lavanya Salon Interiors"
                  className="rounded-3xl shadow-xl object-cover h-64 w-full border border-amber-500/20"
                />
                <div className="p-6 rounded-3xl bg-neutral-900 text-white border border-amber-500/30 space-y-2">
                  <span className="text-2xl font-bold font-serif-luxury text-gold-gradient">10,000+</span>
                  <p className="text-xs text-neutral-400">Happy Clients Pampered in Jaipur</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-neutral-900 dark:text-white space-y-2">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-lg">
                    <span>4.7</span>
                    <Sparkles className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">359+ 5-Star Google Reviews</p>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                  alt="Hair Spa Treatment"
                  className="rounded-3xl shadow-xl object-cover h-64 w-full border border-amber-500/20"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
                Our Royal Heritage
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
                Crafting Timeless <span className="text-gold-gradient italic">Elegance in Jaipur</span>
              </h2>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Located in the heart of Vaishali Nagar at Gandhi Path Road, <strong>Lavanya Unisex Salon</strong> was created with a single visionary mission: to bring international standards of hair architecture, dermatological skin therapies, and couture bridal makeup to Jaipur.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Every appointment is treated as an intimate artistic consultation. From our private VIP suites to our strict single-use hygienic tools, we ensure a serene sanctuary where you relax while our certified master stylists revitalize your glow.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>100% Sanitized Tools</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Tool sterilization between every client & disposable capes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certified Artists</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Trained by L’Oréal & Schwarzkopf master academies.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Luxury Brands</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Exclusively L’Oréal, O3+, M.A.C & Charlotte Tilbury.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span>Unisex Comfort</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Dedicated sections & VIP suites for total privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
