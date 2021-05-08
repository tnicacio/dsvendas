import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'utils/sale';

type ChartData = {
  labels: string[];
  series: number[];
};

export const DonutChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    series: [],
  } as ChartData);

  useEffect(() => {
    const loadChartData = async () => {
      const response = await axios.get(`${BASE_URL}/sales/amount-by-seller`);
      const saleSumData = response?.data as SaleSum[];

      const dataLabels = saleSumData.map((row) => row.sellerName);
      const dataSeries = saleSumData.map((row) => row.sum);

      setChartData({ labels: [...dataLabels], series: [...dataSeries] });
    };
    loadChartData();
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240px"
    />
  );
};
