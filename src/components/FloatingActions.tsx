import React, { useEffect, useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-900 shadow-xl border border-amber-500/30 hover:scale-110 transition-all"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${SALON_INFO.rawPhone}`}
        className="p-3.5 rounded-full bg-neutral-900/90 text-amber-400 border border-amber-500/40 shadow-2xl hover:scale-110 transition-all hidden sm:flex items-center justify-center"
        title="Call Salon"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hi%20Lavanya%20Unisex%20Salon,%20I%20would%20like%20to%20book%20an%20appointment`}
        target="_blank"
        rel="noreferrer"
        className="p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current animate-pulse"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.116 1.027 6.98 2.89 1.862 1.865 2.887 4.343 2.885 6.983 0 5.447-4.432 9.876-9.879 9.876M12.051 0C5.401 0 0 5.4 0 12.05c0 2.12.552 4.188 1.601 6.002L0 24l6.103-1.601A11.98 11.98 0 0012.05 24c6.649 0 12.05-5.4 12.05-12.05C24.1 5.4 18.7 0 12.051 0z" />
        </svg>
      </a>

      {/* Floating Book Appointment Button */}
      <button
        onClick={onOpenBooking}
        className="px-5 py-3 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 hover:scale-105 transition-all flex items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
