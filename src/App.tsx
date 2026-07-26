import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatedCursor } from './components/AnimatedCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { ServicesSection } from './components/ServicesSection';
import { TransformationSlider } from './components/TransformationSlider';
import { AboutSection } from './components/AboutSection';
import { StyleConsultation } from './components/StyleConsultation';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { MyBookingsDrawer } from './components/MyBookingsDrawer';
import { AdminPortalModal } from './components/AdminPortalModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('lavanya_theme');
    return saved ? saved === 'dark' : true; // Default to dark luxury theme
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [preselectedStylist, setPreselectedStylist] = useState<string | undefined>();

  const [myBookingsOpen, setMyBookingsOpen] = useState(false);
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lavanya_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lavanya_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenBooking = (serviceId?: string, stylistId?: string) => {
    setPreselectedService(serviceId);
    setPreselectedStylist(stylistId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0A0A0B] text-neutral-900 dark:text-neutral-100 selection:bg-amber-500/20 selection:text-amber-500 font-sans antialiased overflow-x-hidden">
      {/* Scroll Progress Line */}
      <ScrollProgress />

      {/* Trailing Golden Cursor Ring */}
      <AnimatedCursor />

      {/* Luxury Loading Screen */}
      <LoadingScreen />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMyBookings={() => setMyBookingsOpen(true)}
        onOpenAdminPortal={() => setAdminPortalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Hero Section */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Special Packages & Offers */}
        <SpecialOffers onOpenBooking={handleOpenBooking} />

        {/* Services Menu */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Before/After Transformation Slider */}
        <TransformationSlider />

        {/* About Section */}
        <AboutSection />

        {/* Interactive Beauty Quiz */}
        <StyleConsultation onOpenBooking={handleOpenBooking} />

        {/* Client Reviews */}
        <ReviewsSection />

        {/* FAQ Accordions */}
        <FAQSection />

        {/* Contact & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={preselectedService}
        preselectedStylistId={preselectedStylist}
      />

      <MyBookingsDrawer
        isOpen={myBookingsOpen}
        onClose={() => setMyBookingsOpen(false)}
      />

      <AdminPortalModal
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
      />
    </div>
  );
}
