import React, { useEffect, useState } from 'react';
import { BarChart3, Star, MapPin, TrendingUp, Users, DollarSign, Award, Utensils } from 'lucide-react';

import Header from './components/Header';
import StatsCard from './components/StatsCard';
import RatingDistributionChart from './components/charts/RatingDistributionChart';
import CuisineChart from './components/charts/CuisineChart';
import PriceVsRatingChart from './components/charts/PriceVsRatingChart';
import CityChart from './components/charts/CityChart';
import TopRestaurants from './components/TopRestaurants';
import PredictiveModel from './components/PredictiveModel';

import { generateAnalyticsData, AnalyticsData } from './data/mockData';

function App() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setAnalyticsData(generateAnalyticsData());
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading Analytics Data...</p>
          <p className="text-gray-500 mt-2">Processing restaurant insights</p>
        </div>
      </div>
    );
  }

  if (!analyticsData) return null;

  const totalRestaurants = analyticsData.restaurants.length;
  const avgRating = Math.round((analyticsData.restaurants.reduce((sum, r) => sum + r.aggregateRating, 0) / totalRestaurants) * 10) / 10;
  const totalVotes = analyticsData.restaurants.reduce((sum, r) => sum + r.votes, 0);
  const uniqueCities = new Set(analyticsData.restaurants.map(r => r.city)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Stats Overview */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Restaurants"
            value={totalRestaurants.toLocaleString()}
            subtitle="Across India"
            icon={Utensils}
            trend={{ value: 12, isPositive: true }}
            color="blue"
          />
          <StatsCard
            title="Average Rating"
            value={`${avgRating}/5.0`}
            subtitle="Overall quality"
            icon={Star}
            trend={{ value: 5, isPositive: true }}
            color="green"
          />
          <StatsCard
            title="Total Votes"
            value={totalVotes.toLocaleString()}
            subtitle="Customer reviews"
            icon={Users}
            trend={{ value: 18, isPositive: true }}
            color="orange"
          />
          <StatsCard
            title="Cities Covered"
            value={uniqueCities}
            subtitle="Major metropolitan areas"
            icon={MapPin}
            trend={{ value: 25, isPositive: true }}
            color="purple"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RatingDistributionChart data={analyticsData.ratingDistribution} />
          <CuisineChart data={analyticsData.cuisineDistribution} />
          <PriceVsRatingChart data={analyticsData.priceVsRating} />
          <CityChart data={analyticsData.cityDistribution} />
        </div>

        {/* Top Restaurants and Predictive Model */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <TopRestaurants restaurants={analyticsData.topRated} />
          <PredictiveModel />
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Zomato Analytics Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Professional data analytics platform showcasing restaurant industry insights
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <BarChart3 size={16} />
                <span>Interactive Visualizations</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp size={16} />
                <span>Predictive Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} />
                <span>Production Ready</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Built with React, TypeScript, Chart.js, and Tailwind CSS | 
                <span className="ml-2 font-semibold">Ready for Production Deployment</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;