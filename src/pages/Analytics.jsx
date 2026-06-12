import React, { useState, useEffect, useContext } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiError } from "react-icons/bi";
import user_illustrate from "./../assets/user-illustarator-2.png";
import { TbUsers } from "react-icons/tb";
import { IoArrowDownOutline } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoMdArrowRoundUp } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Sessions_by_country_Chart from "./../components/Sessions_by_country_Chart";
import Audiences_Sessions_by_Country from "./../components/Audiences_Sessions_by_Country";
import AudienceMetricsChart from "../components/AudienceMetricsChart";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import UseByDeviceChart from "../components/UseByDeviceChart";
import { IoArrowUpOutline } from "react-icons/io5";
import fpok from "./../assets/fpok.png";
import LiveUserMap from "./../components/LiveUserMap";
import { LayoutChangeContext } from "../context/LayoutChange";
import { CountUp } from "use-count-up";

const Analytics = () => {
  const { layout } = useContext(LayoutChangeContext);
  useEffect(() => {
    const handleClickOutside = () => {
      setSortWeek(false);
    };
    window.addEventListener("click", handleClickOutside);
  }, []);
  const [sortWeek, setSortWeek] = useState(false);
  const trial_box_data = [
    {
      id: 1,
      name: "User",
      icon: <TbUsers size={26} />,
      nums: "28.05k",
      percents: "16.24 %",
      kamarya: <IoMdArrowRoundUp />,
    },
    {
      id: 2,
      name: "Sessions",
      icon: <TbActivityHeartbeat size={26} />,
      nums: "97.66k",
      percents: "3.96 %",
      kamarya: <IoArrowDownOutline />,
    },
    {
      id: 3,
      name: "Avg. Visit Duration",
      icon: <CiClock2 size={26} />,
      nums: "3m 40sec",
      percents: "0.24 %",
      kamarya: <IoArrowDownOutline />,
    },
    {
      id: 4,
      name: "Bounce Rate",
      icon: <BsBoxArrowUpRight size={23} />,
      nums: "33.48%",
      percents: "7.05 %",
      kamarya: <IoMdArrowRoundUp />,
    },
  ];
  const duration_seconds_nums = [
    {
      id: 1,
      number: "0-30",
    },
    {
      id: 2,
      number: "31-60",
    },
    {
      id: 3,
      number: "61-120",
    },
    {
      id: 4,
      number: "121-240",
    },
  ];
  const sessions_nums = [
    {
      id: 1,
      number: "2,250",
    },
    {
      id: 2,
      number: "1,501",
    },
    {
      id: 3,
      number: "750",
    },
    {
      id: 4,
      number: "540",
    },
  ];
  const views_nums = [
    {
      id: 1,
      number: "4,250",
    },
    {
      id: 2,
      number: "2,050",
    },
    {
      id: 3,
      number: "1,600",
    },
    {
      id: 4,
      number: "1,040",
    },
  ];
  const chart_data_no_1 = [
    {
      id: 1,
      number: "854",
      name: "Avg. Session",
      percents: "49%",
    },
    {
      id: 2,
      number: "1,278 ",
      name: "Conversion Rate",
      percents: "60%",
    },
    {
      id: 3,
      number: "3m 40sec",
      name: "Avg. Session Duration",
      percents: "37%",
    },
  ];
  const sort_by_day_data = [
    {
      id: 1,
      text: "Today",
    },
    {
      id: 2,
      text: "Last Week",
    },
    {
      id: 3,
      text: "Last Month",
    },
    {
      id: 4,
      text: "Current Year",
    },
  ];
  const top_referrals_data = [
    {
      id: 1,
      gol_daira: "#405189",
      link: "www.google.com",
      percentage: "24.58%",
    },
    {
      id: 2,
      gol_daira: "#299cdb",
      link: "www.youtube.com",
      percentage: "17.51%",
    },
    {
      id: 3,
      gol_daira: "#0ab39c",
      link: "www.meta.com",
      percentage: "23.05%",
    },
    {
      id: 4,
      gol_daira: "#f7b84b",
      link: "www.medium.com",
      percentage: "12.22%",
    },
    {
      id: 5,
      gol_daira: "#f06548",
      link: "Other",
      percentage: "17.58%",
    },
  ];
  const top_pages_data = [
    {
      id: 1,
      link: "/themesbrand/skote-25867",
      activated: 99,
      user: "25.3%",
    },
    {
      id: 2,
      link: "/dashonic/chat-24518",
      activated: 86,
      user: "22.7%",
    },
    {
      id: 3,
      link: "/skote/timeline-27391",
      activated: 64,
      user: "18.7%",
    },
    {
      id: 4,
      link: "/themesbrand/minia-26441",
      activated: 53,
      user: "	14.2%",
    },
    {
      id: 5,
      link: "/dashon/dashboard-29873",
      activated: 33,
      user: "	12.6%",
    },
    {
      id: 6,
      link: "/doot/chats-29964",
      activated: 20,
      user: "10.9%",
    },
    {
      id: 7,
      link: "/minton/pages-29739",
      activated: 10,
      user: "	07.3%",
    },
  ];

  return (
    <div className="analytics-main-bg">
      <div className={`${layout === "horizontal" ? "container" : ""}`}>
      <div className={`d-flex justify-content-between flex-lg-row gap-2 gap-lg-0 px-4 pages-1-section align-items-center py-2 ${layout === "horizontal" ? "" : "shadow-sm"}`}
      style={{backgroundColor: layout === "horizontal" ? "transparent" : ""}}>
        <p className="mb-0 fw-semibold analytic-text-1-sec">Analytics</p>
        <div
          className="d-flex algin-items-center gap-2"
          style={{ fontSize: "13.8px" }}
        >
          <p className="mb-0 d-n-t">Dashboard</p>
          <p className="mb-0 a-s-1-l-t">
            <MdOutlineKeyboardArrowRight />
          </p>
          <p className="mb-0 a-s-1-l-t">Analytics</p>
        </div>
      </div>
        <div
          className={`d-flex pt-4 px-4 align-items-start flex-wrap flex-lg-row ${
            layout === "horizontal" ? "justify-content-between" : "gap-3"
          }`}
        >
          <div className="d-flex gap-3 flex-column njff">
            <div className="d-flex flex-column gap-2 analytics-sec-2-f-p rounded-1 shadow-sm">
              <div className="d-flex align-items-center justify-content-between upgrade-plan-box-p-1 px-3 py-2 rounded-1">
                <p
                  className="mb-0 d-flex align-items-center text-truncate"
                  style={{ fontSize: "14px" }}
                >
                  <BiError className="me-1 flex-shrink-0" size={18} />
                  <span className="text-truncate">
                    Your free trial expired in{" "}
                    <span className="mx-1 fw-semibold">17</span> days.
                  </span>
                </p>
                <p
                  className="mb-0 text-decoration-underline fw-semibold"
                  style={{ fontSize: "13px" }}
                >
                  Upgrade
                </p>
              </div>
              <div className="px-3 py-2">
                <p className="mb-0 freetrial-text">
                  Upgrade your plan from a{" "}
                  <span className="fw-semibold">Free trial</span>, to ‘Premium
                  Plan’{" "}
                </p>
                <div className="d-flex justify-content-between mt-3 align-items-center flex-column flex-lg-row gap-3 gap-lg-0">
                  <button className="px-3 upgrade-acc-btn rounded-2">
                    Upgrade Account!
                  </button>
                  <img src={user_illustrate} className="" width={122} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-between">
              {trial_box_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="shadow-sm py-2 px-3 rounded-1 fja"
                  >
                    <div className="d-flex justify-content-between">
                      <p
                        className="mb-0"
                        style={{
                          color: "#878a99",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {item.name}
                      </p>
                      <p className="mb-0 align-self-end d-flex align-items-center justify-content-center pamamv">
                        {item.icon}
                      </p>
                    </div>
                    <h3 className="mb-0 fakfa">
                      {item.nums.startsWith("$") && "$"}

                      {item.nums.includes("m") && item.nums.includes("sec") ? (
                        item.nums
                      ) : (
                        <>
                          <CountUp
                            isCounting
                            end={parseFloat(item.nums.replace(/[^0-9.]/g, ""))}
                            duration={2.5}
                            decimalPlaces={
                              parseFloat(item.nums.replace(/[^0-9.]/g, "")) %
                                1 !==
                              0
                                ? 2
                                : 0
                            }
                          />

                          {item.nums.includes("k") && "k"}
                          {item.nums.includes("M") && "M"}
                          {item.nums.includes("%") && "%"}
                        </>
                      )}
                    </h3>
                    <p className="d-flex mb-0 align-items-center mt-2">
                      <span
                        className={`fna rounded-2 fw-semibold ${
                          item.percents === "16.24 %" ||
                          item.percents === "7.05 %"
                            ? "green-free-trail"
                            : "red-free-trial"
                        }`}
                      >
                        {item.kamarya} {item.percents}
                      </span>
                      <span
                        className="ms-1"
                        style={{ fontSize: "13px", color: "#878a99" }}
                      >
                        vs. precious
                      </span>
                    </p>
                    <p
                      className="mb-0"
                      style={{ fontSize: "13px", color: "#878a99" }}
                    >
                      month
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-2 rounded-1 shadow-sm jf-fa">
            <div className="d-flex align-items-center justify-content-between px-3 b-a pb-2">
              <p className="mb-0">Live Users By Country</p>
              <button className="export-report-btn rounded-1">
                Export Report
              </button>
            </div>
            <div className="first-analytic-map d-none d-lg-block">
              <LiveUserMap />
            </div>
            <div className="d-flex align-items-center a-m-t-l py-1 px-3">
              <div className="fjao fw-semibold">Duration (Secs)</div>
              <div className="fjaoo fw-semibold">Sessions</div>
              <div className="fjaooo fw-semibold">Views</div>
            </div>
            <div className="d-flex align-items-start px-3 mt-2">
              <div className="d-flex flex-column justify-content-center gap-2 fjao-1">
                {duration_seconds_nums.map((item) => {
                  return (
                    <p key={item.id} className="mb-0">
                      {item.number}
                    </p>
                  );
                })}
              </div>
              <div className="d-flex flex-column justify-content-center gap-2 fjao-2">
                {sessions_nums.map((item) => {
                  return (
                    <p key={item.id} className="mb-0">
                      {item.number}
                    </p>
                  );
                })}
              </div>
              <div className="d-flex flex-column justify-content-center gap-2 fjao-3">
                {views_nums.map((item) => {
                  return (
                    <p key={item.id} className="mb-0">
                      {item.number}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-2 rounded-1 shadow-sm ff-af">
            <div className="d-flex align-items-center justify-content-between px-3 b-a pb-2">
              <p className="mb-0">Sessions by Countries</p>
              <div className="d-flex gap-1">
                <p className="chart-top-boxes">ALL</p>
                <p className="chart-top-boxes-last">1M</p>
                <p className="chart-top-boxes">6M</p>
              </div>
            </div>
            <div>
              <Sessions_by_country_Chart />
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="py-4 d-flex align-items-center gap-4 flex-column flex-lg-row">
            <div className="analytic-chart-parent rounded-2 h-100 shadow-sm">
              <div className="d-flex align-items-center justify-content-between p-3">
                <h6 className="mb-0 revenue-text">Audiences Metrics</h6>
                <div className="d-flex gap-1">
                  <p className="chart-top-boxes">ALL</p>
                  <p className="chart-top-boxes">1M</p>
                  <p className="chart-top-boxes">6M</p>
                  <p className="chart-top-boxes-last">IY</p>
                </div>
              </div>
              <div className="chart-second-div-1">
                {chart_data_no_1.map((item) => (
                  <div key={item.id} className="analytic-chart-second-div-item">
                    <div className="d-flex align-items-center gap-2">
                      <p className="mb-0 chart-fkafma">{item.number}</p>
                      <span style={{ color: "#0ab39c", fontSize: "13px" }}>
                        {item.percents}
                      </span>
                    </div>
                    <p
                      className="mb-0 chart-pfka text-center"
                      style={{ fontSize: "13px" }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
              <AudienceMetricsChart />
            </div>
            <div className="analytic-map-parent rounded-2 shadow-sm position-relative">
              <div className="py-3 px-3 d-flex align-items-center justify-content-between location-heading-parent">
                <h6 className="mb-0 sales-h6">Audiences Sessions by Country</h6>
                <p
                  className="mb-0 pfam"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortWeek(!sortWeek);
                  }}
                >
                  <span className="fw-semibold">SORT BY: </span>{" "}
                  <span style={{ color: "#878a99" }}>
                    Current Week <MdKeyboardArrowDown />
                  </span>
                </p>
              </div>
              <div
                className={`sort-today-box py-2 shadow-sm rounded-1 d-flex flex-column ${
                  sortWeek ? "d-flex" : "d-none"
                }`}
              >
                {sort_by_day_data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="sort-today-item px-3 py-2"
                      style={{ cursor: "pointer" }}
                    >
                      <p
                        className="mb-0 map-text"
                        style={{ fontSize: "13.5px" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="analytic-map px-2">
                <Audiences_Sessions_by_Country />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap px-4 pb-4 gap-3">
          <div className="analytics-ls-item py-3 amffpa rounded-1">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Users by Device</h6>
              <TbDotsVertical color="#8b8a99" size={17} />
            </div>
            <div className="d-flex justify-content-center">
              <UseByDeviceChart />
            </div>
          </div>
          <div className="analytics-ls-item amffpa rounded-1 py-3">
            <div className="d-flex align-items-center justify-content-between px-3 b-a pb-2">
              <p className="mb-0">Top Referrals Pages</p>
              <button className="export-report-btn rounded-1">
                Export Report
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between px-3 mt-3">
              <div
                className="d-flex flex-column gap-3 justify-content-center"
                style={{ width: "150px" }}
              >
                <p
                  className="mb-0 text-truncate"
                  style={{
                    color: "#878a99",
                    fontSize: "14px",
                    fontWeight: "450",
                  }}
                >
                  Total Referrals Page
                </p>
                <h5 className="mb-0 fakfa">725,800</h5>
                <div className="mb-0 d-flex align-items-center flex-wrap gap-1">
                  <p
                    className="mb-0 rounded-1 fw-semibold px-1 d-flex align-items-center"
                    style={{
                      backgroundColor: "#daf4f0",
                      color: "#46b39c",
                      fontSize: "11.5px",
                    }}
                  >
                    <IoArrowUpOutline size={10} /> 15.72 %
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "13px", color: "#878a99" }}
                  >
                    vs
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "13px", color: "#878a99" }}
                  >
                    precious
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "13px", color: "#878a99" }}
                  >
                    month
                  </p>
                </div>
              </div>
              <div>
                <img className="img-fluid" src={fpok} alt="" />
              </div>
            </div>
            <div className="d-flex mt-4 px-3">
              <div
                className="aongfa"
                style={{
                  backgroundColor: "#405189",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  height: "12px",
                  width: "90px",
                }}
              ></div>
              <div
                className="aongfa"
                style={{
                  backgroundColor: "#299cdb",
                  height: "12px",
                  width: "70px",
                }}
              ></div>
              <div
                className="aongfa"
                style={{
                  backgroundColor: "#0ab39c",
                  height: "12px",
                  width: "77px",
                }}
              ></div>
              <div
                className="aongfa"
                style={{
                  backgroundColor: "#f7b84b",
                  height: "12px",
                  width: "60px",
                }}
              ></div>
              <div
                className="aongfa"
                style={{
                  backgroundColor: "#f06548",
                  height: "12px",
                  width: "80px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              ></div>
            </div>
            <div className="d-flex flex-column justify-content-center gap-2 mt-4 px-3">
              {top_referrals_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="gol-daira"
                        style={{ backgroundColor: item.gol_daira }}
                      ></div>
                      <p
                        className="mb-0"
                        style={{ color: "#878a99", fontSize: "14px" }}
                      >
                        {item.link}
                      </p>
                    </div>
                    <div className="fakfa" style={{ fontSize: "13px" }}>
                      {item.percentage}
                    </div>
                  </div>
                );
              })}
            </div>
            <p
              className="mb-0 mt-3 text-center text-decoration-underline"
              style={{ color: "#878ca6", fontSize: "13px" }}
            >
              Show All
            </p>
          </div>
          <div className="analytics-ls-item amffpa rounded-1 py-3 overflow-x-auto">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Top Pages</h6>
              <TbDotsVertical color="#8b8a99" size={17} />
            </div>
            <table className="table top-pages-table mb-0">
              <thead className="order-table-head">
                <tr>
                  <th>Activate Page</th>
                  <th>Active</th>
                  <th>Users</th>
                </tr>
              </thead>

              <tbody className="tableBody">
                {top_pages_data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td
                        className="kfa"
                        style={{ fontSize: "13px", padding: "12px" }}
                      >
                        {item.link}
                      </td>
                      <td
                        className="ps-3 kfa"
                        style={{ padding: "12px", fontSize: "13px" }}
                      >
                        {item.activated}
                      </td>
                      <td
                        className="kfa"
                        style={{ fontSize: "13px", padding: "12px" }}
                      >
                        {item.user}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
