import React, { useContext, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LayoutChangeContext } from "../context/LayoutChange";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiMedalLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ProjectChart from "../components/ProjectsOverviewChart";
import UpcomingSchedules from "../components/UppcomingShedule";
import img_1 from "./../assets/avatar-1.jpg";
import img_2 from "./../assets/n_m_2.png";
import img_3 from "./../assets/n_m_3.png";
import img_4 from "./../assets/n_m_4.png";
import img_5 from "./../assets/ping-imgg.jpg";
import img_6 from "./../assets/sfaf.png";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { RiArrowRightLongLine } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import chatimg_1 from "./../assets/chatimg_1.jpg";
import chatimg_2 from "./../assets/chatimg_2.jpg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ProjectStatusChart from "./../components/ProjectStatusChart";
import { GoArrowUpRight } from "react-icons/go";
import { Fancybox } from "@fancyapps/ui";
import { CountUp } from "use-count-up";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Projects = () => {
  const { layout } = useContext(LayoutChangeContext);

  const projects_data_1 = [
    {
      id: 1,
      icon: <IoBagHandleOutline size={25} color="#405189" />,
      text_1: "ACTIVE PROJECTS",
      num: "825",
      text_2: "Projects this month",
      arrow: <MdKeyboardArrowDown size={16} />,
      percent: "5.02 %",
    },
    {
      id: 2,
      icon: <PiMedalLight size={25} color="#f7b84b" />,
      text_1: "NEW LEADS",
      num: "7,522",
      text_2: "Leads this month",
      arrow: <MdOutlineKeyboardArrowUp size={16} />,
      percent: "3.58 %",
    },
    {
      id: 3,
      icon: <CiClock2 size={25} color="#299cdb" />,
      text_1: "TOTAL HOURS",
      num: "168h 40m",
      text_2: "Work this month",
      arrow: <MdKeyboardArrowDown size={16} />,
      percent: "10.35 %",
    },
  ];
  const chart_data_no_1 = [
    {
      id: 1,
      number: "9,851",
      name: "Number of Projects",
    },
    {
      id: 2,
      number: "1,026",
      name: "Active Projects",
    },
    {
      id: 3,
      number: "$228.89k",
      name: "Revenue",
    },
    {
      id: 4,
      number: "10,589h",
      name: "Working Hours",
    },
  ];
  const deal_status_data = [
    {
      id: 1,
      name: "Brand Logo Design",
      last_contact: "Sep 20, 2021",
      sales_representative_img: img_1,
      sales_representative_name: "Donald Risher",
      status: "Inprogress",
      progress: "53%",
      due_date: "06 Sep 2021",
      users: [{ img: img_1 }, { img: img_2 }, { img: img_6 }],
    },
    {
      id: 2,
      name: "Redesign - Landing Page",
      last_contact: "Sep 23, 2021",
      sales_representative_img: img_2,
      sales_representative_name: "Prezy William ",
      status: "Pending",
      progress: "0%",
      due_date: "13 Nov 2021",
      users: [{ img: img_5 }, { img: img_3 }],
    },
    {
      id: 3,
      name: "Multipurpose Landing Template",
      last_contact: "Sep 27, 2021",
      sales_representative_img: img_6,
      sales_representative_name: "Boonie Hoynas",
      status: "Completed",
      progress: "100%",
      due_date: "26 Nov 2021",
      users: [{ img: img_2 }, { img: img_4 }],
    },
    {
      id: 4,
      name: "Chat Application",
      last_contact: "Sep 30, 2021",
      sales_representative_img: img_5,
      sales_representative_name: "Pauline Moll",
      status: "Progress",
      progress: "64%",
      due_date: "15 Dec 2021",
      users: [{ img: img_2 }],
    },
    {
      id: 5,
      name: "Create Wireframe",
      last_contact: "Sep 30, 2021",
      sales_representative_img: img_3,
      sales_representative_name: "James Bangs",
      status: "Progress",
      progress: "77%",
      due_date: "21 Dec 2021",
      users: [{ img: img_1 }, { img: img_3 }, { img: img_5 }],
    },
  ];
  const my_tasks_data = [
    {
      id: 1,
      name: "Create new Admin Template",
      deadline: "03 Nov 2021",
      status: "Completed",
      img: img_2,
    },
    {
      id: 2,
      name: "Marketing Coordinator",
      deadline: "17 Nov 2021",
      status: "Progress",
      img: img_4,
    },
    {
      id: 3,
      name: "Administrative Analyst",
      deadline: "26 Nov 2021",
      status: "Completed",
      img: img_3,
    },
    {
      id: 4,
      name: "E-commerce Landing Page",
      deadline: "10 Dec 2021",
      status: "Pending",
      img: img_6,
    },
    {
      id: 5,
      name: "UI/UX Design",
      deadline: "22 Dec 2021",
      status: "Progress",
      img: img_1,
    },
    {
      id: 6,
      name: "Projects Design",
      deadline: "31 Dec 2021",
      status: "Pending",
      img: img_5,
    },
  ];
  const team_members = [
    {
      id: 1,
      img: img_1,
      name: "Donald Risher",
      role: "Product Manager",
      hour_from: "110h",
      hour_to: "150h",
      tasks: 258,
      status_value: 50,
    },
    {
      id: 2,
      img: img_2,
      name: "Jansh Brown",
      role: "Lead Developer",
      hour_from: "83h",
      hour_to: "150h",
      tasks: 105,
      status_value: 40,
    },
    {
      id: 3,
      img: img_4,
      name: "Carroll Adams",
      role: "Lead Designer",
      hour_from: "58h",
      hour_to: "150h",
      tasks: 75,
      status_value: 70,
    },
    {
      id: 4,
      img: img_5,
      name: "William Pinto",
      role: "UI/UX Designer",
      hour_from: "96h",
      hour_to: "150h",
      tasks: 85,
      status_value: 20,
    },
    {
      id: 5,
      img: img_3,
      name: "Garry Fournier",
      role: "Web Designer",
      hour_from: "76h",
      hour_to: "150h",
      tasks: 69,
      status_value: 60,
    },
    {
      id: 6,
      img: img_2,
      name: "Susan Denton",
      role: "Lead Designer",
      hour_from: "123h",
      hour_to: "150h",
      tasks: 658,
      status_value: 80,
    },
    {
      id: 7,
      img: img_6,
      name: "Joseph Jackson",
      role: "React Developer",
      hour_from: "117h",
      hour_to: "150h",
      tasks: 125,
      status_value: 70,
    },
  ];
  const statuses = [
    {
      label: "Completed",
      count: "125 Projects",
      hours: "15870hrs",
      color: "#1DB87E",
      dotBg: "#1DB87E",
    },
    {
      label: "In Progress",
      count: "42 Projects",
      hours: "243hrs",
      color: "#2E3A7C",
      dotBg: "#2E3A7C",
    },
    {
      label: "Yet to Start",
      count: "58 Projects",
      hours: "~2050hrs",
      color: "#F5A623",
      dotBg: "#F5A623",
    },
    {
      label: "Cancelled",
      count: "89 Projects",
      hours: "~900hrs",
      color: "#E8512A",
      dotBg: "#E8512A",
    },
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
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
          <p className="mb-0 fw-semibold analytic-text-1-sec">PROJECTS</p>
          <div
            className="d-flex algin-items-center gap-2"
            style={{ fontSize: "13.8px" }}
          >
            <p className="mb-0 d-n-t">Dashboard</p>
            <p className="mb-0 a-s-1-l-t">
              <MdOutlineKeyboardArrowRight />
            </p>
            <p className="mb-0 a-s-1-l-t">Projects</p>
          </div>
        </div>
        <div className="d-flex gap-4 flex-wrap py-4 px-4">
          {projects_data_1.map((item) => {
            return (
              <div
                className="shadow-sm rounded-1 p-3 takreeban-bg project-sec1-boxes"
                key={item.id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-1 ${
                        item.num === "825" ? "mfamnnn" : ""
                      } ${item.num === "7,522" ? "gjapvm" : ""} ${
                        item.num === "168h 40m" ? "jfamaajf" : ""
                      }`}
                      style={{ padding: "12px 12px" }}
                    >
                      {item.icon}
                    </div>
                    <div className="d-flex flex-column justify-content-center gap-3">
                      <p
                        className="mb-0 text-nowrap"
                        style={{ color: "#878a99", fontSize: "13.3px" }}
                      >
                        {item.text_1}
                      </p>

                      <h6
                        className="mb-0 home-sec-2-box-h5"
                        style={{ fontSize: "19px" }}
                      >
                        {item.id === 1 && (
                          <CountUp isCounting end={825} duration={2} />
                        )}

                        {item.id === 2 && (
                          <CountUp
                            isCounting
                            end={7522}
                            duration={2}
                            formatter={(value) =>
                              Math.floor(value).toLocaleString()
                            }
                          />
                        )}

                        {item.id === 3 && (
                          <>
                            <CountUp isCounting end={168} duration={2} />h{" "}
                            <CountUp isCounting end={40} duration={2} />m
                          </>
                        )}
                      </h6>
                      <p
                        className="mb-0 text-nowrap"
                        style={{ color: "#878a99", fontSize: "12.5px" }}
                      >
                        {item.text_2}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`d-flex align-items-center justify-content-center gap-1 px-1 rounded-1 fw-semibold fajaf ${
                      item.text_2 === "Work this month" ||
                      item.text_2 === "Projects this month"
                        ? "oganga"
                        : "fkpajf"
                    }`}
                  >
                    {item.arrow} {item.percent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 pb-4">
          <div
            className="shadow-sm takreeban-bg rounded-1"
            style={{ padding: "13px 0px" }}
          >
            <div className="d-flex align-items-center justify-content-between px-3">
              <h6 className="mb-0 revenue-text">Projects Overview</h6>
              <div className="d-flex gap-1">
                <p className="chart-top-boxes">ALL</p>
                <p className="chart-top-boxes">1M</p>
                <p className="chart-top-boxes">6M</p>
                <p className="chart-top-boxes-last">IY</p>
              </div>
            </div>
            <div className="chart-second-div-1 px-3 mt-3">
              {chart_data_no_1.map((item) => (
                <div key={item.id} className="analytic-chart-second-div-item">
                  <div className="d-flex align-items-center gap-2">
                    <p
                      className={`mb-0 chart-fkafma ${
                        item.number === "10,589h" ? "nfania" : ""
                      }`}
                    >
                      {item.id === 1 && (
                        <CountUp
                          isCounting
                          end={9851}
                          duration={2}
                          formatter={(value) =>
                            Math.floor(value).toLocaleString()
                          }
                        />
                      )}

                      {item.id === 2 && (
                        <CountUp
                          isCounting
                          end={1026}
                          duration={2}
                          formatter={(value) =>
                            Math.floor(value).toLocaleString()
                          }
                        />
                      )}

                      {item.id === 3 && (
                        <>
                          $
                          <CountUp
                            isCounting
                            end={228.89}
                            duration={2}
                            formatter={(value) => value.toFixed(2)}
                          />
                          k
                        </>
                      )}

                      {item.id === 4 && (
                        <>
                          <CountUp
                            isCounting
                            end={10589}
                            duration={2}
                            formatter={(value) =>
                              Math.floor(value).toLocaleString()
                            }
                          />
                          h
                        </>
                      )}
                    </p>
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
            <ProjectChart />
          </div>
        </div>

        <div className="px-4">
          <UpcomingSchedules />
        </div>

        <div className="d-flex flex-wrap px-4 py-4 gap-4">
          <div className="deals-status py-3 products_scrollbar takreeban-bg shadow-sm rounded-1">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Active Projects</h6>
              <button className="active-projects-export-btn rounded-1">
                Export Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table deal-status-table project-famjfa align-middle">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th className="text-nowrap">Project Lead</th>
                    <th className="text-nowrap">Progress</th>
                    <th className="text-nowrap">Assignee</th>
                    <th>Status</th>
                    <th className="text-nowrap">Due Date</th>
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

                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.sales_representative_img}
                              alt="Donald Risher"
                              width="27"
                              height="27"
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

                        <td style={{ fontSize: "13.5px" }}>
                          <div className="d-flex align-items-center gap-1">
                            <p
                              className="mb-0"
                              style={{ color: "#8f939f", fontSize: "13px" }}
                            >
                              {item.progress}
                            </p>
                            <div className="progress-active-projects">
                              <p
                                className="bar-active-projects"
                                style={{ width: item.progress }}
                              ></p>
                            </div>
                          </div>
                        </td>

                        <div
                          className="d-flex Activities pe-2"
                          style={{ backgroundColor: "transparent" }}
                        >
                          {item.users.map((user, i) => (
                            <img
                              key={i}
                              src={user.img}
                              className="rounded-circle"
                              width={25}
                              height={26}
                              alt=""
                              style={{
                                marginLeft: i === 0 ? "0" : "-10px",
                                border: i === 0 ? "none" : "2px solid #fff",
                              }}
                            />
                          ))}
                        </div>

                        <td>
                          <span
                            className={` active-project-table text-nowrap ${
                              item.status === "Completed"
                                ? "dealwon-status"
                                : ""
                            } ${
                              item.status === "Progress" ||
                              item.status === "Inprogress"
                                ? "introcall-status"
                                : ""
                            } ${
                              item.status === "Pending" ? "stuck-status" : ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td
                          style={{ fontSize: "13.5px", color: "#878a99" }}
                          className="text-nowrap"
                        >
                          {item.due_date}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
          <div className="projects-my-task-table py-3 products_scrollbar takreeban-bg shadow-sm rounded-1">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">My Tasks</h6>
              <div style={{ fontSize: "12px", color: "#878a99" }}>
                All Tasks <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table deal-status-table project-famjfa align-middle">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Assignee</th>
                  </tr>
                </thead>

                <tbody>
                  {my_tasks_data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td
                          className="text-nowrap d-flex align-items-center gap-1"
                          style={{ fontSize: "13.5px" }}
                        >
                          <input type="checkbox" />
                          {item.name}
                        </td>

                        <td
                          className="text-nowrap"
                          style={{ fontSize: "13px", color: "#818799" }}
                        >
                          {item.deadline}
                        </td>
                        <td>
                          <span
                            className={` active-project-table text-nowrap ${
                              item.status === "Completed"
                                ? "dealwon-status"
                                : ""
                            } ${
                              item.status === "Progress" ||
                              item.status === "Inprogress"
                                ? "introcall-status"
                                : ""
                            } ${
                              item.status === "Pending" ? "stuck-status" : ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <img
                            src={item.img}
                            alt="Donald Risher"
                            width="27"
                            height="27"
                            className="rounded-circle"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p
              className="text-center text-decoration-underline mb-0"
              style={{ color: "#878a99", fontSize: "13px" }}
            >
              Load More
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-4 px-4 pb-4">
          <div className="takreeban-bg py-2 shadow-sm rounded-1 liusvma">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Team Members</h6>
              <div style={{ fontSize: "13.2px", color: "#878a99" }}>
                <span className="fw-semibold">SORT BY: </span>
                Last 30 Days <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="overflow-x-auto products_scrollbar">
              <table className="table deal-status-table project-famjfa align-middle">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Hours</th>
                    <th>Tasks</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {team_members.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td
                          className="text-nowrap d-flex align-items-center gap-2"
                          style={{ fontSize: "13.5px" }}
                        >
                          <div>
                            <img
                              src={item.img}
                              width={32}
                              className="rounded-1"
                              alt=""
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <p className="mb-0" style={{ fontSize: "12.5px" }}>
                              {item.name}
                            </p>
                            <p
                              className="mb-0"
                              style={{ fontSize: "12.5px", color: "#878a99" }}
                            >
                              {item.role}
                            </p>
                          </div>
                        </td>

                        <td
                          className="text-nowrap"
                          style={{ fontSize: "13.5px" }}
                        >
                          <span>{item.hour_from} : </span>{" "}
                          <span style={{ color: "#818799" }}>
                            {item.hour_to}
                          </span>
                        </td>
                        <td>
                          <p className="mb-0" style={{ fontSize: "13px" }}>
                            {item.tasks}
                          </p>
                        </td>
                        <td>
                          <CircularProgress
                            enableTrackSlot
                            variant="determinate"
                            value={item.status_value}
                            size={25}
                            thickness={5.5}
                            className={`${
                              item.status_value === 20
                                ? "cpp-yellow"
                                : "circle-progress-projects"
                            } ${
                              item.status_value === 80
                                ? "cpp-green"
                                : "circle-progress-projects"
                            }`}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="takreeban-bg pt-2 pb-3 shadow-sm rounded-1 liusvma">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Chat</h6>
              <div style={{ fontSize: "13.2px", color: "#878a99" }}>
                <IoSettingsOutline className="me-2" />
                Setting <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="project_chat pt-4 pb-3 px-3 products_scrollbar">
              <div className="d-flex flex-column jafhaaana">
                <div className="d-flex gap-1">
                  <div className="py-2 px-3 first_chat_msg ms-5">
                    Good morning 😊
                  </div>
                  <HiOutlineDotsVertical
                    className="mt-1 faomafva"
                    color="#878a99"
                  />
                </div>
                <div className="d-flex gap-2">
                  <img
                    src={img_2}
                    width={32}
                    className="rounded-circle"
                    alt=""
                  />
                  <span
                    style={{
                      color: "#878a99",
                      fontSize: "11.5px",
                      alignSelf: "end",
                      fontWeight: "430",
                    }}
                  >
                    09:07 am
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end mt-3 oahunvna">
                <div className="d-flex gap-1">
                  <HiOutlineDotsVertical
                    className="mt-1 fafafanfanfa"
                    color="#878a99"
                  />
                  <div className="py-2 pe-2 ps-4 second_chat_msg">
                    <p className="mb-0">Good morning, How are you?</p>
                    <p className="mb-0">morning, How are you?</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1 mt-2">
                  <LiaCheckDoubleSolid size={14} color="#0ab7b9" />
                  <span
                    style={{
                      color: "#878a99",
                      fontSize: "11.5px",
                      alignSelf: "end",
                      fontWeight: "430",
                    }}
                  >
                    09:08 am
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column mt-4 gap-2">
                <div className="d-flex gap-1 foaojafja">
                  <div className="py-2 px-3 fourth_chat_msg ms-5">
                    Yeah everything is fine. Our next meeting tomorrow at 10.00
                    AM
                  </div>
                  <HiOutlineDotsVertical
                    className="mt-1 nfaanananfa"
                    color="#878a99"
                  />
                </div>
                <div className="d-flex gap-1 anfafha">
                  <div className="py-2 px-3 fourth_chat_msg ms-5">
                    Hey, I'm going to meet a friend of mine at the department
                    store. I have to buy some presents for my parents 🎁.
                  </div>
                  <HiOutlineDotsVertical
                    className="mt-1 nvaloaj"
                    color="#878a99"
                  />
                </div>
                <div className="d-flex gap-2">
                  <img
                    src={img_2}
                    width={32}
                    className="rounded-circle"
                    alt=""
                  />
                  <span
                    style={{
                      color: "#878a99",
                      fontSize: "11.5px",
                      alignSelf: "end",
                      fontWeight: "430",
                    }}
                  >
                    09:10 am
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end mt-3 oahunvna">
                <div className="d-flex gap-1">
                  <HiOutlineDotsVertical
                    className="mt-1 fafafanfanfa"
                    color="#878a99"
                  />
                  <div className="py-2 pe-2 ps-4 sixth_chat_msg">
                    <p className="mb-0">Wow that's great</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1 mt-2">
                  <LiaCheckDoubleSolid size={14} color="#0ab7b9" />
                  <span
                    style={{
                      color: "#878a99",
                      fontSize: "11.5px",
                      alignSelf: "end",
                      fontWeight: "430",
                    }}
                  >
                    09:12 am
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column mt-4">
                <div className="d-flex gap-1 ms-5">
                  <div className="position-relative">
                    <a data-fancybox="gallery" href={chatimg_1}>
                      <img
                        src={chatimg_1}
                        width={90}
                        className="rounded-1"
                        alt=""
                      />
                    </a>
                    <HiOutlineDotsHorizontal
                      color="white"
                      size={20}
                      className="ofaajv"
                    />
                  </div>
                  <div className="position-relative">
                    <a data-fancybox="gallery" href={chatimg_2}>
                      <img
                        src={chatimg_2}
                        width={90}
                        className="rounded-1"
                        alt=""
                      />
                    </a>
                    <HiOutlineDotsHorizontal
                      color="white"
                      size={20}
                      className="ofaajv"
                    />
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <img
                    src={img_2}
                    width={32}
                    className="rounded-circle"
                    alt=""
                  />
                  <span
                    style={{
                      color: "#878a99",
                      fontSize: "11.5px",
                      alignSelf: "end",
                      fontWeight: "430",
                    }}
                  >
                    09:30 am
                  </span>
                </div>
              </div>
            </div>
            <div className="send_msg_project pt-2 d-flex align-items-center gap-2 px-3">
              <input
                type="text"
                placeholder="Enter Massege..."
                className="sending_msg_input rounded-1 px-3 py-2"
              />
              <button className="d-flex align-items-center gap-2 send_msg_btn rounded-1">
                <span className="fjafjafa">Send</span> <IoMdSend />
              </button>
            </div>
          </div>
          <div className="takreeban-bg pt-2 pb-3 shadow-sm rounded-1 liusvma">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Projects Status</h6>
              <div style={{ fontSize: "13.2px", color: "#878a99" }}>
                All Time <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="d-flex justify-content-center py-3">
              <ProjectStatusChart />
            </div>
            <div className="d-flex justify-content-center gap-3">
              <h3 className="home-sec-2-box-h5 mb-0">258</h3>
              <div className="d-flex flex-column justify-content-center">
                <p
                  className="mb-0"
                  style={{ fontSize: "13.5px", color: "#878a99" }}
                >
                  Total Projects
                </p>
                <div className="d-flex align-items-center gap-1">
                  <span
                    style={{ backgroundColor: "#daf4f0", padding: "3px 4px" }}
                    className="d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <GoArrowUpRight color="#0ab39c" size={12} />
                  </span>
                  <span style={{ fontSize: "13px", color: "#0ab39c" }}>
                    +3 New
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-auto px-3 py-3 overflow-x-auto">
              {statuses.map((item, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-center py-2 ${
                    index < statuses.length - 1 ? "border-e9ebec" : ""
                  }`}
                >
                  <span
                    className="rounded-circle me-2 flex-shrink-0"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: item.dotBg,
                      display: "inline-block",
                    }}
                  />
                  <span
                    className="me-auto"
                    style={{ fontSize: "13px", minWidth: "110px" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className=" text-center"
                    style={{
                      fontSize: "13px",
                      minWidth: "100px",
                      color: "#8b919f",
                    }}
                  >
                    {item.count}
                  </span>
                  <span
                    className="text-end fw-medium"
                    style={{
                      fontSize: "12.5px",
                      color: "#21b8a2",
                      minWidth: "80px",
                    }}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
