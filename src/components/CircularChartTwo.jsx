
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChartTwo = () => {
  const data = {
    // labels: ["Maintanance Scal", "Product Scale"],
    datasets: [
      {
        data: [65, 35], // Values for each section of the ring
        backgroundColor: ["#5B93FF", "#FFD66B"],  
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        borderWidth: 5,
        cutout: "70%", // Adjusts the inner radius to create the ring effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        // position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (

        <div className="mt-16"> 
          <Doughnut data={data} options={options} />
        </div>
);
};

export default CircularChartTwo;