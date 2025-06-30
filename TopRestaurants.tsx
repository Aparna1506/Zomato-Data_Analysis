import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';
import { Restaurant, getPriceCategoryLabel } from '../data/mockData';

interface TopRestaurantsProps {
  restaurants: Restaurant[];
}

const TopRestaurants: React.FC<TopRestaurantsProps> = ({ restaurants }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Star className="mr-3 text-yellow-500" size={28} />
        Top Rated Restaurants
      </h3>
      <div className="space-y-4">
        {restaurants.map((restaurant, index) => (
          <div 
            key={restaurant.id} 
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{restaurant.name}</h4>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm">{restaurant.city}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={14} className="mr-1" />
                    <span className="text-sm">{getPriceCategoryLabel(restaurant.priceRange)}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{restaurant.cuisines}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                <Star size={16} className="mr-1 fill-current" />
                <span className="font-bold text-lg">{restaurant.aggregateRating}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{restaurant.votes} votes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;