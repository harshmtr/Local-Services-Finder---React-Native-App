// Mock data for service providers
export const MOCK_SERVICES = [
  {
    id: 1,
    name: 'John\'s Electric Solutions',
    category: 'Electrician',
    rating: 4.8,
    reviews: 156,
    distance: 1.2,
    available: true,
    verified: true,
    image: '👨‍💼',
    description: 'Expert electrician with 10 years of experience. Specializes in residential and commercial installations.',
    experience: '10 years',
    price: '$50-$150/hour',
    responseTime: '15-30 mins',
    phone: '+1-555-0101',
  },
  {
    id: 2,
    name: 'Quick Plumbing Pro',
    category: 'Plumber',
    rating: 4.6,
    reviews: 98,
    distance: 2.5,
    available: true,
    verified: true,
    image: '👨‍🔧',
    description: 'Fast, reliable plumbing services for all your needs. Same-day service available.',
    experience: '8 years',
    price: '$60-$200/hour',
    responseTime: '20-40 mins',
    phone: '+1-555-0102',
  },
  {
    id: 3,
    name: 'Sara\'s Math Tutoring',
    category: 'Tutor',
    rating: 4.9,
    reviews: 203,
    distance: 0.8,
    available: true,
    verified: true,
    image: '👩‍🏫',
    description: 'Mathematics tutor specializing in high school and college level. Online or in-person available.',
    experience: '12 years',
    price: '$30-$60/hour',
    responseTime: '1-2 hours',
    phone: '+1-555-0103',
  },
  {
    id: 4,
    name: 'Crystal Clean Services',
    category: 'Cleaner',
    rating: 4.7,
    reviews: 124,
    distance: 3.1,
    available: false,
    verified: true,
    image: '👩‍💼',
    description: 'Professional home and office cleaning. Eco-friendly products used.',
    experience: '6 years',
    price: '$40-$100/service',
    responseTime: '2-4 hours',
    phone: '+1-555-0104',
  },
  {
    id: 5,
    name: 'Elite Electrical Works',
    category: 'Electrician',
    rating: 4.5,
    reviews: 87,
    distance: 1.8,
    available: true,
    verified: false,
    image: '👨‍💼',
    description: 'General electrical maintenance and repairs. 24/7 emergency service available.',
    experience: '5 years',
    price: '$45-$120/hour',
    responseTime: '30-45 mins',
    phone: '+1-555-0105',
  },
  {
    id: 6,
    name: 'Master Plumbers',
    category: 'Plumber',
    rating: 4.4,
    reviews: 112,
    distance: 4.2,
    available: true,
    verified: true,
    image: '👨‍🔧',
    description: 'Leak detection, pipe repair, and installation services.',
    experience: '15 years',
    price: '$70-$250/hour',
    responseTime: '1-2 hours',
    phone: '+1-555-0106',
  },
];

// Filter services by category
export const filterServicesByCategory = (category) => {
  return MOCK_SERVICES.filter(service => service.category === category);
};

// Search services
export const searchServices = (query) => {
  const lowerQuery = query.toLowerCase();
  return MOCK_SERVICES.filter(
    service =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.category.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery)
  );
};