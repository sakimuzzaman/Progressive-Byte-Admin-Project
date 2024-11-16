import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ExpenseChart = () => {
  // Data for the line chart
  const data = {
    labels: ['', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Expense',
        data: [150000, 160000, 170000, 160000, 175000, 180000, 190000, 200000, 210000],
        fill: true,
        borderColor: '#4F46E5',
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(79, 70, 229, 0.3)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  // Options for the line chart
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Expense: $${context.raw}`,
        },
      },
    },
    scales: {
      x: { display: false },
      y: {
        ticks: { callback: (value) => `$${value}` },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white max-w-5xl mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-600">Total Expense</p>
          <p className="text-green-500 text-sm">+4.25%</p>
          <h2 className="text-3xl font-bold text-gray-800">$8987.00</h2>
        </div>
        <div className="text-gray-600">Monthly ▾</div>
      </div>

      {/* Chart */}
      <div>
        <Line data={data} options={options} height={100} />
      </div>
    </div>
  );
};

export default ExpenseChart;
