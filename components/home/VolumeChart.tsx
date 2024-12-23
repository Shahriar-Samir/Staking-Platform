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
  PointElement,
  LineElement
);

interface VolumeChartProps {
  volume: number[];
}

const VolumeChart: React.FC<VolumeChartProps> = ({ volume }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#00AF91",
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      A: {
        type: "linear" as const,
        position: "left" as const,
        ticks: {
          color: "#FF4C8B",
          callback: function (value: number | string) {
            const numericValue =
              typeof value === "string" ? parseInt(value) : value;
            if (numericValue >= 1000) {
              return `$${numericValue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            } else {
              return `$${numericValue}`;
            }
          },
        },
      },
      B: {
        type: "linear" as const,
        position: "right" as const,
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
    labels: Array(volume.length).fill(""), // Customize labels as needed
    datasets: [
      {
        label: "Volume Quote 7d ($)",
        yAxisID: "A",
        data: volume,
        borderColor: "#00AF91",
        backgroundColor: "#00AF91",
        fill: false,
        tension: 0.1,
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
