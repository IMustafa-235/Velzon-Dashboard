import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "Revenue",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Expenses",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 280,
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins, sans-serif",
    },

    colors: ["#0ab39c", "#f06548"],

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },

    legend: {
      labels: {
        colors: "#878a99",
        useSeriesColors: false,
      },
      fontFamily: "Poppins, sans-serif",
    },

    grid: {
      padding: {
        left: 10,   // ✅ added breathing space
        right: 10,
      },
    },

    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

      labels: {
        style: {
          colors: "#878ab3",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    yaxis: {
      labels: {
        offsetX: -12, // ✅ IMPORTANT: moves numbers away from chart
        style: {
          colors: "#878ab3",
          fontFamily: "Poppins, sans-serif",
        },
      },
    },

    tooltip: {
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={280}
      />
    </div>
  );
};

export default ApexChart;