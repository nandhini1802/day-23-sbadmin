import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
  },
};

export const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      label: "# of Votes",
      data: [15, 8, 4],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      borderWidth: 2,
    },
  ],
};

export default function PieChart() {
  return <Doughnut options={options} data={data} />;
}
