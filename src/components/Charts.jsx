import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }));

  const purchasesData = purchases?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
  }));

  const salesChartData = {
    labels: salesData?.map((item) => item.date),
    datasets: [
      {
        label: "Quantity",
        data: salesData?.map((item) => item.quantity),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        lineTension: 0.4,
        borderWidth: 1,
      },
      {
        label: "Price",
        data: salesData?.map((item) => item.price),
        borderColor: 'blue',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        lineTension: 0.4,
        borderWidth: 1,
      },
    ],
  };

  const purchasesChartData = {
    labels: purchasesData?.map((item) => item.date),
    datasets: [
      {
        label: "Price",
        data: purchasesData?.map((item) => item.price),
        borderColor: 'green',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        lineTension: 0.4,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '3rem', flexWrap: 'wrap' }}>
      <Box style={{ width: '100%', minWidth: '300px', maxWidth: '600px', marginBottom: '20px' }}>
        <Typography sx={{fontSize:"1.2rem", fontWeight:"700"}}>Total Sales</Typography>
        <Line data={salesChartData} />
      </Box>

      <Box style={{ width: '100%', minWidth: '300px', maxWidth: '600px', marginBottom: '20px', }}>
      <Typography sx={{fontSize:"1.2rem", fontWeight:"700"}}>Total Purchases</Typography>
        <Line data={purchasesChartData} />
      </Box>
    </Box>
  );
};

export default Charts;
