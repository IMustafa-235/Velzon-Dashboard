import React, { useEffect, useContext } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { RiRocketLine } from "react-icons/ri";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiTrophyLine } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import SalesForcast from "./../components/SalesForcast";
import DealTypeChart from "./../components/DealTypeChart";
import BalanceOverviewChart from "./../components/BalanceOverviewChart";
import img_1 from "./../assets/avatar-1.jpg";
import img_2 from "./../assets/n_m_2.png";
import img_3 from "./../assets/n_m_3.png";
import img_4 from "./../assets/n_m_4.png";
import img_5 from "./../assets/ping-imgg.jpg";
import img_6 from "./../assets/sfaf.png";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDotsVertical } from "react-icons/tb";
import { Tooltip } from "bootstrap";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { RiArrowRightLongLine } from "react-icons/ri";
import { LayoutChangeContext } from "../context/LayoutChange";
import { CountUp } from "use-count-up";
const Crm = () => {
  const { layout } = useContext(LayoutChangeContext);
  const crm_first_data = [
    {
      id: 1,
      name: "CAMPAIGN SENT",
      uppArrow: <MdOutlineArrowCircleUp color="#0ab39c" size={19} />,
      icon: <RiRocketLine size={35} />,
    },
    {
      id: 2,
      name: "ANNUAL PROFIT",
      uppArrow: <MdOutlineArrowCircleUp color="#0ab39c" size={19} />,
      icon: <RiExchangeDollarLine size={35} />,
    },
    {
      id: 3,
      name: "LEAD CONVERSATION",
      downArrow: <MdOutlineArrowCircleDown color="#f26748" size={19} />,
      icon: <TbActivityHeartbeat size={35} />,
    },
    {
      id: 4,
      name: "DAILY AVERAGE INCOME",
      uppArrow: <MdOutlineArrowCircleUp color="#0ab39c" size={19} />,
      icon: <RiTrophyLine size={35} />,
    },
    {
      id: 5,
      name: "ANNUAL DEALS",
      downArrow: <MdOutlineArrowCircleDown color="#f26748" size={19} />,
      icon: <LuHeartHandshake size={35} />,
    },
  ];
  const deal_status_data = [
    {
      id: 1,
      name: "Absternet LLC",
      last_contact: "Sep 20, 2021",
      sales_representative_img: img_1,
      sales_representative_name: "Donald Risher",
      status: "Deal Won",
      deal_value: "$100.1K",
    },
    {
      id: 2,
      name: "Raitech Soft",
      last_contact: "Sep 23, 2021",
      sales_representative_img: img_2,
      sales_representative_name: "Sofia Cunha",
      status: "Intro Call",
      deal_value: "$150K",
    },
    {
      id: 3,
      name: "William PVT",
      last_contact: "Sep 27, 2021",
      sales_representative_img: img_6,
      sales_representative_name: "Luis Rocha",
      status: "Stuck",
      deal_value: "$78.18K",
    },
    {
      id: 4,
      name: "Loiusee LLP",
      last_contact: "Sep 30, 2021",
      sales_representative_img: img_5,
      sales_representative_name: "Vitoria Rodrigues",
      status: "Deal Won",
      deal_value: "$180K",
    },
    {
      id: 5,
      name: "Apple Inc",
      last_contact: "Sep 30, 2021",
      sales_representative_img: img_3,
      sales_representative_name: "Vitoria Rodrigues",
      status: "New Lead",
      deal_value: "$78.9K",
    },
  ];
  const tasks_data = [
    {
      id: 1,
      text: "Review and make sure nothing slips through cracks",
      date: "15 Sep, 2021",
    },
    {
      id: 2,
      text: "Send meeting invites for sales upcampaign",
      date: "20 Sep, 2021",
    },
    {
      id: 3,
      text: "Weekly closed sales won checking with sales team",
      date: "24 Sep, 2021",
    },
    {
      id: 4,
      text: "Add notes that can be viewed from the individual view",
      date: "27 Sep, 2021",
    },
    {
      id: 5,
      text: "Move stuff to another page",
      date: "27 Sep, 2021",
    },
    {
      id: 6,
      text: "Styling wireframe design and documentation for velzon admin",
      date: "27 Sep, 2021",
    },
  ];
  const meetings = [
    {
      id: 1,
      date: "25",
      day: "Tue",
      time: "12:00am - 03:30pm",
      title: "Meeting for campaign with sales team",
      count: 5,
      users: [
        { name: "Donald Risher", img: img_1 },
        { name: "Sofia Cunha", img: img_2 },
        { name: "Luis Rocha", img: img_6 },
      ],
    },
    {
      id: 2,
      date: "20",
      day: "Wed",
      time: "02:00pm - 03:45pm",
      title: "Adding a new event with attachments",
      count: 3,
      users: [
        { name: "Vitoria Rodrigues", img: img_5 },
        { name: "Sofia Cunha", img: img_2 },
        { name: "Ayaan Hudda", img: img_3 },
        { name: "Donald Risher", img: img_1 },
      ],
    },
    {
      id: 3,
      date: "17",
      day: "Wed",
      time: "04:30pm - 07:15pm",
      title: "Create new project Bundling Product",
      count: 4,
      users: [
        { name: "Vitoria Rodrigues", img: img_4 },
        { name: "Sofia Cunha", img: img_1 },
        { name: "Ayaan Hudda", img: img_2 },
      ],
    },
    {
      id: 4,
      date: "12",
      day: "Tue",
      time: "10:30am - 01:15pm",
      title: "Weekly closed sales won checking with sales team",
      count: 9,
      users: [
        { name: "Vitoria Rodrigues", img: img_1 },
        { name: "Sofia Cunha", img: img_5 },
        { name: "Ayaan Hudda", img: img_3 },
      ],
    },
  ];
  const closing_deals_data = [
    {
      id: 1,
      deal_name: "Acme Inc Install",
      img: img_1,
      name: "Donald Risher",
      amount: "$96k",
      close_date: "Today",
    },
    {
      id: 2,
      deal_name: "Save lots Stores",
      img: img_2,
      name: "Jansh Brown",
      amount: "$55.7k",
      close_date: "30 Dec 2021",
    },
    {
      id: 3,
      deal_name: "William PVT",
      img: img_3,
      name: "Ayaan Hudda",
      amount: "$102k",
      close_date: "25 Nov 2021",
    },
    {
      id: 4,
      deal_name: "Raitech Soft",
      img: img_5,
      name: "Julia William",
      amount: "$89.5k",
      close_date: "20 Sep 2021",
    },
    {
      id: 5,
      deal_name: "Absternet LLC",
      img: img_5,
      name: "Vitoria Rodrigues",
      amount: "$89.5k",
      close_date: "20 Sep 2021",
    },
  ];

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <div className="analytics-main-bg">
      <div className={`${layout === "horizontal" ? "container" : ""}`}>
        <div
          className={`d-flex justify-content-between flex-lg-row gap-2 gap-lg-0 px-4 pages-1-section align-items-center py-2 ${
            layout === "horizontal" ? "" : "shadow-sm"
          }`}
          style={{
            backgroundColor: layout === "horizontal" ? "transparent" : "",
          }}
        >
          <p className="mb-0 fw-semibold analytic-text-1-sec">CRM</p>
          <div
            className="d-flex algin-items-center gap-2"
            style={{ fontSize: "13.8px" }}
          >
            <p className="mb-0 d-n-t">Dashboard</p>
            <p className="mb-0 a-s-1-l-t">
              <MdOutlineKeyboardArrowRight />
            </p>
            <p className="mb-0 a-s-1-l-t">Crm</p>
          </div>
        </div>
        <div className="d-flex flex-wrap px-4 py-4">
          {crm_first_data.map((item) => {
            return (
              <div
                key={item.id}
                className={`py-3 px-3 crm-pages-s2-boxes rounded-1 shadow-sm
                  ${item.id === 1 ? "crm-box-1" : ""}
                  ${
                    item.id === 2 || item.id === 3 || item.id === 4
                      ? "three-boxes-border"
                      : ""
                  }
                  `}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "12px",
                      color: "#878a99",
                      fontWeight: "450",
                    }}
                  >
                    {item.name}
                  </p>
                  {item.uppArrow}
                  {item.downArrow}
                </div>
                <div className="d-flex align-items-center gap-3 py-3">
                  <span style={{ color: "#878a99" }}>{item.icon}</span>

                  <h4 className="mb-0 home-sec-2-box-h5">
                    {item.id === 1 && (
                      <CountUp isCounting end={197} duration={2} />
                    )}

                    {item.id === 2 && (
                      <>
                        $
                        <CountUp
                          isCounting
                          end={489.4}
                          duration={2}
                          decimalPlaces={1}
                        />
                        k
                      </>
                    )}

                    {item.id === 3 && (
                      <>
                        <CountUp
                          isCounting
                          end={32.89}
                          duration={2}
                          decimalPlaces={2}
                        />
                        %
                      </>
                    )}

                    {item.id === 4 && (
                      <>
                        $
                        <CountUp
                          isCounting
                          end={1596.5}
                          duration={2}
                          decimalPlaces={1}
                        />
                      </>
                    )}

                    {item.id === 5 && (
                      <CountUp isCounting end={2659} duration={2}  formatter={(value) => Math.floor(value).toLocaleString()} />
                    )}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container-fluid px-4">
          <div className="row g-4 pb-4">
            <div className="col-12 col-lg-6">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="crm-charts takreeban-bg rounded-1 shadow-sm shadow-sm">
                    <div className="py-3 px-3 d-flex align-items-center justify-content-between fapfa">
                      <h6
                        className="mb-0 sales-h6"
                        style={{ fontSize: "15px" }}
                      >
                        Sales Forecast
                      </h6>

                      <p className="mb-0 pfam" style={{ fontSize: "11.8px" }}>
                        <span className="fw-semibold">SORT BY: </span>
                        <span style={{ color: "#878a99" }}>
                          Nov 2021 <MdKeyboardArrowDown />
                        </span>
                      </p>
                    </div>

                    <div className="ps-3">
                      <SalesForcast />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="crm-charts takreeban-bg rounded-1 shadow-sm ">
                    <div className="py-3 px-3 d-flex align-items-center justify-content-between fapfa">
                      <h6
                        className="mb-0 sales-h6"
                        style={{ fontSize: "15px" }}
                      >
                        Deal Type
                      </h6>

                      <p className="mb-0 pfam" style={{ fontSize: "11.8px" }}>
                        <span className="fw-semibold">SORT BY: </span>
                        <span style={{ color: "#878a99" }}>
                          Monthly <MdKeyboardArrowDown />
                        </span>
                      </p>
                    </div>

                    <div className="ps-3">
                      <DealTypeChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="crm-last-chart takreeban-bg rounded-1 shadow-sm shadow-sm">
                <div className="py-3 px-3 d-flex align-items-center justify-content-between fapfa">
                  <h6 className="mb-0 sales-h6" style={{ fontSize: "15px" }}>
                    Balance Overview
                  </h6>

                  <p className="mb-0 pfam" style={{ fontSize: "11.8px" }}>
                    <span className="fw-semibold">SORT BY: </span>
                    <span style={{ color: "#878a99" }}>
                      Current Year <MdKeyboardArrowDown />
                    </span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center mt-3">
                  <div className="d-flex align-items-center gap-3 fmaf pe-3">
                    <h5 className="mb-0" style={{ color: "#405189" }}>
                      $584k{" "}
                    </h5>
                    <span className="faafp">Revenue</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 fmaf pe-3">
                    <h5 className="mb-0 home-sec-2-box-h5">$497k</h5>
                    <span className="faafp">Expenses</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 fmaf pe-3">
                    <h5 className="mb-0 home-sec-2-box-h5">3.6%</h5>
                    <span className="faafp">Profit Ratio</span>
                  </div>
                </div>

                <div className="px-3">
                  <BalanceOverviewChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap px-3 pb-4 gap-4">
          <div className="deals-status py-3 takreeban-bg shadow-sm rounded-1">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Deals Status</h6>
              <span style={{ fontSize: "13px", color: "#878aa6" }}>
                02 Nov 2021 to 31 Dec 2021 <MdKeyboardArrowDown />
              </span>
            </div>
            <div className="overflow-x-auto products_scrollbar">
              <table className="table deal-status-table align-middle">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-nowrap">Last Contacted</th>
                    <th className="text-nowrap">Sales Representative</th>
                    <th>Status</th>
                    <th className="text-nowrap">Deal Value</th>
                  </tr>
                </thead>

                <tbody>
                  {deal_status_data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td
                          className="text-nowrap"
                          style={{ fontSize: "13.5px" }}
                        >
                          {item.name}
                        </td>

                        <td style={{ fontSize: "13.5px" }}>
                          {item.last_contact}
                        </td>

                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.sales_representative_img}
                              alt="Donald Risher"
                              width="32"
                              height="32"
                              className="rounded-circle"
                            />
                            <span
                              className="text-nowrap"
                              style={{ fontSize: "13.5px", fontWeight: "500" }}
                            >
                              {item.sales_representative_name}
                            </span>
                          </div>
                        </td>

                        <td>
                          <span
                            className={` deal-status text-nowrap ${
                              item.status === "Deal Won" ? "dealwon-status" : ""
                            } ${
                              item.status === "Intro Call"
                                ? "introcall-status"
                                : ""
                            } ${
                              item.status === "Stuck" ? "stuck-status" : ""
                            } ${
                              item.status === "New Lead" ? "newlead-status" : ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td style={{ fontSize: "13.5px" }}>
                          {item.deal_value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="takreeban-bg my-tasks shadow-sm rounded-1 py-3">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">My Tasks</h6>
              <span
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "13.2px", color: "#878aa6" }}
              >
                <IoSettingsOutline size={15} /> Settings
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 px-3">
              <p
                className="mb-0"
                style={{ fontSize: "13px", color: "#878a99" }}
              >
                <span className="fw-semibold">4</span> of{" "}
                <span className="fw-semibold">10</span> remaining
              </p>
              <button className="d-flex align-items-center gap-2 rounded-1 add-task-btn">
                <span>+</span>
                <span>Add Task</span>
              </button>
            </div>
            <div className="d-flex flex-column justify-content-center px-3 my-tasks-list">
              {tasks_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between py-3"
                    style={{ borderBottom: "1px solid #f4f5f5" }}
                  >
                    <div className="d-flex gap-2 align-items-start">
                      <input type="checkbox" className="mt-1" />
                      <p className="mb-0 tasks-para">{item.text}</p>
                    </div>
                    <p
                      className="mb-0"
                      style={{ fontSize: "12.5px", color: "#878a99" }}
                    >
                      {item.date}
                    </p>
                  </div>
                );
              })}
            </div>
            <p
              className="mb-0 px-3 text-decoration-underline pt-2"
              style={{ color: "#878a99", fontSize: "13.5px" }}
            >
              Show more...
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap px-3 pb-4 gap-4">
          <div className="takreeban-bg my-tasks shadow-sm rounded-1 py-3">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Upcoming Activities</h6>
              <span
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "13.2px", color: "#878aa6" }}
              >
                <TbDotsVertical size={15} />
              </span>
            </div>
            <div className="d-flex flex-column justify-content-center px-3">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="d-flex justify-content-between flex-column flex-lg-row  py-2 gap-3 gap-lg-0 align-items-lg-center agag"
                >
                  <div className="d-flex gap-3 align-items-center">
                    <div className="d-flex flex-column align-items-center rounded-1 johf">
                      <p
                        className="mb-0 home-sec-2-box-h5"
                        style={{ fontWeight: "500", fontSize: "16px" }}
                      >
                        {meeting.date}
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          color: "#878a99",
                          marginTop: "-2px",
                          fontSize: "13.5px",
                        }}
                      >
                        {meeting.day}
                      </p>
                    </div>

                    <div className="d-flex flex-column justify-content-center">
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "13.2px",
                          color: "#878a99",
                          fontWeight: "450",
                        }}
                      >
                        {meeting.time}
                      </p>

                      <p className="mb-0" style={{ fontSize: "14.2px" }}>
                        {meeting.title}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex Activities pe-2">
                    {meeting.users.map((user, i) => (
                      <a
                        key={i}
                        href="#"
                        className="avatar-link"
                        style={{ marginLeft: i === 0 ? "0" : "-10px" }}
                        title={user.name}
                      >
                        <img
                          src={user.img}
                          className="rounded-circle"
                          width={25}
                          height={26}
                          alt={user.name}
                        />
                      </a>
                    ))}

                    <span
                      className={`d-flex align-items-center justify-content-center activies-badge ${
                        meeting.count === 5 ? "a-b-b" : ""
                      } ${meeting.count === 3 ? "a-g-b" : ""} ${
                        meeting.count === 4 ? "a-db-b" : ""
                      } ${meeting.count === 9 ? "a-y-b" : ""}`}
                    >
                      {meeting.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 px-3 d-flex justify-content-between align-items-center flex-column flex-lg-row gap-2 gap-lg-0">
              <p
                className="mb-0"
                style={{ color: "#8b8c99", fontSize: "13.5px" }}
              >
                Showing <span className="fw-semibold">4</span> of{" "}
                <span className="fw-semibold">125</span> Results
              </p>
              <div className="d-flex align-items-center gap-1">
                <button className="cart-pages-btn px-2 rounded-1">
                  <RiArrowLeftLongLine color="#878a99" size={13} />
                </button>
                <button className="cart-pages-btn px-2 rounded-1">1</button>
                <button
                  className="cart-pages-btn px-2 rounded-1"
                  style={{ backgroundColor: "#405189", color: "white" }}
                >
                  2
                </button>
                <button className="cart-pages-btn px-2 rounded-1">3</button>
                <button className="cart-pages-btn px-2 rounded-1">
                  <RiArrowRightLongLine color="#878a99" size={13} />
                </button>
              </div>
            </div>
          </div>
          <div className="closing-deals-card products_scrollbar takreeban-bg shadow-sm rounded-1 py-3">
            <div className="d-flex justify-content-between align-items-center px-3 border-e9ebec pb-2">
              <h6 className="source-chart-h6">Closing Deals</h6>

              <select className="closing-deals-select">
                <option>Canceled Deals</option>
              </select>
            </div>

            <div className="table-responsive takreeban-bg pt-3 px-3">
              <table className="closing-deals-table takreeban-bg">
                <thead>
                  <tr>
                    <th>Deal Name</th>
                    <th>Sales Rep</th>
                    <th>Amount</th>
                    <th>Close Date</th>
                  </tr>
                </thead>

                <tbody>
                  {closing_deals_data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.deal_name}</td>

                      <td>
                        <div className="d-flex align-items-center gap-2 sales-rep">
                          <img src={item.img} alt={item.name} />
                          <span>{item.name}</span>
                        </div>
                      </td>

                      <td>{item.amount}</td>

                      <td>{item.close_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crm;
