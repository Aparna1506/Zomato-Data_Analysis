import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: 'blue' | 'green' | 'orange' | 'purple';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon: Icon, trend, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/25',
    green: 'from-emerald-500 to-emerald-600 shadow-emerald-500/25',
    orange: 'from-orange-500 to-orange-600 shadow-orange-500/25',
    purple: 'from-purple-500 to-purple-600 shadow-purple-500/25',
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            {trend && (
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                trend.isPositive 
                  ? 'text-emerald-700 bg-emerald-100' 
                  : 'text-red-700 bg-red-100'
              }`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`bg-gradient-to-br ${colorClasses[color]} p-3 rounded-xl shadow-lg`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;