import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Booking } from '../types';
import { ShieldCheck, Calendar, CheckCircle2, Clock, X, Search, Phone, UserCheck } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      const stored = JSON.parse(localStorage.getItem('lavanya_bookings') || '[]');
      setBookings(stored);
    }
  }, [isOpen]);

  const handleUpdateStatus = (id: string, newStatus: Booking['status']) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    localStorage.setItem('lavanya_bookings', JSON.stringify(updated));
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    const matchesSearch =
      b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      b.serviceName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-[#121214] max-w-4xl w-full rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative my-8 text-neutral-900 dark:text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-amber-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-2xl font-bold">Salon Owner Dashboard</h3>
              <p className="text-xs text-neutral-400">Lavanya Unisex Salon • Staff Portal</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-[10px] uppercase text-neutral-400 block font-bold">Total Appointments</span>
              <span className="font-serif-luxury text-lg font-bold text-amber-500">{bookings.length}</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="text-[10px] uppercase text-neutral-400 block font-bold">Portal Status</span>
              <span className="font-serif-luxury text-sm font-bold text-emerald-500">Enquiry Mode</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-6">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Filter by customer, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-3" />
          </div>

          <div className="flex gap-2">
            {['all', 'confirmed', 'completed', 'cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                  filterStatus === st
                    ? 'bg-amber-500 text-neutral-950 font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Bookings Table */}
        <div className="overflow-x-auto max-h-96 overflow-y-auto border border-neutral-200 dark:border-neutral-800 rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100 dark:bg-[#18181c] text-neutral-500 font-bold uppercase sticky top-0">
              <tr>
                <th className="p-3">Ref ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Service</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Stylist</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-neutral-400">
                    No appointments found in database.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-amber-500/5 transition-colors">
                    <td className="p-3 font-mono font-bold text-amber-500">{b.id}</td>
                    <td className="p-3 font-semibold">
                      {b.customerName}
                      <span className="block text-[10px] text-neutral-400 font-normal">{b.phone}</span>
                    </td>
                    <td className="p-3">
                      {b.serviceName}
                      <span className="block text-[10px] text-amber-500 font-semibold">Enquiry / Appointment</span>
                    </td>
                    <td className="p-3">
                      {b.date}
                      <span className="block text-[10px] text-neutral-400">{b.timeSlot}</span>
                    </td>
                    <td className="p-3 text-neutral-300">{b.stylistName || 'Any'}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          b.status === 'confirmed'
                            ? 'bg-amber-500/20 text-amber-500'
                            : b.status === 'completed'
                            ? 'bg-emerald-500/20 text-emerald-500'
                            : 'bg-rose-500/20 text-rose-500'
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-1">
                      {b.status !== 'completed' && (
                        <button
                          onClick={() => handleUpdateStatus(b.id, 'completed')}
                          className="px-2 py-1 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 rounded text-[10px] font-bold"
                        >
                          Complete
                        </button>
                      )}
                      {b.status !== 'cancelled' && (
                        <button
                          onClick={() => handleUpdateStatus(b.id, 'cancelled')}
                          className="px-2 py-1 bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 rounded text-[10px] font-bold"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
