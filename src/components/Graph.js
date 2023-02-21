import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = () => {
  const data = {
    labels: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10"],
    datasets: [
      {
        label: "Top 10 Players in the US Since 2020",
        data: [120, 80, 70, 50, 45, 30, 25, 20, 18, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56",
          "#FFCE56"
        ]
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
