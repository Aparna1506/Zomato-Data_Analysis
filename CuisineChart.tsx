import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CuisineChartProps {
  data: { cuisine: string; count: number }[];
}

const CuisineChart: React.FC<CuisineChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.cuisine),
    datasets: [
      {
        label: 'Number of Restaurants',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
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
        text: 'Top 10 Most Popular Cuisines',
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
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            weight: 'bold' as const,
          },
        },
      },
      y: {
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
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CuisineChart;