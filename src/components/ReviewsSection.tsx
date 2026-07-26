import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS_DATA, SALON_INFO } from '../data/salonData';
import { Review } from '../types';
import { Star, CheckCircle, MessageSquarePlus, X, Send, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [author, setAuthor] = useState('');
  const [service, setService] = useState('Keratin Smoothening');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author,
      rating,
      date: 'Just now',
      service,
      comment,
      verified: true,
      avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&q=80&w=200`
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setAuthor('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-[#0A0A0B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
              Google Search Credibility
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
              Loved By <span className="text-gold-gradient italic">359+ Happy Clients</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Real experiences from Jaipur residents & brides who trust Lavanya Unisex Salon.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-6 bg-neutral-50 dark:bg-[#141416] p-5 rounded-3xl border border-amber-500/20 shadow-lg">
            <div className="text-center">
              <div className="font-serif-luxury text-4xl font-bold text-amber-500">
                {SALON_INFO.googleRating}
              </div>
              <div className="flex text-amber-400 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 block font-semibold">
                359+ Google Reviews
              </span>
            </div>

            <div className="h-12 w-[1px] bg-neutral-200 dark:border-neutral-800" />

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-3 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-[#121214] p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 shadow-md flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
            >
              <div className="space-y-3">
                {/* User Info Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-bold text-amber-500 text-sm overflow-hidden">
                      {rev.avatar ? (
                        <img src={rev.avatar} alt={rev.author} className="w-full h-full object-cover" />
                      ) : (
                        rev.author.charAt(0)
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-sm text-neutral-900 dark:text-white">
                        <span>{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 fill-amber-500/10" />
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-400">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-semibold">
                  Service: {rev.service}
                </div>

                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between">
                <span>Verified Client</span>
                <span className="text-amber-500 font-bold">Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-[#141416] max-w-md w-full rounded-3xl p-6 border border-amber-500/30 shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => setShowReviewModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1">
                <h3 className="font-serif-luxury text-2xl font-bold text-neutral-900 dark:text-white">
                  Share Your Experience
                </h3>
                <p className="text-xs text-neutral-500">Your feedback helps us maintain luxury standards.</p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <Sparkles className="w-12 h-12 text-amber-500 mx-auto animate-bounce" />
                  <h4 className="font-serif-luxury text-xl font-bold text-neutral-900 dark:text-white">
                    Thank You!
                  </h4>
                  <p className="text-xs text-neutral-400">Your review has been added.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Service Received</label>
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-2 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400' : 'text-neutral-400'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Your Review</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the atmosphere, staff behavior, and results..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
