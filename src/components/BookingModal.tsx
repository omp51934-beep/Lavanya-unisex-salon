import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, EXPERTS, SALON_INFO } from '../data/salonData';
import { Booking } from '../types';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  X,
  CheckCircle2,
  MessageCircle,
  Copy,
  Scissors
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedStylistId?: string;
  onBookingComplete?: (booking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedStylistId,
  onBookingComplete,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || SERVICES_DATA[0].id);
  const [stylistId, setStylistId] = useState(preselectedStylistId || '');
  const [date, setDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (preselectedServiceId) setServiceId(preselectedServiceId);
    if (preselectedStylistId) setStylistId(preselectedStylistId);
  }, [preselectedServiceId, preselectedStylistId]);

  const selectedServiceObj =
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const selectedStylistObj = EXPERTS.find((e) => e.id === stylistId);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: Booking = {
        id: `LAV-${Math.floor(100000 + Math.random() * 900000)}`,
        customerName,
        phone,
        email,
        serviceId: selectedServiceObj.id,
        serviceName: selectedServiceObj.name,
        stylistId: selectedStylistObj?.id,
        stylistName: selectedStylistObj?.name || 'Any Available Senior Stylist',
        date,
        timeSlot,
        notes,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        totalPrice: selectedServiceObj.price,
      };

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('lavanya_bookings') || '[]');
      localStorage.setItem('lavanya_bookings', JSON.stringify([newBooking, ...existing]));

      setConfirmedBooking(newBooking);
      setIsSubmitting(false);
      if (onBookingComplete) onBookingComplete(newBooking);
    }, 1000);
  };

  const handleSendWhatsApp = (booking: Booking) => {
    const text = encodeURIComponent(
      `✨ *NEW APPOINTMENT RESERVATION - LAVANYA SALON* ✨\n\nBooking ID: *${booking.id}*\nName: ${booking.customerName}\nPhone: ${booking.phone}\nService: *${booking.serviceName}*\nStylist: ${booking.stylistName}\nDate: ${booking.date}\nTime Slot: ${booking.timeSlot}\nNotes: ${booking.notes || 'None'}\n\nPlease confirm my slot!`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-[#121214] max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative my-8 text-neutral-900 dark:text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-amber-500"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          /* Receipt / Confirmation Screen */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                Reservation Confirmed
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold">
                Appointment Booked!
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Booking Reference ID: <span className="font-mono font-bold text-amber-500">{confirmedBooking.id}</span>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#18181c] border border-neutral-200 dark:border-neutral-800 text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="text-neutral-400">Guest Name:</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedBooking.customerName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="text-neutral-400">Service:</span>
                <span className="font-semibold text-amber-500">{confirmedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="text-neutral-400">Date & Slot:</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedBooking.date} @ {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="text-neutral-400">Assigned Stylist:</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedBooking.stylistName}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-400 font-bold">Booking Option:</span>
                <span className="font-semibold text-emerald-500 uppercase tracking-wider">Enquiry & Appointment Reserved</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleSendWhatsApp(confirmedBooking)}
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Booking Slip to Salon via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  onClose();
                }}
                className="w-full py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:border-amber-500"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold">
                  Book VIP Appointment
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Lavanya Unisex Salon • Vaishali Nagar, Jaipur
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                    />
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+91 98298 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                    />
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold mb-1">Select Treatment *</label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Stylist Preference */}
              <div>
                <label className="block text-xs font-semibold mb-1">Stylist Preference (Optional)</label>
                <select
                  value={stylistId}
                  onChange={(e) => setStylistId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                >
                  <option value="">Any Available Senior Stylist</option>
                  {EXPERTS.map((exp) => (
                    <option key={exp.id} value={exp.id}>
                      {exp.name} ({exp.role.split('&')[0]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold mb-1">Special Notes / Requests</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive skin, bridal hair length preference..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Confirming Slot...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Appointment Reservation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
