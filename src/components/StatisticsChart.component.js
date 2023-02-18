import { Bar } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const getChart = (labels, data) => {
  const options = {
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: data,
          borderWidth: 1,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    options: {
        
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return options;
};

const StatisticsChart = ({ partiesData }) => {
  const names = partiesData.map((candidate) => candidate.name);
  const votes = partiesData.map((candidate) => candidate.votes);
  const data = getChart(names, votes);
  return (
    <div className="chart-Container">
      <Bar options={data.options} data={data.data} />
    </div>
  );
};

export default StatisticsChart;
