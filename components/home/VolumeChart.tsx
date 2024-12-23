"use client";
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components (scales, elements, etc.)
ChartJS.register(
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  PointElement, // Register PointElement for scatter/line chart points
  LineElement // Register LineElement for rendering lines
);

const VolumeChart = ({ volume }) => {
  const options = {
    responsive: true, // Ensures chart is responsive
    maintainAspectRatio: false, // Disable aspect ratio to allow the chart to scale freely
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
          margin: "20px",
        },
      },
    },
    scales: {
      A: {
        type: "linear", // Ensure the scale is linear
        position: "left",
        ticks: {
          color: "#FF4C8B",
          callback: function (value) {
            if (parseInt(value) >= 1000) {
              return (
                "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
            } else {
              return "$" + value;
            }
          },
        },
      },
      B: {
        type: "linear", // Ensure the scale is linear
        position: "right",
        ticks: {
          color: "#00AF91",
          max: 1,
          min: 0,
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  const volumeData = {
    datasets: [
      {
        label: "Volume Quote 7d ($)",
        yAxisID: "A",
        data: volume,
        borderColor: "#00AF91",
        backgroundColor: "#00AF91",
        fill: false, // No fill between the line and x-axis
        tension: 0.1, // Smooth the line
      },
    ],
  };

  return (
    <div className="w-full max-w-[500px] lg:max-w-[1000px] h-[400px] border-2 border-[#00AF91] shadow-lg dark:bg-[#2b2b2b] rounded-md p-6 dark:border-0 dark:shadow-[#00AF91]">
      <Line options={options} data={volumeData} />
    </div>
  );
};

export default VolumeChart;
