import React from "react";
import LiquidityChart from "./LiquidityChart";
import VolumeChart from "./VolumeChart";

const Analytics = () => {
  return (
    <section className="mt-5">
      <h1 className="text-2xl">Analytics</h1>
      <h2 className="text-lg">Overview</h2>
      <div className="flex w-full gap-10">
        <LiquidityChart />
        <VolumeChart />
      </div>
    </section>
  );
};

export default Analytics;
