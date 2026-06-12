import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [25.6, 32.0, 23.8, 9.9, 8.7],

    options: {
      chart: {
        type: "donut",
        width: "100%",
      },

      labels: ["Direct", "Social", "Email", "Other", "Referrals"],

      colors: ["#3F4E8C", "#14B8A6", "#F4B544", "#F56A4D", "#3BA3EC"],

      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(1) + "%";
        },
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          colors: ["#fff"],
        },
      },

      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
      
        labels: {
          colors: "#8b8c99",
        },
      
        markers: {
          width: 10,
          height: 10,
          radius: 12,
          strokeWidth: 0,
          strokeColor: "transparent",
        },
      
        itemMargin: {
          horizontal: 14,
          vertical: 8,
        },
      },

      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },

      stroke: {
        width: 0,
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
          },
        },
      ],
    },
  };

  return (
    <div
    className="StoreChart"
      style={{
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        overflow: "hidden",
        fontFamily: "Arial",
      }}
    >
      <style>
        {`
        .StoreChart .apexcharts-legend-marker {
          border: none !important;
          box-shadow: none !important;
        }
        `}
      </style>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width={400}
      />
    </div>
  );
};

export default ApexChart;