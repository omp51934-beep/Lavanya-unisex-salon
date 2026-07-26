import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scissors } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0B] text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            {/* Emblem Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Scissors className="w-10 h-10 text-amber-400 rotate-45" />
              </div>
              <Sparkles className="w-5 h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
            </div>

            <h1 className="font-serif-luxury text-3xl md:text-4xl tracking-widest text-gold-gradient font-bold mb-2">
              LAVANYA
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-manrope">
              Unisex Salon & Beauty Studio
            </p>

            <div className="w-32 h-[2px] bg-neutral-800 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
