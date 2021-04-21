import React from "react";
import { Bar as BarChart } from "react-chartjs";

function Chart(dataParam) {
  const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Energía mensual",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const chartOptions = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
      <BarChart
        data={chartData}
        options={chartOptions}
        width="600"
        height="250"
      />
    </div>
  );
}

export default Chart;
