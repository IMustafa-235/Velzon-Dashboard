import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [
      {
        data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 380,
        toolbar: {
          show: false,
        },
      },

      colors: [
        ({ dataPointIndex }) => {
          return dataPointIndex === 4 ? "#f27c63" : "#49abe0";
        },
      ],

      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 5,
      
          // 👇 bar size
          barHeight: "65%",
      
          // 👇 labels outside
          dataLabels: {
            position: "top",
          },
        },
      },
      
      dataLabels: {
        enabled: true,
      
        // 👇 number bar ke end ke baad
        offsetX: 12,
      
        style: {
          colors: ["#adb5cc"],
          fontSize: "12px",
          fontWeight: 600,
        },
      
        formatter: (val) => val,
      },

      dataLabels: {
        enabled: true,

        // 👇 label ko bar ke end ke baad le jana
        offsetX: 15,

        style: {
          colors: ["#adb5cc"],
          fontSize: "12px",
          fontWeight: 600,
        },

        formatter: (val) => val,
      },

      xaxis: {
        categories: [
          "India",
          "United States",
          "China",
          "Indonesia",
          "Russia",
          "Bangladesh",
          "Canada",
          "Brazil",
          "Vietnam",
          "UK",
        ],

        labels: {
          style: {
            colors: "#8c95a3",
            fontSize: "13px",
            fontWeight: "500",
          },
        },

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: "#8c95a3",
            fontSize: "12px",
            fontWeight: "540",
          },
        },
      },

      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 4,
      },

      tooltip: {
        enabled: true,
      },

      legend: {
        show: false,
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
<ReactApexChart
  options={chartData.options}
  series={chartData.series}
  type="bar"
  height={442}
/>
    </div>
  );
};

export default ApexChart;