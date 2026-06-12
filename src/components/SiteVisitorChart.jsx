import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.7, 0.4],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    colors: ["#5c6b9b"],

    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "70%",
        dataLabels: {
          position: "top",
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#878a99"],
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: [
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
            "#878a99",
          ],
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: ["#878a99"],
        },
        formatter: (val) => `${val}%`,
      },
    },

    grid: {
      borderColor: "#e9ebec",
    },

    legend: {
      show: false,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={280}
    />
  );
};

export default ApexChart;