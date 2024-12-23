import React from "react";
import LiquidityChart from "./LiquidityChart";
import VolumeChart from "./VolumeChart";

const Analytics = () => {
  return (
    <section className="mt-10 h-[100vh]">
      <h1 className="text-2xl text-center font-medium">Summary Analytics</h1>
      <h2 className="text-lg text-center mt-2 text-[#00AF91]">Overview</h2>
      <div className="flex flex-col items-center lg:flex-row w-full gap-10 mt-5">
        <LiquidityChart liquid={[10, 10]} />
        <VolumeChart volume={[10, 10]} />
      </div>
    </section>
  );
};

export default Analytics;
