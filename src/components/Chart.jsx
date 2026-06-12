import React from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "Orders",
      type: "area",
      data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
    },
    {
      name: "Earnings",
      type: "bar",
      data: [89, 98, 68, 108, 77, 84, 51, 28, 92, 42, 88, 36],
    },
    {
      name: "Refunds",
      type: "line",
      data: [8, 12, 7, 18, 21, 10, 5, 9, 7, 29, 12, 33],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },

    colors: ["#405189", "#0ab39c", "#f06548"],

    stroke: {
      width: [2, 0, 3],
      curve: "smooth",
      dashArray: [0, 0, 8],
    },

    fill: {
      opacity: [0.15, 1, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 2,
      },
    },

    labels: [
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

    markers: {
      size: 0,
    },

    xaxis: {
      type: "category",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 6,
    },

    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
      yaxis: {
        lines: {
          show: false, 
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "13.5px",
    
      labels: {
        colors: "#878a99",
      },
    
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: "transparent",
        offsetX: -2,
      },
    
      itemMargin: {
        horizontal: 12,
        vertical: 10,
      },
    
      offsetY: 10,
    },

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
  };


  return (
    <div className="px-2">
      <style>
      {`
    .apexcharts-text tspan {
      fill: #878a99 !important;
    }
  `}
      </style>
      <Chart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default ApexChart;