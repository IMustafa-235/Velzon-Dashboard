import React, { useState, useEffect, useContext } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuArrowUpRight } from "react-icons/lu";
import { LuCircleDollarSign } from "react-icons/lu";
import { GoArrowDownRight } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import Calendar from "./../components/Calendar";
import dayjs from "dayjs";
import ApexChart from "../components/Chart";
import { IoIosArrowDown } from "react-icons/io";
import cart_img_1 from "./../assets/img-1.png";
import cart_img_2 from "./../assets/img-2.png";
import cart_img_3 from "./../assets/img-3.png";
import cart_img_4 from "./../assets/img-6.png";
import cart_img_5 from "./../assets/img-5.png";
import { RiArrowRightLongLine } from "react-icons/ri";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import top_seller_1 from "./../assets/top-sellers-1.png";
import top_seller_2 from "./../assets/top-sellers-2.png";
import top_seller_3 from "./../assets/top-sellers-3.png";
import top_seller_4 from "./../assets/top-sellers-4.png";
import top_seller_5 from "./../assets/top-sellers-5.png";
import SourceChart from "../components/SourceChart";
import { TbReportSearch } from "react-icons/tb";
import avater_1 from "./../assets/avatar-1.jpg";
import avater_2 from "./../assets/n_m_2.png";
import avater_3 from "./../assets/sfaf.png";
import avater_4 from "./../assets/ping-imgg.jpg";
import avater_5 from "./../assets/n_m_3.png";
import { LayoutChangeContext } from "../context/LayoutChange";
import { CountUp } from "use-count-up";
import LocationMap from "./../components/SalesByLocationMap"

