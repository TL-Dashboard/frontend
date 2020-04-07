import React from "react";

import { Line } from "react-chartjs-2";

function GradesChart({ chartData }) {
    
  const data = {
    labels: ["Module 1", "Module 2", "Module 3", "Module 4", "Sprint"],
    datasets: chartData
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 1,
            max: 3,
            stepSize: 1
          }
          // stacked: true
        }
      ]
    },
    // showLines: false
    legend: {
      position: "bottom"
    },
    spanGaps: true
  };

  return <Line height={320} width={300} data={data} options={options} />;
}

export default GradesChart;
