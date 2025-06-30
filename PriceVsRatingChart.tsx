import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getPriceCategoryLabel } from '../../data/mockData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceVsRatingChartProps {
  data: { priceRange: number; avgRating: number }[];
}

const PriceVsRatingChart: React.FC<PriceVsRatingChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => getPriceCategoryLabel(item.priceRange)),
    datasets: [
      {
        label: 'Average Rating',
        data: data.map(item => item.avgRating),
        borderColor: 'rgba(234, 88, 12, 1)',
        backgroundColor: 'rgba(234, 88, 12, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(234, 88, 12, 1)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 10,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            weight: 'bold' as const,
          },
        },
      },
      title: {
        display: true,
        text: 'Price Range vs Average Rating Correlation',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
        padding: 20,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(234, 88, 12, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: 'bold' as const,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PriceVsRatingChart;