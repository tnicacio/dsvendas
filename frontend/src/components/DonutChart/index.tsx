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
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    const loadChartData = async () => {
      const response = await axios.get(`${BASE_URL}/sales/amount-by-seller`);
      const saleSumData = response?.data as SaleSum[];

      const saleSumDataSortedBySellerName = saleSumData.sort((a, b) =>
        a.sellerName.localeCompare(b.sellerName, 'pt-BR', {
          ignorePunctuation: true,
          sensitivity: 'base',
        })
      );

      const labels = saleSumDataSortedBySellerName.map((row) => row.sellerName);
      const series = saleSumDataSortedBySellerName.map((row) => row.sum);

      setChartData({ labels, series });
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
