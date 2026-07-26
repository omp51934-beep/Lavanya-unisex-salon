import { ServiceItem, Review, Stylist, Offer, Transformation, FAQItem, Article } from '../types';

export const SALON_INFO = {
  name: 'Lavanya Unisex Salon',
  tagline: 'Premium Unisex Salon & Beauty Studio',
  headline: 'Elevate Your Style. Unleash Your Glow.',
  subheadline: 'Jaipur’s premier luxury destination for bespoke hair transformations, restorative skin therapies, and high-fashion bridal artistry.',
  address: '09-10 Deepak Vatika, Lalarpura, Gandhi Path Road, Vaishali Nagar, Jaipur, Rajasthan 302021',
  phone: '+91 98298 31434',
  rawPhone: '+919829831434',
  whatsappNumber: '919829831434',
  instagram: 'https://instagram.com/lavanyaunisexsalon',
  googleRating: 4.7,
  totalReviews: 359,
  openingHours: [
    { day: 'Monday - Sunday', hours: '09:00 AM - 09:00 PM' }
  ],
  features: [
    '100% Sanitized & Hygienic Environment',
    'Certified Master Hair Stylists & Makeup Artists',
    'L’Oréal Professionnel & Schwarzkopf Premium Products',
    'Private Bridal & VIP Consultation Suites',
    'Ample Valet Parking Available'
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.125!2d75.7410!3d26.8912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4e672000000%3A0x123456789abcdef!2sDeepak%20Vatika%2C%20Gandhi%20Path%20Rd%2C%20Vaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const SERVICES_DATA: ServiceItem[] = [
  // Hair Cuts & Styling
  {
    id: 's-haircut-men',
    name: 'Executive Cut & Beard Architecture',
    category: 'hair-cut',
    description: 'Precision haircut, head massage, hair wash, hot towel finish, and custom beard sculpting by Senior Stylists.',
    duration: '45 mins',
    price: 499,
    originalPrice: 650,
    popular: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    iconName: 'Scissors',
    benefits: ['Scalp Detox Wash', 'Styling Consultation', 'Hot Towel Treatment', 'Matte Styling Clay Finish']
  },
  {
    id: 's-haircut-women',
    name: 'Couture Haircut & Blowdry Style',
    category: 'hair-cut',
    description: 'Personalized face-framing haircut with deep conditioning wash, signature bouncy blow-dry, and styling.',
    duration: '60 mins',
    price: 899,
    originalPrice: 1200,
    popular: true,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkles',
    benefits: ['Face Structure Analysis', 'Keratin-infused Wash', 'Glaze Shine Spray', 'Thermal Heat Protection']
  },

  // Hair Spa & Treatments
  {
    id: 's-hair-spa-loreal',
    name: 'L’Oréal Mythic Oil Luxury Hair Spa',
    category: 'hair-spa',
    description: 'Deep nourishing therapy with argan oil & avocado extracts. Restores natural luster and combats frizzy hair.',
    duration: '60 mins',
    price: 1299,
    originalPrice: 1800,
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    iconName: 'Droplets',
    benefits: ['Intense Fiber Repair', 'Aromatherapy Head Massage', 'Micro-steam Activation', 'Silk Soft Smoothness']
  },
  {
    id: 's-keratin-treatment',
    name: 'Brazilian Keratin Smoothening',
    category: 'treatments',
    description: 'Ultra-smoothing formal-free keratin therapy that repairs broken bonds and keeps hair frizz-free for 4-6 months.',
    duration: '150 mins',
    price: 3999,
    originalPrice: 5500,
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    iconName: 'Zap',
    benefits: ['0% Frizz Protection', '4-6 Months Longevity', 'Rain & Humidity Defense', 'Glass Shine Reflectivity']
  },
  {
    id: 's-hair-smoothening',
    name: 'Pro-Keratin Smoothening / Straightening',
    category: 'treatments',
    description: 'Permanent sleek hair straightening treatment using Schwarzkopf Professional formula for pin-straight elegance.',
    duration: '180 mins',
    price: 4499,
    originalPrice: 6000,
    popular: false,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    iconName: 'Flame',
    benefits: ['Permanent Straight Locks', 'Internal Bond Strength', 'Silky Touch Finish', 'Includes Post-Wash Styling']
  },

  // Hair Color
  {
    id: 's-balayage-highlight',
    name: 'French Balayage & Ombré Highlights',
    category: 'hair-color',
    description: 'Custom hand-painted French balayage or highlights using Smartbond damage-prevention technology.',
    duration: '120 mins',
    price: 3499,
    originalPrice: 4800,
    popular: true,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800',
    iconName: 'Palette',
    benefits: ['Smartbond Damage Shield', 'Seamless Color Blend', 'Ammonia-Free Formula', 'Gloss Toner Wash']
  },
  {
    id: 's-global-color',
    name: 'Global Hair Color (Ammonia Free)',
    category: 'hair-color',
    description: 'Rich, uniform color transformation from roots to tips with 100% gray coverage and high gloss radiance.',
    duration: '90 mins',
    price: 2499,
    originalPrice: 3200,
    popular: false,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sun',
    benefits: ['100% Gray Coverage', 'Zero Ammonia Odor', 'Scalp Care Serum', 'UV Color Lock Seal']
  },

  // Skin & Facial
  {
    id: 's-facial-o3-plus',
    name: 'O3+ Bridal D-Tan & Power Glow Facial',
    category: 'skin-facial',
    description: 'Dermatologically formulated whitening & anti-tan facial that leaves your skin instantly luminous and radiant.',
    duration: '75 mins',
    price: 1999,
    originalPrice: 2800,
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    iconName: 'SunMedium',
    benefits: ['Instant Tan Removal', 'Hyaluronic Hydration', 'Lymphatic Face Massage', 'Peel-Off Rubber Mask']
  },
  {
    id: 's-gold-radiance-facial',
    name: '24K Pure Gold Radiance Facial',
    category: 'skin-facial',
    description: 'Luxury gold flake collagen infusion to combat fine lines, boost elasticity, and impart a regal glow.',
    duration: '90 mins',
    price: 2999,
    originalPrice: 4000,
    popular: true,
    image: 'https://images.unsplash.com/photo-1512290900673-7002470659b4?auto=format&fit=crop&q=80&w=800',
    iconName: 'Crown',
    benefits: ['Cellular Regeneration', '24K Gold Flake Therapy', 'Anti-Aging Firming', 'Under-eye Brightening']
  },

  // Cleanup
  {
    id: 's-skin-cleanup',
    name: 'Hydra-Infusion Deep Cleanup',
    category: 'skin-facial',
    description: 'Pore extraction, ultrasonic exfoliation, anti-bacterial ozone steam, and clarifying clay mask.',
    duration: '45 mins',
    price: 899,
    originalPrice: 1200,
    popular: false,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    iconName: 'Smile',
    benefits: ['Pore Declogging', 'Blackhead Extraction', 'Ozone Steam Therapy', 'Ice Globe Cooling']
  },

  // Makeup
  {
    id: 's-bridal-makeup',
    name: 'HD Royal Bridal Makeup & Styling',
    category: 'makeup',
    description: 'Full high-definition bridal makeover with airbrush finish, luxury lash extensions, hair draping, and jewelry setting.',
    duration: '180 mins',
    price: 14999,
    originalPrice: 20000,
    popular: true,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    iconName: 'HeartHandshake',
    benefits: ['24-Hr Water Resistant Finish', 'Includes Pre-Bridal Trial', 'Private VIP Suite Experience', 'Dupatta & Jewelry Draping']
  },
  {
    id: 's-party-makeup',
    name: 'Celebrity Glam Party Makeup',
    category: 'makeup',
    description: 'Ultra-refined soft glam or bold party makeup tailored for sangeet, cocktail parties, and grand celebrations.',
    duration: '90 mins',
    price: 3499,
    originalPrice: 4500,
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337094846-8a83811221f6?auto=format&fit=crop&q=80&w=800',
    iconName: 'Star',
    benefits: ['M.A.C & Charlotte Tilbury Products', 'Eyelash Extensions', 'Contour & Glow', 'Hair Bun / Curls']
  },

  // Nails & Grooming
  {
    id: 's-nail-art',
    name: 'Gel Extensions & Custom Nail Art',
    category: 'grooming',
    description: 'Long-lasting acrylic or gel extension with custom ombre, chrome, glitter, or French tip designer art.',
    duration: '75 mins',
    price: 1499,
    originalPrice: 2200,
    popular: true,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    iconName: 'Gem',
    benefits: ['Chip-Free 4+ Weeks', 'Non-Damaging Removal', 'Custom Rhinestone Art', 'Cuticle Oil Hydration']
  },
  {
    id: 's-threading-waxing',
    name: 'RICA Brazilian Waxing & Threading Package',
    category: 'grooming',
    description: 'Painless liposoluble RICA waxing for smooth skin without redness or irritation.',
    duration: '60 mins',
    price: 1199,
    originalPrice: 1600,
    popular: false,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    iconName: 'Scissors',
    benefits: ['100% Colophony Free Wax', 'Soothes Sensitive Skin', 'Reduces Hair Ingrowth', 'Pre & Post Wax Lotions']
  },

  // Massage & Relaxation
  {
    id: 's-head-massage',
    name: 'Aroma Scalp & Shoulder Stress Release Massage',
    category: 'massage',
    description: 'Therapeutic warm herbal oil massage targeting head, neck, and shoulders for deep mental relaxation.',
    duration: '45 mins',
    price: 699,
    originalPrice: 999,
    popular: false,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    iconName: 'Wind',
    benefits: ['Stress & Migraine Relief', 'Warm Essential Oils', 'Stimulates Hair Growth', 'Pressure Point Therapy']
  }
];

export const SPECIAL_OFFERS: Offer[] = [
  {
    id: 'offer-keratin-combo',
    title: 'Keratin Gloss & Cut Transformation',
    subtitle: 'Get 0% Frizz & Glass Shine Hair',
    discount: '30% OFF',
    originalPrice: 6150,
    offerPrice: 4299,
    validTill: 'Limited Seats This Week',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    includedServices: ['Brazilian Keratin Treatment', 'Style Haircut by Senior Stylist', 'Scalp Detox Wash', 'Post-Care Serum Bottle'],
    badge: 'MOST POPULAR'
  },
  {
    id: 'offer-bridal-glow',
    title: 'Royal Pre-Bridal Pamper Package',
    subtitle: 'The Ultimate Glow for Your Big Day',
    discount: '35% OFF',
    originalPrice: 15000,
    offerPrice: 9750,
    validTill: 'Valid on Bookings Done Today',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    includedServices: ['O3+ Power Glow Facial', 'Full Body RICA Waxing', 'Gel Nail Extensions', 'L’Oréal Hair Spa & Trim', 'Pedicure & Manicure'],
    badge: 'LUXURY CHOICE'
  },
  {
    id: 'offer-men-grooming',
    title: 'Gentlemen’s Royal Makeover Combo',
    subtitle: 'Hair Cut + Beard + Cleanup + Head Massage',
    discount: '25% OFF',
    originalPrice: 2400,
    offerPrice: 1799,
    validTill: 'Weekend Special',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    includedServices: ['Executive Hair Cut', 'Beard Architecture & Steam', 'De-Tan Face Cleanup', '20-min Aroma Head Massage'],
    badge: 'GROOM SPECIAL'
  }
];

export const EXPERTS: Stylist[] = [
  {
    id: 'exp-1',
    name: 'Vikram Sharma',
    role: 'Creative Director & Senior Hair Artist',
    experience: '12+ Years Experience',
    specialty: 'Balayage, Keratin, & Precision Haircut Architecture',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    rating: 4.9
  },
  {
    id: 'exp-2',
    name: 'Lavanya Verma',
    role: 'Chief Bridal Makeup Artist & Aesthetician',
    experience: '10+ Years Experience',
    specialty: 'HD Airbrush Bridal Makeup & Skin Radiance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    rating: 5.0
  },
  {
    id: 'exp-3',
    name: 'Karan Rathore',
    role: 'Master Stylist & Color Specialist',
    experience: '8+ Years Experience',
    specialty: 'Global Hair Colors, Ombre, & Scalp Therapies',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    rating: 4.8
  },
  {
    id: 'exp-4',
    name: 'Pooja Shekhawat',
    role: 'Skin & Nail Art Specialist',
    experience: '7+ Years Experience',
    specialty: 'O3+ Facials, Gel Extensions & Custom Nail Art',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    rating: 4.9
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'tr-1',
    title: 'Frizzy Dry Hair to Silky Brazilian Keratin',
    category: 'Keratin Treatment',
    description: 'Transformed severely heat-damaged hair into mirror-like smooth, manageable locks.',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Vikram Sharma'
  },
  {
    id: 'tr-2',
    title: 'Caramel Honey French Balayage',
    category: 'Hair Color',
    description: 'Hand-painted dimensional highlights giving warmth and movement without harsh root lines.',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Karan Rathore'
  },
  {
    id: 'tr-3',
    title: 'Dull Skin to Radiant 24K Gold Glow',
    category: 'Skin Therapy',
    description: 'Instant removal of urban sun tan with deep moisture infusion and glass skin finish.',
    beforeImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Pooja Shekhawat'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Neha Agrawal',
    rating: 5,
    date: '2 days ago',
    service: 'Keratin Treatment & Haircut',
    comment: 'Hands down the best salon experience in Vaishali Nagar, Jaipur! Got my keratin smoothening done by Vikram sir. My hair feels like silk and the zero-frizz results are incredible. Staff is super polite and hygiene is top notch!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Rohit Khandelwal',
    rating: 5,
    date: '1 week ago',
    service: 'Executive Cut & Facial',
    comment: 'Lavanya Unisex Salon sets the benchmark for male grooming in Jaipur. The executive hair cut and beard architecture was crisp. Very aesthetic ambience and great coffee too!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Priya Sharma',
    rating: 5,
    date: '2 weeks ago',
    service: 'HD Royal Bridal Makeup',
    comment: 'I booked Lavanya Salon for my bridal makeup in Jaipur and Lavanya ma’am turned me into a royal princess! The makeup stayed intact for 18+ hours without oxidizing. Everyone complimented my look. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Aakanksha Joshi',
    rating: 5,
    date: '3 weeks ago',
    service: 'O3+ Facial & Gel Nail Art',
    comment: 'The facial gave my skin an instant luminous glow. Pooja did my nail art with such precision! 09-10 Deepak Vatika Gandhi Path location is super convenient with ample parking space.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Siddharth Rathore',
    rating: 5,
    date: '1 month ago',
    service: 'Global Color & Hair Spa',
    comment: 'Extremely professional staff! They suggest what actually suits your face and skin tone rather than selling unnecessary expensive packages. Will definitely visit again.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];

export const GALLERY_IMAGES = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200', category: 'Interiors', title: 'Luxury Styling Stations' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200', category: 'Hair', title: 'Keratin Gloss Finish' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200', category: 'Makeup', title: 'Royal Bridal Artistry' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1200', category: 'Nails', title: 'Custom Chrome Nail Art' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200', category: 'Hair', title: 'French Caramel Balayage' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200', category: 'Skin', title: '24K Gold Facial Treatment' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200', category: 'Grooming', title: 'Gentlemen Beard Architecture' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200', category: 'Interiors', title: 'Private VIP Pamper Suite' }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Lavanya Unisex Salon located in Jaipur?',
    answer: 'We are conveniently located at 09-10 Deepak Vatika, Lalarpura, Gandhi Path Road, Vaishali Nagar, Jaipur, Rajasthan 302021. We have dedicated valet parking for our clients.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How do I book an appointment?',
    answer: 'You can book directly using our website appointment form, call us at +91 98298 31434, or send us a message on WhatsApp. We recommend booking in advance for weekends and bridal packages.',
    category: 'Booking'
  },
  {
    id: 'faq-3',
    question: 'How long does a Keratin Treatment last?',
    answer: 'Our premium Brazilian Keratin treatment keeps your hair smooth, shiny, and 100% frizz-free for 4 to 6 months, depending on your hair care routine and sulfate-free shampoo usage.',
    category: 'Services'
  },
  {
    id: 'faq-4',
    question: 'Do you offer bridal makeup trials before booking?',
    answer: 'Yes! We provide personalized pre-bridal consultations and paid HD trial sessions where our chief artist Lavanya Verma crafts customized looks to match your outfit and jewelry.',
    category: 'Bridal'
  },
  {
    id: 'faq-5',
    question: 'Which product brands do you use?',
    answer: 'We strictly use certified luxury international brands including L’Oréal Professionnel, Schwarzkopf, O3+, M.A.C, Charlotte Tilbury, Estée Lauder, and RICA for all treatments.',
    category: 'Quality'
  },
  {
    id: 'faq-6',
    question: 'What safety and hygiene measures are followed?',
    answer: 'We strictly follow 100% sterilization of tools between every client, use single-use disposable capes/towels for facial/waxing services, and maintain air purification in all suites.',
    category: 'Safety'
  }
];

export const BLOG_ARTICLES: Article[] = [
  {
    id: 'blog-1',
    title: '10 Essential Keratin Post-Care Tips for Jaipur Weather',
    excerpt: 'How to maintain mirror-like shine and extend your smoothening treatment during hot and humid months in Rajasthan.',
    readTime: '4 min read',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    date: 'July 2026',
    author: 'Vikram Sharma'
  },
  {
    id: 'blog-2',
    title: 'Bridal Makeup Trends 2026: The HD Airbrush Soft Glam',
    excerpt: 'Discover why modern brides in Jaipur are shifting from heavy traditional base to weightless, glass-skin radiant finishes.',
    readTime: '5 min read',
    category: 'Bridal Trends',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    date: 'July 2026',
    author: 'Lavanya Verma'
  },
  {
    id: 'blog-3',
    title: 'Why O3+ D-Tan Facial is Mandatory After Summer Sun Exposure',
    excerpt: 'Say goodbye to uneven skin pigmentation with skin barrier repair, hyaluronic hydration, and botanical peels.',
    readTime: '3 min read',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    date: 'June 2026',
    author: 'Pooja Shekhawat'
  }
];
