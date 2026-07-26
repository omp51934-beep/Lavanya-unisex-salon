import React from 'react';
import { SALON_INFO } from '../data/salonData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  Navigation,
  CheckCircle2,
  Car
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] dark:bg-[#0E0E10] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
            Location & Hours
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Visit Our <span className="text-gold-gradient italic">Luxury Studio</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            09-10 Deepak Vatika, Lalarpura, Gandhi Path Road, Vaishali Nagar, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#141416] p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 dark:text-white">
                    Salon Address
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                    {SALON_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vaishali+Nagar+Jaipur"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & Call */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 dark:text-white">
                    Direct Hotline
                  </h4>
                  <a
                    href={`tel:${SALON_INFO.rawPhone}`}
                    className="text-sm font-semibold text-amber-500 hover:underline mt-1 block"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Call for instant booking & inquiry</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 dark:text-white">
                    WhatsApp Chat
                  </h4>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-emerald-500 hover:underline mt-1 block"
                  >
                    Click to Chat (+91 98298 31434)
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Available 9 AM - 9 PM daily</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-neutral-900 dark:text-white">
                    Operating Hours
                  </h4>
                  <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                    Monday – Sunday: 09:00 AM – 09:00 PM
                  </p>
                  <p className="text-[11px] text-emerald-500 font-medium mt-0.5">
                    Open All 7 Days a Week
                  </p>
                </div>
              </div>

              {/* Valet Parking Info */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-center gap-3">
                <Car className="w-5 h-5 shrink-0 text-amber-500" />
                <span>Complimentary Valet Parking available for all clients.</span>
              </div>
            </div>
          </div>

          {/* Right Google Map Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-white dark:bg-[#141416] p-3 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl h-[480px] overflow-hidden relative">
              <iframe
                title="Lavanya Unisex Salon Map"
                src={SALON_INFO.googleMapsEmbed}
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
