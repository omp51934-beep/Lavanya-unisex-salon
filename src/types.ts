export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair-cut' | 'hair-spa' | 'hair-color' | 'treatments' | 'skin-facial' | 'makeup' | 'grooming' | 'massage';
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  image: string;
  iconName: string;
  benefits: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  avatar?: string;
  verified: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  rating: number;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  originalPrice: number;
  offerPrice: number;
  validTill: string;
  image: string;
  includedServices: string[];
  badge?: string;
}

export interface Transformation {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  stylistName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  stylistId?: string;
  stylistName?: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  totalPrice: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  image: string;
  date: string;
  author: string;
}
