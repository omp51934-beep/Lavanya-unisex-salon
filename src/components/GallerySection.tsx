import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data/salonData';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const categories = ['All', 'Hair', 'Makeup', 'Skin', 'Nails', 'Interiors'];

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const activeImageObj = GALLERY_IMAGES.find((i) => i.id === activeLightbox);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#0A0A0B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
            Visual Portfolio
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Our Salon <span className="text-gold-gradient italic">Gallery</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Take a visual tour through our luxury Vaishali Nagar suites and artistic client reveals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveLightbox(img.id)}
              className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <span className="self-end p-2 rounded-full bg-black/60 backdrop-blur-md text-amber-400">
                  <Maximize2 className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    {img.category}
                  </span>
                  <h4 className="font-serif-luxury text-lg font-bold text-white">{img.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageObj && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImageObj.url}
                alt={activeImageObj.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/70 text-white hover:text-amber-400"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                <span className="text-xs font-bold uppercase text-amber-400">{activeImageObj.category}</span>
                <h3 className="font-serif-luxury text-2xl font-bold">{activeImageObj.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
