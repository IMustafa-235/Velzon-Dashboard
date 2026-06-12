import React from "react";
import Chart from "react-apexcharts";

const ForecastChart = () => {
  const goal = 60;
  const pendingForecast = 15;
  const revenue = 25;
  const gap = goal - revenue;

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins",
    },

    colors: ["#405189", "#0ab39c", "#f7b84b"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%", // 🔥 slightly increased to reduce gap feel
        borderRadius: 0,
      },
    },

    states: {
      hover: {
        filter: {
          type: "none", // 🔥 prevents extra spacing/visual shift on hover
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val) => val,
      style: {
        colors: ["#ffffff"],
        fontSize: "10px",
        fontWeight: 700,
      },
    },

    legend: {
      show: false,
    },

    xaxis: {
      categories: [""],
      tickPlacement: "between", // 🔥 improves tight grouping feel

      labels: {
        show: false,
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      min: 0,
      max: 40,
      tickAmount: 4,

      labels: {
        formatter: (value) => `$${value}k`,
        style: {
          colors: "#7f87a6",
          fontSize: "10px",
        },
      },
    },

    grid: {
      borderColor: "#e8edf5",

      xaxis: {
        lines: {
          show: false,
        },
      },

      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Goal",
      data: [gap, null, null],
    },
    {
      name: "Pending Forecast",
      data: [null, pendingForecast, null],
    },
    {
      name: "Revenue",
      data: [null, null, revenue],
    },
  ];

  return (
    <div
      style={{
        width: "90%",
      }}
    >
      <Chart
        options={{
          ...options,
          chart: {
            ...options.chart,
            stacked: true,
          },
        }}
        series={series}
        type="bar"
        height={245}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "-10px",
          marginBottom: "12px",
          color: "#7f87a6",
          fontSize: "11px",
          fontWeight: 400,
          fontFamily: "Poppins",
        }}
      >
        Total Forecasted Value
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px",
          color: "#878a99",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              background: "#405189",
              display: "inline-block",
            }}
          />
          Goal
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              background: "#0ab39c",
              display: "inline-block",
            }}
          />
          Pending Forecast
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          justifyContent: "center",
          fontSize: "13px",
          color: "#878a99",
        }}
      >
        <span
          style={{
            width: "10px",
            height: "10px",
            background: "#f7b84b",
            display: "inline-block",
          }}
        />
        Revenue
      </div>
    </div>
  );
};

export default ForecastChart;