const Home = ({ themeSwitch, setThemeSwitch }) => {
  const [calendar, setCalendar] = useState(false);
  const { layout } = useContext(LayoutChangeContext);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [sortBox, setSortBox] = useState(false);
  const [reportBox, setReportBox] = useState(false);
  const [reportBoxNo2, setReportBoxNo2] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setCalendar(false);
      setSortBox(false);
      setReportBox(false);
      setReportBoxNo2(false);
    };
    window.addEventListener("click", handleClickOutside);
  }, []);

  const section_2_boxes = [
    {
      id: 1,
      first: "TOTAL EARNINGS",
      second: <LuArrowUpRight size={13} />,
      anari: "+16.24 %",
      third: "$559.25k",
      fourth: "View net earnings",
      fifth: <LuCircleDollarSign size={22} />,
      prefix: "$",
      suffix: "k",
    },
    {
      id: 2,
      first: "ORDERS",
      second: <GoArrowDownRight color="#f06548" size={13} />,
      anari: "-3.57 %",
      third: "36,894",
      fourth: "View all orders",
      fifth: <IoBagOutline size={22} />,
      prefix: "$",
      suffix: "k",
    },
    {
      id: 3,
      prefix: "$",
      suffix: "k",
      first: "CUSTOMERS",
      second: <LuArrowUpRight size={13} />,
      anari: "+29.08 %",
      third: "183.35M",
      fourth: "See details",
      fifth: <FaRegUserCircle size={22} />,
    },
    {
      prefix: "$",
      suffix: "k",
      id: 4,
      first: "MY BALANCE",
      anari: "+0.00 %",
      third: "$165.89k",
      fourth: "Withdraw money",
      fifth: <IoWalletOutline size={22} />,
    },
  ];

  const chart_data_no_1 = [
    {
      id: 1,
      number: "7,585",
      name: "Orders",
    },
    {
      id: 2,
      number: "$22.89k",
      name: "Earnings",
    },
    {
      id: 3,
      number: "367",
      name: "Refunds",
    },
    {
      id: 4,
      number: "18.92%",
      name: "Conversation Ratio",
    },
  ];

  const best_selling_products_data = [
    {
      id: 1,
      name: "Branded T-Shirts",
      date: "24 Apr 2021",
      img: cart_img_1,
      price: "$29.00",
      price_text: "Price",
      order: 62,
      order_Text: "Orders",
      stock: 510,
      stock_text: "Stock",
      amount: "$1,798",
      amount_text: "Amount",
    },
    {
      id: 2,
      img: cart_img_2,
      name: "Bentwood Chair",
      date: "19 Mar 2021  ",
      price: "$85.20",
      price_text: "Price",
      order: 35,
      order_Text: "Orders",
      stock: 0,
      stock_text: "Stock",
      amount: "$2982",
      amount_text: "Amount",
    },
    {
      id: 3,
      img: cart_img_3,
      name: "Borosil Paper Cup",
      date: "01 Mar 2021 ",
      price: "$14.00",
      price_text: "Price",
      order: 80,
      order_Text: "Orders",
      stock: 749,
      stock_text: "Stock",
      amount: "$1120",
      amount_text: "Amount",
    },
    {
      id: 4,
      img: cart_img_4,
      name: "One Seater Sofa",
      date: "11 Feb 2021 ",
      price: "$127.50",
      price_text: "Price",
      order: 56,
      order_Text: "Orders",
      stock: 0,
      stock_text: "Stock",
      amount: "$7140",
      amount_text: "Amount",
    },
    {
      id: 5,
      img: cart_img_5,
      name: "Stillbird Helmet",
      date: "17 Jan 2021",
      price: "$54",
      price_text: "Price",
      order: 74,
      order_Text: "Orders",
      stock: 805,
      stock_text: "Stock",
      amount: "$3996",
      amount_text: "Amount",
    },
  ];

  const sort_by_day_data = [
    {
      id: 1,
      text: "Today",
    },
    {
      id: 2,
      text: "Yesterday",
    },
    {
      id: 3,
      text: "Last 7 Days",
    },
    {
      id: 4,
      text: "Last 30 Days",
    },
    {
      id: 5,
      text: "This Month",
    },
    {
      id: 6,
      text: "Last Month",
    },
  ];

  const top_sellers_data = [
    {
      id: 1,
      img: top_seller_1,
      name: "iTest Factory",
      date: "Oliver Tyler",
      stuff: "Bags and Wallets",
      stock: 8547,
      stock_text: "Stock",
      price: "$541200",
      percent: "32%",
    },
    {
      id: 2,
      img: top_seller_2,
      name: "Digitech Galaxy",
      date: "John Roberts",
      stuff: "Watches",
      stock: 895,
      stock_text: "Stock",
      price: "$75030",
      percent: "79%",
    },
    {
      id: 3,
      img: top_seller_3,
      name: "Nesta Technologies",
      date: "Harley Fuller",
      stuff: "Bike Accessories",
      stock: 3470,
      stock_text: "Stock",
      price: "$45600",
      percent: "90%",
    },
    {
      id: 4,
      img: top_seller_4,
      name: "Zoetic Fashion",
      date: "James Bowen",
      stuff: "Clothes",
      stock: 5488,
      stock_text: "Stock",
      price: "$29456",
      percent: "40%",
    },
    {
      id: 5,
      img: top_seller_5,
      name: "Meta4Systems",
      date: "Zoe Dennis",
      stuff: "Furniture",
      stock: 4100,
      stock_text: "Stock",
      price: "$11260",
      percent: "57%",
    },
  ];

  const report_data = [
    {
      id: 1,
      text: "Download Report",
    },
    {
      id: 2,
      text: "Export",
    },
    {
      id: 3,
      text: "Report",
    },
  ];

  const orders_data = [
    {
      id: "#VZ2112",
      img: avater_1,
      name: "Alex Smith",
      product: "Clothes",
      amount: "$109.00",
      vendor: "Zoetic Fashion",
      status: "Paid",
      rating: "5.0",
      votes: "(61 votes)",
    },
    {
      id: "#VZ2111",
      img: avater_2,
      name: "Jansh Brown",
      product: "Kitchen Storage",
      amount: "$149.00",
      vendor: "Micro Design",
      status: "Pending",
      rating: "4.5",
      votes: "(61 votes)",
    },
    {
      id: "#VZ2109",
      img: avater_3,
      name: "Ayaan Bowen",
      product: "Bike Accessories",
      amount: "$215.00",
      vendor: "Nesta Technologies",
      status: "Paid",
      rating: "4.9",
      votes: "(89 votes)",
    },
    {
      id: "#VZ2108",
      img: avater_4,
      name: "Prezy Mark",
      product: "Furniture",
      amount: "$199.00",
      vendor: "Syntyce Solutions",
      status: "Unpaid",
      rating: "4.3",
      votes: "(47 votes)",
    },
    {
      id: "#VZ2107",
      img: avater_5,
      name: "Vihan Hudda",
      product: "Bags and Wallets",
      amount: "$330.00",
      vendor: "iTest Factory",
      status: "Paid",
      rating: "4.7",
      votes: "(161 votes)",
    },
  ];

  return (
    <div className="pt-4 pb-4 home-bg">
      <div className={`${layout === "horizontal" ? "container" : ""}`}>
        <div className="d-flex align-items-lg-end gap-3 gap-lg-0 justify-content-between flex-column flex-lg-row px-4">
          <div className="d-flex justify-content-center flex-column gap-1 home-first-sec-first-part">
            <h6 className="mb-0">Good Morning, Anna</h6>
            <p className="mb-0">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <div className="position-relative shadow-sm home-first-sec-second-part d-flex algin-items-center rounded-2">
              <p
                className="mb-0 calendar-text"
                style={{ fontSize: "13px", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCalendar((prev) => !prev);
                }}
              >
                {selectedDate.format("DD MMM, YYYY")}
              </p>
              <button
                className="home-calendar-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCalendar(true);
                  setSortBox(false);
                  setReportBox(false);
                  setReportBoxNo2(false);
                }}
              >
                <FaRegCalendarAlt size={15} color="white" />
              </button>
              <div
                className={`${calendar ? "d-block" : "d-none"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCalendar(true);
                }}
              >
                <Calendar value={selectedDate} setValue={setSelectedDate} />
              </div>
            </div>
            <button className="d-flex align-items-center gap-2 home-first-sec-add-btn rounded-2">
              <MdAddCircleOutline size={14} /> Add Product
            </button>
            <button className="d-flex align-items-center gap-2 home-first-sec-heart-btn rounded-2">
              <TbActivityHeartbeat size={15} />
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap pt-4 gap-3 px-4">
          {section_2_boxes.map((item) => {
            return (
              <div
                key={item.id}
                className="py-3 px-3 home-sec-2-items col-12 col-lg-3 rounded-2 shadow-sm"
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <p className="mb-0 total-earning-text">{item.first}</p>
                  <p
                    className={`mb-0 home-sec-2-rating d-flex align-items-center gap-2 ${
                      item.anari === "-3.57 %" ? "down-anari" : ""
                    } ${item.anari === "+0.00 %" ? "last-anari" : ""}`}
                  >
                    <span>
                      {item.second} {item.anari}
                    </span>
                  </p>
                </div>

                <p
                  className="home-sec-2-box-h5 fw-semibold mb-0"
                  style={{ fontSize: "22px" }}
                >
                  {item.third.startsWith("$") && "$"}

                  <CountUp
                    isCounting
                    end={parseFloat(item.third.replace(/[^0-9.]/g, ""))}
                    duration={2.5}
                    decimalPlaces={
                      parseFloat(item.third.replace(/[^0-9.]/g, "")) % 1 !== 0
                        ? 2
                        : 0
                    }
                  />

                  {item.third.includes("k") && "k"}
                  {item.third.includes("M") && "M"}
                </p>
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-decoration-underline home-sec-2-box-a align-self-end">
                    {item.fourth}
                  </p>
                  <div
                    className={`rounded-2 home-sec-2-box-last d-flex align-items-center justify-content-center mt-1
               ${item.anari === "-3.57 %" ? "jagera" : ""}
                ${item.anari === "+29.08 %" ? "customer-item" : ""}
                 ${item.anari === "+0.00 %" ? "balance-item" : ""}`}
                  >
                    {item.fifth}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4">
          <div className="mt-4 d-flex align-items-center gap-4 flex-column flex-lg-row">
            <div className="chart-parent rounded-2 shadow-sm">
              <div className="d-flex align-items-center justify-content-between p-3">
                <h6 className="mb-0 revenue-text">Revenue</h6>
                <div className="d-flex gap-1">
                  <p className="chart-top-boxes">ALL</p>
                  <p className="chart-top-boxes">1M</p>
                  <p className="chart-top-boxes">6M</p>
                  <p className="chart-top-boxes-last">IY</p>
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap mb-3 chart-second-div">
                {chart_data_no_1.map((item) => {
                  const numericValue = parseFloat(
                    item.number.replace(/[^0-9.]/g, "")
                  );

                  return (
                    <div
                      key={item.id}
                      className="chart-second-div-item d-flex align-items-center justify-content-center flex-column"
                    >
                      <p
                        className="mb-0 chart-fkafma"
                        style={{
                          color: item.number === "18.92%" ? "#0ab39c" : "",
                        }}
                      >
                        {item.number.startsWith("$") && "$"}

                        <CountUp
                          isCounting
                          end={numericValue}
                          duration={2.5}
                          decimalPlaces={numericValue % 1 !== 0 ? 2 : 0}
                          separator=","
                        />

                        {item.number.includes("k") && "k"}
                        {item.number.includes("M") && "M"}
                        {item.number.includes("%") && "%"}
                      </p>

                      <p className="mb-0 chart-pfka text-center">{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <ApexChart />
            </div>
            <div className="map-parent rounded-2 shadow-sm">
              <div className="py-3 px-3 d-flex align-items-center justify-content-between location-heading-parent">
                <h6 className="mb-0 sales-h6">Sales by Locations</h6>
                <button className="export-report-btn rounded-1">
                  Export Report
                </button>
              </div>
              <div className="map px-2 d-none d-lg-block">
                <LocationMap/>
              </div>
              <div className="mt-3 d-flex flex-column justify-content-center gap-3 pb-3">
                <div className="d-flex flex-column justify-content-center gap-2 px-3">
                  <div className="d-flex align-items-center justify-content-between map-text">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Canada
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      75%
                    </p>
                  </div>

                  <div className="prorgress rounded-3">
                    <div
                      className="progress-bar progress-bar-striped bg-primary"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center gap-2 px-3">
                  <div className="d-flex align-items-center justify-content-between map-text">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Greenland
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      47%
                    </p>
                  </div>

                  <div className="prorgress rounded-3">
                    <div
                      className="progress-bar progress-bar-striped bg-primary"
                      role="progressbar"
                      style={{ width: "47%" }}
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center gap-2 px-3">
                  <div className="d-flex align-items-center justify-content-between map-text">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Russia
                    </p>
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      82%
                    </p>
                  </div>

                  <div className="prorgress rounded-3">
                    <div
                      className="progress-bar progress-bar-striped bg-primary"
                      role="progressbar"
                      style={{ width: "82%" }}
                      aria-valuenow="82"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pb-b-sp px-4">
          <div className="d-flex gap-3 flex-column flex-lg-row">
            <div className="best-selling-products-parent rounded-2 shadow-sm py-3 position-relative">
              <div className="d-flex align-items-center justify-content-between px-3 pb-3 border-e9ebec">
                <h6 className="mb-0 best-selling-h6">Best Selling Products</h6>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setCalendar(false);
                    setReportBox(false);
                    setReportBoxNo2(false);
                    setSortBox((e) => !e);
                  }}
                  className="mb-0"
                  style={{ fontSize: "12.5px", cursor: "pointer" }}
                >
                  <span className="fw-semibold map-text">SORT BY: </span>
                  <span style={{ color: "#878c99" }}>
                    Today <IoIosArrowDown size={12} />
                  </span>
                </p>
              </div>
              <div
                className={`sort-today-box py-2 shadow-sm rounded-1 d-flex flex-column ${
                  sortBox ? "d-flex" : "d-none"
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
              <div
                className="d-flex products_scrollbar justify-content-center flex-column"
                style={{ overflowX: "auto" }}
              >
                {best_selling_products_data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex align-items-center justify-content-between b-s-p"
                    >
                      <div
                        className="d-flex align-items-center gap-2 flex-shrink-0"
                        style={{ width: "200px" }}
                      >
                        <div className="p-1 best-selling-imgs rounded-1">
                          <img src={item.img} width={37} alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center gap-1">
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "14.8px" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="mb-0"
                            style={{ color: "#8e929f", fontSize: "13px" }}
                          >
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center gap-4 flex-shrink-0"
                        style={{ width: "230px" }}
                      >
                        <div
                          className="d-flex flex-column justify-content-center gap-1"
                          style={{ width: "50px" }}
                        >
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "13.5px" }}
                          >
                            {item.price}
                          </p>
                          <p
                            className="mb-0"
                            style={{ fontSize: "13.5px", color: "#8e929f" }}
                          >
                            {item.price_text}
                          </p>
                        </div>
                        <div
                          className="d-flex flex-column justify-content-center gap-1"
                          style={{ width: "50px" }}
                        >
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "13.5px" }}
                          >
                            {item.order}
                          </p>
                          <p
                            className="mb-0"
                            style={{ fontSize: "13.5px", color: "#8e929f" }}
                          >
                            {item.order_Text}
                          </p>
                        </div>
                        <div className="d-flex flex-column justify-content-center gap-1">
                          <p
                            className={`mb-0 map-text ${
                              item.stock === 0 ? "d-none" : "d-block"
                            }`}
                            style={{ fontSize: "13.5px" }}
                          >
                            {item.stock}
                          </p>
                          <p
                            className={`mb-0 fw-semibold rounded-1 out-of-stock-best-selling-product ${
                              item.stock !== 0 ? "d-none" : "d-block"
                            }`}
                          >
                            Out of stock
                          </p>
                          <p
                            className="mb-0"
                            style={{ fontSize: "13.5px", color: "#8e929f" }}
                          >
                            {item.stock_text}
                          </p>
                        </div>
                      </div>
                      <div
                        className="d-flex flex-column justify-content-center gap-1 flex-shrink-0"
                        style={{ width: "60px" }}
                      >
                        <p
                          className="mb-0 map-text"
                          style={{ fontSize: "13.5px" }}
                        >
                          {item.amount}
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: "13.5px", color: "#8e929f" }}
                        >
                          {item.amount_text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-3 px-3 d-flex justify-content-between align-items-center flex-column flex-lg-row gap-2 gap-lg-0">
                <p
                  className="mb-0"
                  style={{ color: "#8b8c99", fontSize: "13.5px" }}
                >
                  Showing <span className="fw-semibold">5</span> of{" "}
                  <span className="fw-semibold">25</span> Results
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
            <div className="top-sellers-parent rounded-2 shadow-sm py-3 position-relative">
              <div className="d-flex align-items-center justify-content-between px-3 pb-3 border-e9ebec">
                <h6 className="mb-0 best-selling-h6">Top Sellers</h6>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setCalendar(false);
                    setSortBox(false);
                    setReportBoxNo2(false);
                    setReportBox((e) => !e);
                  }}
                  className="mb-0"
                  style={{ fontSize: "13px", cursor: "pointer" }}
                >
                  <span style={{ color: "#878c99" }}>
                    Report <IoIosArrowDown size={12} />
                  </span>
                </p>
              </div>
              <div
                className={`sort-today-box py-2 shadow-sm rounded-1 d-flex flex-column ${
                  reportBox ? "d-flex" : "d-none"
                }`}
              >
                {report_data.map((item) => {
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
              <div
                className="d-flex products_scrollbar justify-content-center flex-column"
                style={{ overflowX: "auto" }}
              >
                {top_sellers_data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex align-items-center justify-content-between b-s-p"
                    >
                      <div
                        className="d-flex align-items-center gap-2 flex-shrink-0"
                        style={{ width: "200px" }}
                      >
                        <div className="p-1 best-sellers-imgs rounded-1">
                          <img src={item.img} width={34} alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center gap-1">
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "14.8px" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="mb-0"
                            style={{ color: "#8e929f", fontSize: "13px" }}
                          >
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center gap-4 flex-shrink-0"
                        style={{ width: "270px" }}
                      >
                        <div style={{ width: "160px" }}>
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "13.5px" }}
                          >
                            {item.stuff}
                          </p>
                        </div>
                        <div
                          className="d-flex flex-column justify-content-center gap-1"
                          style={{ width: "50px" }}
                        >
                          <p
                            className="mb-0 map-text"
                            style={{ fontSize: "13.5px" }}
                          >
                            {item.stock}
                          </p>
                          <p
                            className="mb-0"
                            style={{ fontSize: "13.5px", color: "#8e929f" }}
                          >
                            {item.stock_text}
                          </p>
                        </div>
                        <div>
                          <p
                            className="mb-0"
                            style={{ fontSize: "13.5px", color: "#8e929f" }}
                          >
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center gap-1 flex-shrink-0 gap-2"
                        style={{ width: "60px" }}
                      >
                        <p
                          className="mb-0 map-text"
                          style={{
                            fontSize: "14.8px",
                            paddingTop: "3px ",
                          }}
                        >
                          {item.percent}
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontSize: "13.5px", color: "#8e929f" }}
                        >
                          <IoMdStats color="#0ab39c" size={21} />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-3 px-3 d-flex justify-content-between align-items-center flex-column flex-lg-row gap-2 gap-lg-0">
                <p
                  className="mb-0"
                  style={{ color: "#8b8c99", fontSize: "13.5px" }}
                >
                  Showing <span className="fw-semibold">5</span> of{" "}
                  <span className="fw-semibold">25</span> Results
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
          </div>
        </div>
        <div className="mt-4 px-4">
          <div className="d-flex align-items-start flex-column flex-lg-row gap-3">
            <div className="pt-3 shadow-sm d-s-e-o-r rounded-2 position-relative">
              <div className="d-flex align-items-center justify-content-between px-lg-3 px-2 border-e9ebec pb-3">
                <h6 className="mb-0 source-chart-h6">Store Visits by Source</h6>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setCalendar(false);
                    setSortBox(false);
                    setReportBox(false);
                    setReportBoxNo2((e) => !e);
                  }}
                  className="mb-0 pt-1"
                  style={{ fontSize: "13px", cursor: "pointer" }}
                >
                  <span style={{ color: "#878c99" }}>
                    Report <IoIosArrowDown size={12} />
                  </span>
                </p>
              </div>
              <div
                className={`sort-today-box py-2 shadow-sm rounded-1 d-flex flex-column ${
                  reportBoxNo2 ? "d-flex" : "d-none"
                }`}
              >
                {report_data.map((item) => {
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
              <div className="py-2">
                <SourceChart />
              </div>
            </div>
            <div className="recent-orders products_scrollbar pt-3 pb-2 rounded-2 shadow-sm">
              <div className="d-flex align-items-center justify-content-between px-2 px-lg-3">
                <h6 className="mb-0 recent-orders-h6">Recent Orders</h6>

                <button className="recent-order-report-btn">
                  <TbReportSearch /> Generate Report
                </button>
              </div>
              <div className="table-responsive mt-3">
                <table className="table recent-orders-table align-middle mb-0">
                  <thead className="order-table-head">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Vendor</th>
                      <th>Status</th>
                      <th>Rating</th>
                    </tr>
                  </thead>

                  <tbody className="tableBody">
                    {orders_data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="order-id">{item.id}</td>

                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                width={35}
                                height={35}
                                style={{
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                                src={item.img}
                                alt=""
                              />

                              <p className="mb-0 recent-order-names">
                                {item.name}
                              </p>
                            </div>
                          </td>

                          <td className="recent-order-names">{item.product}</td>

                          <td
                            className="amount-text"
                            style={{ color: "#0ab3a9" }}
                          >
                            {item.amount}
                          </td>

                          <td className="recent-order-names">{item.vendor}</td>

                          <td>
                            <span
                              className="status-badge"
                              style={{
                                backgroundColor:
                                  item.status === "Paid"
                                    ? "#daf4f0"
                                    : item.status === "Unpaid"
                                    ? "#fde8e4"
                                    : item.status === "Pending"
                                    ? "#fef4e4"
                                    : "transparent",
                                color:
                                  item.status === "Paid"
                                    ? "#45b39c"
                                    : item.status === "Unpaid"
                                    ? "#f06548"
                                    : item.status === "Pending"
                                    ? "#f7b84b"
                                    : "transparent",
                              }}
                            >
                              {item.status}
                            </span>
                          </td>

                          <td className="rating-text recent-order-names">
                            {item.rating}{" "}
                            <span
                              style={{ color: "#92a0a9", fontSize: "11.5px" }}
                            >
                              {item.votes}
                            </span>
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
      </div>
    </div>
  );
};

export default Home;
