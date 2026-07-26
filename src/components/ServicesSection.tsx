import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';
import {
  Scissors,
  Sparkles,
  Droplets,
  Zap,
  Flame,
  Palette,
  Sun,
  Crown,
  Smile,
  HeartHandshake,
  Star,
  Gem,
  Wind,
  Search,
  Check,
  Calendar,
  Clock,
  Info,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair-cut', label: 'Hair Cut & Styling' },
    { id: 'hair-spa', label: 'Hair Spa' },
    { id: 'treatments', label: 'Keratin & Smoothening' },
    { id: 'hair-color', label: 'Hair Color' },
    { id: 'skin-facial', label: 'Facial & Cleanup' },
    { id: 'makeup', label: 'Bridal & Party Makeup' },
    { id: 'grooming', label: 'Nail Art & Waxing' },
    { id: 'massage', label: 'Head & Spa Massage' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-amber-500" />;
      case 'Crown': return <Crown className="w-5 h-5 text-amber-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-amber-500" />;
      case 'Gem': return <Gem className="w-5 h-5 text-amber-500" />;
      case 'Wind': return <Wind className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0A0A0B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 font-manrope">
            Menu of Distinction
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Signature Beauty & <span className="text-gold-gradient italic">Salon Services</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Crafted with precision, luxury products, and personalized care for both men and women in Jaipur.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <input
            type="text"
            placeholder="Search services (e.g., Keratin, Hair Cut, Facial, Bridal)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:border-amber-500 focus:outline-none text-neutral-900 dark:text-white shadow-inner"
          />
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-xs text-neutral-400 hover:text-neutral-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === cat.id
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-50 dark:bg-[#121214] rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image & Icon Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Icon Emblem */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-500/30">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Popular Tag */}
                  {service.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      POPULAR
                    </span>
                  )}

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-amber-200 font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-medium"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Price & Book */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-200/60 dark:border-neutral-800 mt-4">
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 block font-manrope">Service Option</span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold uppercase tracking-wider">
                    <span>Enquiry & Booking</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="p-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                    title="View Details"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2.5 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire & Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-neutral-500">
            No services matched your query. Try searching for "Hair Cut", "Keratin", or "Facial".
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-[#141416] max-w-lg w-full rounded-3xl overflow-hidden border border-amber-500/30 p-6 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-amber-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={selectedServiceModal.image}
                  alt={selectedServiceModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif-luxury text-2xl font-bold">{selectedServiceModal.name}</h3>
                  <p className="text-xs text-amber-300">Duration: {selectedServiceModal.duration}</p>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedServiceModal.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedServiceModal.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <Check className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div>
                  <span className="text-[10px] text-neutral-400 block uppercase font-manrope">Option</span>
                  <span className="font-serif-luxury text-base font-bold text-amber-500">
                    Enquiry & Appointment
                  </span>
                </div>

                <button
                  onClick={() => {
                    const sId = selectedServiceModal.id;
                    setSelectedServiceModal(null);
                    onOpenBooking(sId);
                  }}
                  className="px-6 py-3 rounded-full bg-gold-gradient text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
