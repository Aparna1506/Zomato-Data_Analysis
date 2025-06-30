import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle } from 'lucide-react';
import { getPriceCategoryLabel } from '../data/mockData';

const PredictiveModel: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number>(2);
  const [votes, setVotes] = useState<number>(100);
  const [prediction, setPrediction] = useState<number | null>(null);

  // Simple linear regression model simulation
  // Based on the pattern: Rating = base + (priceRange * coefficient) + (votes * coefficient)
  const predictRating = () => {
    // Simulated model coefficients (would come from actual ML model)
    const baseRating = 2.5;
    const priceCoeff = 0.3;
    const voteCoeff = 0.0008;
    
    const predictedRating = Math.max(1, Math.min(5, 
      baseRating + (priceRange * priceCoeff) + (votes * voteCoeff) + (Math.random() * 0.4 - 0.2)
    ));
    
    setPrediction(Math.round(predictedRating * 10) / 10);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Calculator className="mr-3 text-purple-500" size={28} />
        Rating Prediction Model
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value={1}>1 - Cheap (₹0-300)</option>
              <option value={2}>2 - Affordable (₹300-600)</option>
              <option value={3}>3 - Expensive (₹600-1200)</option>
              <option value={4}>4 - Luxury (₹1200+)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Number of Votes
            </label>
            <input
              type="number"
              value={votes}
              onChange={(e) => setVotes(Number(e.target.value))}
              min="1"
              max="10000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={predictRating}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Predict Rating
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-purple-500" size={20} />
            Prediction Results
          </h4>
          
          {prediction !== null ? (
            <div className="space-y-4">
              <div className="text-center">
                <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-purple-600">{prediction}</span>
                </div>
                <p className="mt-2 text-gray-600">Predicted Rating</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-2">Model Inputs:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Price Range: {getPriceCategoryLabel(priceRange)}</li>
                  <li>• Number of Votes: {votes.toLocaleString()}</li>
                </ul>
              </div>
              
              <div className="flex items-start space-x-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <p>This is a simplified model for demonstration. Real-world predictions would require more features and sophisticated algorithms.</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Calculator size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Enter values and click "Predict Rating" to see the model's prediction.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictiveModel;