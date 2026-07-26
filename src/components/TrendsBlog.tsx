import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_ARTICLES } from '../data/salonData';
import { Article } from '../types';
import { Clock, BookOpen, X, Sparkles } from 'lucide-react';

export const TrendsBlog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-20 bg-[#FAF9F6] dark:bg-[#0E0E10] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
            Beauty Journal
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Latest Hair & Beauty <span className="text-gold-gradient italic">Trends</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Expert hair care tips, seasonal skin advice, and bridal style guides curated for Jaipur weather.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white dark:bg-[#141416] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase border border-amber-500/30">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-neutral-900 dark:text-white leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>By {article.author}</span>
                <span className="flex items-center gap-1 hover:underline">
                  Read Article <BookOpen className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-[#141416] max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500 px-3 py-1 rounded-full bg-amber-500/10 inline-block">
                  {selectedArticle.category}
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                  <span>Author: {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-2xl"
              />

              <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-4 leading-relaxed font-sans">
                <p>{selectedArticle.excerpt}</p>
                <p>
                  Jaipur’s climate places unique demands on hair and skin. Whether preparing for hot summer afternoons or dry winter winds, customized salon treatments paired with sulfate-free home care extend treatment longevity significantly.
                </p>
                <p>
                  At Lavanya Unisex Salon in Vaishali Nagar, our senior specialists analyze scalp moisture, hair porosity, and skin tone before recommending any procedure.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-right">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
