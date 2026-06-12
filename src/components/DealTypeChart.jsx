import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Pending",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Loss",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Won",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
        toolbar: {
          show: false,
        },
      },

      // Colors (fill background)
      fill: {
        opacity: 0.2,
        colors: ["#ecc7c0", "#eedfc3", "#afddd7"],
      },

      // Border / line colors
      stroke: {
        width: 2,
        colors: ["#ea6246", "#f4b64a", "#09a98c"],
      },

      // Main series colors
      colors: ["#f4b64a", "#ea6246", "#09a98c"],

      markers: {
        size: 0,
        strokeColors: ["#f4b64a", "#ea6246", "#09a98c"],
      },

      // Legend styling (Pending / Loss / Won)
      legend: {
        labels: {
          colors: "#878aa6",
          useSeriesColors: false,
        },
        fontFamily: "Poppins",
      },

      yaxis: {
        stepSize: 20,
      },

      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={310}
      />
    </div>
  );
};

export default ApexChart;