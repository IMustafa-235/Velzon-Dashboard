import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

const VelzonChart = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const numProjects = [35, 63, 47, 65, 50, 54, 42, 43, 76, 52, 61, 65];
  const revenue     = [92, 100, 82, 115, 88, 70, 65, 90, 96, 68, 80, 88];
  const activeProj  = [10, 14, 8, 20, 16, 8, 8, 8, 22, 18, 20, 30];

  const series = useMemo(() => [
    { name: "Number of Projects", type: "bar", data: numProjects },
    { name: "Active Projects", type: "bar", data: activeProj },
    { name: "Revenue", type: "area", data: revenue },
  ], []);

  const options = useMemo(() => ({
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "sans-serif",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
        dataLabels: { position: "top" },
      },
    },
    stroke: {
      width: [0, 0, 1.5],
      curve: "smooth",
      dashArray: [0, 0, 6],
    },
    colors: ["#3b5998", "#2dcca7", "#f0b429"],
    fill: {
      type: ["solid", "solid", "gradient"],
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.18,
        opacityTo: 0.01,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#f0b429", opacity: 0.18 },
          { offset: 100, color: "#f0b429", opacity: 0.01 },
        ],
      },
    },
    markers: {
      size: [0, 0, 3],
      colors: ["#f0b429"],
      strokeColors: "#f0b429",
      strokeWidth: 0,
    },
    xaxis: {
      categories: months,
      axisBorder: { show: true, color: "#e2e8f0" },
      axisTicks: { show: false },
      labels: { style: { colors: "#888", fontSize: "11px" } },
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 6,
      labels: {
        formatter: (val) => val.toFixed(2),
        style: { colors: "#888", fontSize: "11px" },
      },
    },
    grid: {
      borderColor: "#f0f0f0",
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: {
      shared: true,
      intersect: false,
      theme: "light",
      style: { fontSize: "12px" },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      markers: { width: 12, height: 12, radius: 2, offsetX: -2 },
      itemMargin: { horizontal: 12 },
      fontSize: "12px",
      labels: { colors: "#555" },
    },
  }), []);

  return (
    <div style={{
      borderRadius: "8px",
      padding: "20px 16px 12px",
      fontFamily: "sans-serif",
      width: "100%",
    }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={320}
      />
    </div>
  );
};

export default VelzonChart;