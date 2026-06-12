import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  return (
    <ReactApexChart
      type="donut"
      width={240}
      series={[44, 55, 41]}
      options={{
        chart: {
          type: "donut",
        },
        labels: ["Desktop", "Mobile", "Laptop"],
        colors: ["#516093", "#36C1AE", "#F8C265"],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        stroke: {
          width: 0,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          position: "bottom",
          fontFamily: "Poppins, sans-serif",
          labels: {
            colors: "#878A99",
          },
        },
      }}
    />
  );
};

export default ApexChart;