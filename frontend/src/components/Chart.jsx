import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Frison",
    "Percherons",
    "Haflinger",
    "Quarter Horse",
    "Akhal-Téké",
    "Appaloosa",
  ],
  datasets: [
    {
      label: "couleur préférées",
      data: ["1", "2", "3", "4", "5", "6"],
      backgroundColor: ["#00062b", "black", "#b5c5f4", "#d9a25f", "#bf8415"],
    },
  ],
};

function Chart() {
  return (
    <div className="chart">
      <div className="card">
        <Doughnut className="donut" data={data} />
      </div>
    </div>
  );
}

export default Chart;
