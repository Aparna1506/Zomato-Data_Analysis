import React from 'react';
import { TrendingUp, BarChart3, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Zomato Analytics</h1>
              <p className="text-blue-100 text-lg mt-1">Restaurant Data Intelligence Dashboard</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <BarChart3 size={18} />
              <span className="text-sm font-medium">Live Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin size={18} />
              <span className="text-sm font-medium">10+ Cities</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;