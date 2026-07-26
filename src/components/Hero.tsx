import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import {
  Calendar,
  Phone,
  MessageCircle,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [quickService, setQuickService] = useState('s-keratin-treatment');
  const [quickDate, setQuickDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );

  const heroImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600',
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-[#FAF9F6]">
      {/* Background Subtle Gradient & Glow Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-64 bg-[#E5D3B3]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-all duration-1000"
          style={{ backgroundImage: `url('${heroImages[0]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Pane (60% width equivalent) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Eyebrow & Ratings */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase px-3.5 py-1 border border-[#D4AF37]/30 rounded-full inline-block backdrop-blur-md">
                Open Daily • 9 AM - 9 PM
              </span>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-[#D4AF37] font-bold">★★★★★</span>
                <span className="text-white/50 font-manrope">4.7 ({SALON_INFO.totalReviews}+ Google Reviews)</span>
              </div>
            </div>

            {/* Massive Bold Typography Headline */}
            <div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[100px] leading-[0.88] font-light tracking-tighter uppercase mb-4 text-white">
                The Art <br /> of <span className="italic font-serif text-[#D4AF37]">Radiance</span>
              </h1>
              <p className="text-white/60 max-w-lg text-sm sm:text-base leading-relaxed tracking-wide font-sans mt-4">
                Jaipur’s premier unisex beauty studio in Vaishali Nagar. We blend modern precision with royal elegance to craft your signature look.
              </p>
            </div>

            {/* Location & Quick Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-1">
                  Studio Location
                </div>
                <div className="text-[11px] leading-tight text-white/80 uppercase">
                  Deepak Vatika, Lalarpura<br />Vaishali Nagar, Jaipur
                </div>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col justify-between">
                <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold mb-1">
                  Direct Line
                </div>
                <a
                  href={`tel:${SALON_INFO.rawPhone}`}
                  className="text-lg font-light tracking-tight text-white hover:text-[#D4AF37] transition-colors"
                >
                  +91 98298 31434
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] rounded-full"
              >
                Secure Booking
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hi%20Lavanya%20Unisex%20Salon,%20I%20would%20like%20to%20book%20an%20appointment`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-white text-[10px] uppercase tracking-[0.2em] font-bold transition-all rounded-full flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 fill-[#25D366]"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.116 1.027 6.98 2.89 1.862 1.865 2.887 4.343 2.885 6.983 0 5.447-4.432 9.876-9.879 9.876M12.051 0C5.401 0 0 5.4 0 12.05c0 2.12.552 4.188 1.601 6.002L0 24l6.103-1.601A11.98 11.98 0 0012.05 24c6.649 0 12.05-5.4 12.05-12.05C24.1 5.4 18.7 0 12.051 0z" />
                </svg>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Showcase Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200"
                alt="Lavanya Luxury Studio"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                    Signature Salon Experience
                  </div>
                  <div className="text-sm font-serif italic text-white mt-0.5">
                    Vaishali Nagar, Jaipur
                  </div>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all rounded-full"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

