import React from "react";
import Chart from "react-apexcharts";
import { FiUsers } from "react-icons/fi";
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const DeviceUsersChart = () => {
  const chartOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    labels: ["Desktop Users", "Mobile Users", "Tablet Users"],
    colors: ["#3f518f", "#f0b548", "#2d9cdb"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
        },
      },
    },
  };

  const chartSeries = [78.56, 105.02, 42.89];

  const usersData = [
    {
      label: "Desktop Users",
      value: "78.56k",
      color: "#3f518f",
      change: "2.08%",
      positive: true,
      icon: <MdArrowDropUp size={20} />,
    },
    {
      label: "Mobile Users",
      value: "105.02k",
      color: "#f0b548",
      change: "10.52%",
      positive: false,
      icon: <MdOutlineArrowDropDown size={20} />,
    },
    {
      label: "Tablet Users",
      value: "42.89k",
      color: "#2d9cdb",
      change: "7.36%",
      positive: true,
      icon: <MdArrowDropUp size={20} />,
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={220}
      />

      <div style={{ marginTop: "20px" }}>
        {usersData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
              width: "100%",
              gap: "8px",
            }}
          >
            {/* Desktop / Mobile / Tablet Users */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "11px",
                  height: "11px",
                  backgroundColor: item.color,
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  fontSize: "14px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </span>
            </div>

            {/* 78.56k / 105.02k / 42.89k */}
            <div
              style={{
                width: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                color: "#8f939f",
                fontSize: "14px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <FiUsers size={16} />
              <span>{item.value}</span>
            </div>

            {/* 2.08% / 10.52% / 7.36% */}
            <div
              style={{
                width: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                color: item.positive ? "#10b981" : "#ef4444",
                fontSize: "13px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {item.icon}
              <span>{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceUsersChart;