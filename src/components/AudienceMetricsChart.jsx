import React from "react";

import Chart from "react-apexcharts";

const AudienceMetricsChart = () => {
  const series = [
    {
      name: "Last Year",

      data: [35, 18, 28, 25, 52, 34, 22, 30, 27, 33, 18, 29],
    },

    {
      name: "Current Year",

      data: [85, 55, 95, 75, 120, 85, 60, 80, 70, 85, 55, 90],
    },
  ];

  const options = {
    chart: {
      type: "bar",

      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "35%",

        borderRadius: 4,
      },
    },

    colors: ["#E5E7EB", "#14B8A6"],

    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: false,
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

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        style: {
          colors: "#6B7280",

          fontSize: "12px",
        },
      },
    },

    yaxis: {
      show: false,
    },

    grid: {
      borderColor: "#F3F4F6",

      strokeDashArray: 4,
    },

    legend: {
      position: "bottom",

      horizontalAlign: "center",

      markers: {
        radius: 12,
      },
    },

    tooltip: {
      theme: "light",
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
       


      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
      </div>

      <Chart options={options} series={series} type="bar" height={300} />

      <style>
        {`

          .filter-btn{

            border:none;

            background:#F3F4F6;

            padding:6px 12px;

            border-radius:6px;

            cursor:pointer;

            color:#6B7280;

            font-size:12px;

          }
 
          .filter-btn.active{

            background:#2563EB;

            color:#fff;

          }

        `}
      </style>
    </div>
  );
};

export default AudienceMetricsChart;
