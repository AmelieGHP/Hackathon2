import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["red", "bleu", "green", "violet", "orange", "yellow"],
  datasets: [
    {
      label: "couleur préférées",
      data: ["1", "2", "3", "4", "5", "6"],
      backgroundColor: ["orange", "black"],
    },
  ],
};

function Chart() {
  return (
    <div className="chart">
      <div className="card">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default Chart;
