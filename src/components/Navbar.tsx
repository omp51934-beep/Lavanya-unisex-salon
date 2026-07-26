import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import {
  Scissors,
  Phone,
  Calendar,
  Sun,
  Moon,
  Menu,
  X,
  Clock,
  Sparkles,
  MapPin,
  BookmarkCheck,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMyBookings: () => void;
  onOpenAdminPortal?: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  onOpenAdminPortal,
  darkMode,
  setDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check Open Now status (9:00 AM - 9:00 PM)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpenNow(hours >= 9 && hours < 21);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5'
          : 'bg-[#0A0A0A]/60 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-[#F5E6BE] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <Scissors className="w-4 h-4 text-black rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-white">
                LAVANYA
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                Studio
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-wider font-manrope">
              <span>Vaishali Nagar, Jaipur</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span className={`flex items-center gap-1 font-semibold ${isOpenNow ? 'text-emerald-400' : 'text-amber-400'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                {isOpenNow ? 'Open Now • 9 AM - 9 PM' : 'Opens 9 AM'}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-[#D4AF37] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
            className="p-2 rounded-full border border-white/10 text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Direct Phone */}
          <a
            href={`tel:${SALON_INFO.rawPhone}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          >
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span>Call</span>
          </a>

          {/* My Bookings Drawer Link */}
          <button
            onClick={onOpenMyBookings}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            title="View My Appointments"
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Bookings</span>
          </button>

          {/* Book Appointment CTA Button - Bold Theme Style */}
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-full"
          >
            Book Now
          </button>

          {/* Secret Admin Portal Link */}
          {onOpenAdminPortal && (
            <button
              onClick={onOpenAdminPortal}
              className="p-2 text-white/40 hover:text-[#D4AF37] transition-colors"
              title="Staff Portal"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-xl z-50 flex flex-col p-6 border-t border-amber-500/20 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-center my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-luxury text-2xl font-medium text-neutral-800 dark:text-neutral-200 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMyBookings();
              }}
              className="text-base font-medium text-neutral-700 dark:text-neutral-300 flex items-center justify-center gap-2 py-2"
            >
              <BookmarkCheck className="w-5 h-5 text-amber-500" />
              <span>View My Appointments</span>
            </button>
          </div>

          <div className="mt-auto space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full font-bold uppercase text-sm tracking-wider bg-gold-gradient text-neutral-950 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${SALON_INFO.rawPhone}`}
              className="w-full py-3 rounded-full font-semibold text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call Us: +91 98298 31434</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
