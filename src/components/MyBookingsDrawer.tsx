import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types';
import { SALON_INFO } from '../data/salonData';
import { BookmarkCheck, Calendar, Clock, Phone, Trash2, X, MessageCircle, AlertCircle } from 'lucide-react';

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MyBookingsDrawer: React.FC<MyBookingsDrawerProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (isOpen) {
      const stored = JSON.parse(localStorage.getItem('lavanya_bookings') || '[]');
      setBookings(stored);
    }
  }, [isOpen]);

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('lavanya_bookings', JSON.stringify(updated));
  };

  const handleSendWhatsApp = (b: Booking) => {
    const text = encodeURIComponent(
      `Hi Lavanya Salon, inquiring about my booking ID *${b.id}* for *${b.serviceName}* on ${b.date} at ${b.timeSlot}.`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-white dark:bg-[#121214] max-w-md w-full h-full p-6 shadow-2xl flex flex-col justify-between border-l border-amber-500/20 text-neutral-900 dark:text-white overflow-y-auto"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-6 h-6 text-amber-500" />
              <div>
                <h3 className="font-serif-luxury text-xl font-bold">My Appointments</h3>
                <p className="text-xs text-neutral-400">Lavanya Unisex Salon Jaipur</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {bookings.length === 0 ? (
            <div className="py-20 text-center space-y-3 text-neutral-400">
              <AlertCircle className="w-12 h-12 text-amber-500/40 mx-auto" />
              <p className="text-sm">No active appointments found.</p>
              <p className="text-xs text-neutral-500">
                Book a treatment above to view your reservation details here anytime.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#18181c] border border-amber-500/20 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                      ID: {b.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {b.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif-luxury font-bold text-base text-neutral-900 dark:text-white">
                      {b.serviceName}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Guest: {b.customerName} ({b.phone})
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {b.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {b.timeSlot}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                      Appointment Reserved
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSendWhatsApp(b)}
                        className="p-2 rounded-xl bg-emerald-600/20 text-emerald-500 hover:bg-emerald-600/30 text-xs font-semibold flex items-center gap-1"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat</span>
                      </button>

                      <button
                        onClick={() => handleCancelBooking(b.id)}
                        className="p-2 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"
                        title="Cancel Booking"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-[11px] text-neutral-400">
            Need changes to an appointment? Call us directly at <span className="text-amber-500 font-bold">+91 98298 31434</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
