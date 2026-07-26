import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { Gift, Sparkles, MessageCircle, Copy, Check } from 'lucide-react';

export const GiftVoucher: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [customMsg, setCustomMsg] = useState('Pamper yourself at Jaipur’s finest luxury salon!');
  const [copied, setCopied] = useState(false);

  const voucherCode = `LAVANYA-GIFT-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ *LAVANYA UNISEX SALON LUXURY GIFT VOUCHER* ✨\n\nTo: ${
        recipientName || 'Valued Guest'
      }\nFrom: ${
        senderName || 'A Well Wisher'
      }\nValue: ₹${selectedAmount}\nVoucher Code: *${voucherCode}*\nMessage: "${customMsg}"\n\nRedeem at Lavanya Unisex Salon, 09-10 Deepak Vatika, Vaishali Nagar, Jaipur (+91 98298 31434).`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#FAF9F6] dark:bg-[#0E0E10] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5" />
                <span>Gift of Elegance</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                Luxury Salon <span className="text-gold-gradient italic">Gift Vouchers</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Treat your loved ones to an unforgettably luxurious pampering session at Lavanya Salon Jaipur.
              </p>
            </div>

            {/* Select Amount */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400">Select Voucher Value</label>
              <div className="grid grid-cols-3 gap-3">
                {[1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-3 rounded-2xl font-serif-luxury font-bold text-lg border transition-all ${
                      selectedAmount === amt
                        ? 'bg-amber-500 text-neutral-950 border-amber-500 shadow-md'
                        : 'bg-white dark:bg-[#141416] text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">To (Recipient Name)</label>
                <input
                  type="text"
                  placeholder="e.g. Ananya Sharma"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">From (Your Name)</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Verma"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Personal Greeting</label>
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleShareWhatsApp}
                className="flex-1 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Voucher on WhatsApp</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="px-4 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-amber-500 text-xs font-semibold flex items-center gap-1.5"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Code'}</span>
              </button>
            </div>
          </div>

          {/* Right Live Voucher Card Preview */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#18181b] via-[#09090b] to-[#1c1917] text-white">
              {/* Background Emblem Watermark */}
              <div className="absolute -right-10 -bottom-10 opacity-5 text-amber-500 pointer-events-none">
                <Gift className="w-64 h-64" />
              </div>

              <div className="flex items-center justify-between mb-8 border-b border-amber-500/20 pb-4">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold tracking-widest text-gold-gradient">LAVANYA</h3>
                  <span className="text-[10px] text-amber-300 uppercase tracking-widest block font-manrope">
                    Luxury Unisex Salon & Spa
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 block uppercase">Voucher Value</span>
                  <span className="font-serif-luxury text-3xl font-bold text-amber-400">₹{selectedAmount}</span>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase block">Presented To:</span>
                  <span className="text-lg font-bold font-serif-luxury text-white">
                    {recipientName || 'Valued Guest'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-neutral-400 uppercase block">From:</span>
                  <span className="text-sm font-semibold text-amber-200">
                    {senderName || 'A Well Wisher'}
                  </span>
                </div>

                <p className="text-xs italic text-neutral-300 bg-white/5 p-3 rounded-xl border border-white/10">
                  "{customMsg}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-amber-500/20 text-[11px] text-neutral-400">
                <div>
                  <span className="block text-[9px] uppercase">Code</span>
                  <span className="font-mono font-bold text-amber-400">{voucherCode}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] uppercase">Redeem At</span>
                  <span>Vaishali Nagar, Jaipur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
