import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Scissors, MapPin, Phone, MessageCircle, Instagram, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#050506] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E6BE] flex items-center justify-center">
                <Scissors className="w-4 h-4 text-black rotate-45" />
              </div>
              <span className="font-serif-luxury text-2xl font-light tracking-[0.2em] uppercase text-white">
                LAVANYA
              </span>
            </div>

            <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
              Jaipur’s premier luxury unisex salon and beauty studio in Vaishali Nagar. Delivering bespoke hair transformations, restorative skin rituals, and royal bridal makeup.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${SALON_INFO.rawPhone}`}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Navigation</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Salon Services</a></li>
              <li><a href="#offers" className="hover:text-[#D4AF37] transition-colors">Special Offers</a></li>
              <li><a href="#transformations" className="hover:text-[#D4AF37] transition-colors">Real Results</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Salon</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Treatments</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>Brazilian Keratin Smoothening</li>
              <li>HD Royal Bridal Makeup</li>
              <li>French Balayage & Highlights</li>
              <li>O3+ Power Glow Facial</li>
              <li>24K Gold Collagen Facial</li>
              <li>Gel Extensions & Nail Art</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3 text-xs text-white/60">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Jaipur Studio</h4>
            <p className="leading-relaxed">{SALON_INFO.address}</p>
            <p className="text-[#D4AF37] font-semibold">Phone: +91 98298 31434</p>
            <p>Mon – Sun: 09:00 AM – 09:00 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <p>© {new Date().getFullYear()} Lavanya Unisex Salon. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121214] max-w-md w-full rounded-2xl p-6 border border-[#D4AF37]/30 text-white relative space-y-4">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white/80"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif-luxury text-xl font-bold text-[#D4AF37] capitalize">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs text-white/70 leading-relaxed space-y-2 max-h-60 overflow-y-auto">
              <p>
                At Lavanya Unisex Salon, we value client confidentiality and data security. Any contact information submitted for appointment scheduling is strictly used for booking confirmations and promotional salon updates.
              </p>
              <p>
                We do not sell or share personal data with third-party advertisers. All online reservations are subject to appointment slot availability and salon confirmation.
              </p>
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full py-3 rounded-xl border border-[#D4AF37] text-[#D4AF37] font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

