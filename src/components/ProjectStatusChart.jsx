import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [40, 10, 20, 30];

  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    colors: [
      "#18B6A3", // Green
      "#44579A", // Blue
      "#F0B547", // Yellow
      "#F26543", // Orange
    ],
    plotOptions: {
      pie: {
        startAngle: -90,
        donut: {
          size: "89%",
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={250}
        height={230}
      />
    </div>
  );
};

export default DonutChart;