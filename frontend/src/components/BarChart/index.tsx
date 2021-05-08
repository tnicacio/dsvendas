import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';
import { SaleSuccess } from 'types/sale';

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

export const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const loadChartData = async () => {
      const response = await axios.get(`${BASE_URL}/sales/success-by-seller`);
      const saleSuccessData = response?.data as SaleSuccess[];

      const saleSuccessDataSortedBySellerName = saleSuccessData.sort((a, b) =>
        a.sellerName.localeCompare(b.sellerName, 'pt-BR', {
          ignorePunctuation: true,
          sensitivity: 'base',
        })
      );

      const categories = saleSuccessDataSortedBySellerName.map(
        (row) => row.sellerName
      );
      const seriesData = saleSuccessDataSortedBySellerName.map((row) =>
        round(100 * (row.deals / row.visited), 1)
      );

      setChartData({
        labels: {
          categories,
        },
        series: [
          {
            name: '% Success',
            data: seriesData,
          },
        ],
      });
    };

    loadChartData();
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240px"
    />
  );
};
