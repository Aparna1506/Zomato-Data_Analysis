export interface Restaurant {
  id: number;
  name: string;
  city: string;
  cuisines: string;
  aggregateRating: number;
  priceRange: number;
  votes: number;
  latitude?: number;
  longitude?: number;
}

export interface AnalyticsData {
  restaurants: Restaurant[];
  topRated: Restaurant[];
  cuisineDistribution: { cuisine: string; count: number }[];
  cityDistribution: { city: string; count: number }[];
  ratingDistribution: { rating: number; count: number }[];
  priceVsRating: { priceRange: number; avgRating: number }[];
}

// Mock data generator
const cities = ['New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];
const cuisines = ['North Indian', 'Chinese', 'Fast Food', 'South Indian', 'Italian', 'Continental', 'Bakery', 'Desserts', 'Beverages', 'Biryani'];
const restaurantNames = [
  'The Great Kabab Factory', 'Barbeque Nation', 'Mainland China', 'Pizza Hut', 'KFC',
  'Dominos Pizza', 'Cafe Coffee Day', 'Starbucks', 'Paradise Biryani', 'Haldirams',
  'Saravana Bhavan', 'Udupi Palace', 'Wow! Momo', 'Subway', 'McDonald\'s',
  'Burger King', 'Taco Bell', 'Social', 'Hard Rock Cafe', 'TGI Friday\'s'
];

const generateMockRestaurants = (count: number): Restaurant[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: restaurantNames[Math.floor(Math.random() * restaurantNames.length)] + ` ${i + 1}`,
    city: cities[Math.floor(Math.random() * cities.length)],
    cuisines: cuisines.slice(0, Math.floor(Math.random() * 3) + 1).join(', '),
    aggregateRating: Math.round((Math.random() * 4 + 1) * 10) / 10,
    priceRange: Math.floor(Math.random() * 4) + 1,
    votes: Math.floor(Math.random() * 1000) + 10,
    latitude: 28.6139 + (Math.random() - 0.5) * 0.5,
    longitude: 77.2090 + (Math.random() - 0.5) * 0.5,
  }));
};

export const generateAnalyticsData = (): AnalyticsData => {
  const restaurants = generateMockRestaurants(1500);
  
  // Top rated restaurants
  const topRated = [...restaurants]
    .sort((a, b) => b.aggregateRating - a.aggregateRating)
    .slice(0, 10);

  // Cuisine distribution
  const cuisineMap = new Map<string, number>();
  restaurants.forEach(restaurant => {
    restaurant.cuisines.split(', ').forEach(cuisine => {
      cuisineMap.set(cuisine, (cuisineMap.get(cuisine) || 0) + 1);
    });
  });
  const cuisineDistribution = Array.from(cuisineMap.entries())
    .map(([cuisine, count]) => ({ cuisine, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // City distribution
  const cityMap = new Map<string, number>();
  restaurants.forEach(restaurant => {
    cityMap.set(restaurant.city, (cityMap.get(restaurant.city) || 0) + 1);
  });
  const cityDistribution = Array.from(cityMap.entries())
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Rating distribution
  const ratingMap = new Map<number, number>();
  restaurants.forEach(restaurant => {
    const rating = Math.floor(restaurant.aggregateRating);
    ratingMap.set(rating, (ratingMap.get(rating) || 0) + 1);
  });
  const ratingDistribution = Array.from(ratingMap.entries())
    .map(([rating, count]) => ({ rating, count }))
    .sort((a, b) => a.rating - b.rating);

  // Price vs Rating analysis
  const priceGroups = new Map<number, { total: number; count: number }>();
  restaurants.forEach(restaurant => {
    const current = priceGroups.get(restaurant.priceRange) || { total: 0, count: 0 };
    priceGroups.set(restaurant.priceRange, {
      total: current.total + restaurant.aggregateRating,
      count: current.count + 1
    });
  });
  const priceVsRating = Array.from(priceGroups.entries())
    .map(([priceRange, data]) => ({ 
      priceRange, 
      avgRating: Math.round((data.total / data.count) * 10) / 10 
    }))
    .sort((a, b) => a.priceRange - b.priceRange);

  return {
    restaurants,
    topRated,
    cuisineDistribution,
    cityDistribution,
    ratingDistribution,
    priceVsRating
  };
};

export const getPriceCategoryLabel = (priceRange: number): string => {
  const categories = { 1: 'Cheap', 2: 'Affordable', 3: 'Expensive', 4: 'Luxury' };
  return categories[priceRange as keyof typeof categories] || 'Unknown';
};