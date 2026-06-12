import React, { useContext, useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import us_svg from "./../assets/us.svg";
import spain_svg from "./../assets/spain.svg";
import germany_svg from "./../assets/germany.svg";
import italy_svg from "./../assets/italy.svg";
import russia_svg from "./../assets/russia.svg";
import french_svg from "./../assets/french.svg";
import china_svg from "./../assets/china.svg";
import ae_svg from "./../assets/ae.svg";
import { CiGrid41 } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import avater_1 from "./../assets/avatar-1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Sidebar_Context } from "../context/Sidebar_Context";
import { lgToggleSidebar_Context } from "../context/LgToggleSidebar_Context";
import { MdKeyboardArrowRight } from "react-icons/md";
import github_png from "./../assets/github.png";
import bitbucket_png from "./../assets/bitbucket.png";
import dribble_png from "./../assets/dribbble.png";
import dropbox_png from "./../assets/dropbox.png";
import mail_chimp_png from "./../assets/mail_chimp.png";
import slack_png from "./../assets/slack.png";
import cart_img_1 from "./../assets/img-1.png";
import cart_img_2 from "./../assets/img-2.png";
import cart_img_3 from "./../assets/img-3.png";
import cart_img_4 from "./../assets/img-6.png";
import cart_img_5 from "./../assets/img-5.png";
import { TiWeatherSunny } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import n_m_1 from "./../assets/sfaf.png";
import n_m_2 from "./../assets/n_m_2.png";
import n_m_3 from "./../assets/n_m_3.png";
import n_m_4 from "./../assets/n_m_4.png";
import { LuBellRing } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const Navbar = ({
  toggleFullScreen,
  toggleTheme,
  themeSwitch,
  isFullscreen,
  setIsFullscreen
}) => {

  const { setSidebar } = useContext(Sidebar_Context);
  const { lgToggleSidebar, setLgToggleSidebar } = useContext(
    lgToggleSidebar_Context
  );
  const [flagBox, setFlagBox] = useState(false);
  const [appBox, setAppBox] = useState(false);
  const [navCart, setNavCart] = useState(false);
  const [navNotification, setNavNotification] = useState(false);
  const [notificationAllBtn, setNotificationAllBtn] = useState(true);
  const [notificationMessagesBtn, setNotificationMessagesBtn] = useState(false);
  const [notificationAlertBtn, setNotificationAlertBtn] = useState(false);
  const [navSearch, setNavSearch] = useState(false);
  const [profileBox, setProfileBox] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("language") || us_svg;
  });

  useEffect(() => {
    const handleClickOutside = () => {
      setFlagBox(false);
      setAppBox(false);
      setNavCart(false);
      setNavNotification(false);
      setProfileBox(false);
    };
    window.addEventListener("click", handleClickOutside);
  }, []);

  const flags_data = [
    {
      id: 1,
      img: us_svg,
      name: "English",
    },
    {
      id: 2,
      img: spain_svg,
      name: "Española",
    },
    {
      id: 3,
      img: germany_svg,
      name: "Deutsche",
    },
    {
      id: 4,
      img: italy_svg,
      name: "Italiana",
    },
    {
      id: 5,
      img: russia_svg,
      name: "русский",
    },
    {
      id: 6,
      img: china_svg,
      name: "中国人",
    },
    {
      id: 7,
      img: french_svg,
      name: "francais",
    },
    {
      id: 8,
      img: ae_svg,
      name: "Arabic",
    },
  ];

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  const web_app_data = [
    {
      id: 1,
      img: github_png,
      name: "Github",
      width: 30,
    },
    {
      id: 2,
      img: bitbucket_png,
      name: "Bitbucket",
      width: 20,
    },
    {
      id: 3,
      img: dribble_png,
      name: "Dribble",
      width: 25,
    },
    {
      id: 4,
      img: dropbox_png,
      name: "Dropbox",
      width: 25,
    },
    {
      id: 5,
      img: mail_chimp_png,
      name: "Mail Chimp",
      width: 22,
    },
    {
      id: 6,
      img: slack_png,
      name: "Slack",
      width: 20,
    },
  ];

  const cart_data = [
    {
      id: 1,
      img: cart_img_1,
      name: "Branded T-Shirts",
      quantity: "10 x $32",
      price: 320,
    },
    {
      id: 2,
      img: cart_img_2,
      name: "Bentwood Chair",
      quantity: "15 x $18",
      price: 89,
    },
    {
      id: 3,
      img: cart_img_3,
      name: "Borosil Paper Cup",
      quantity: "3 x $250",
      price: 750,
    },
    {
      id: 4,
      img: cart_img_4,
      name: "Gray Styled T-Shirt",
      quantity: "1 x $1250",
      price: 1250,
    },
    {
      id: 5,
      img: cart_img_5,
      name: "Stillbird Helmet",
      quantity: "2 x $495",
      price: 990,
    },
  ];

  const notification_message_data = [
    {
      id: 1,
      img: n_m_1,
      name: "James Lemire",
      text: "We talked about a project on linkedin.",
      time: "30 MIN AGO",
    },
    {
      id: 2,
      img: n_m_2,
      name: "Angela Bernier",
      text: "Answere to your comment on the cash flow forecast's graph",
      time: "2 HOURS AGO",
    },
    {
      id: 3,
      img: n_m_3,
      name: "Kenneth Brown",
      text: "Mentionned you in his invoice comment on #12501.",
      time: "10 HOURS AGO",
    },
    {
      id: 4,
      img: n_m_4,
      name: "Maureen Gibson",
      text: "We talked about a project on linkedin.",
      time: "3 DAYS AGO",
    },
  ];

  const profile_data_no_2 = [
    {
      id: 1,
      icon: <MdOutlineAccountBalanceWallet size={18} color="#878a99" />,
      name: "Balance : ",
      money: "$5971.67",
    },
    {
      id: 2,
      icon: <FiSettings size={18} color="#878a99" />,
      name: "Settings",
      box: "New",
    },
    {
      id: 3,
      icon: <IoMdLock size={18} color="#878a99" />,
      name: "Lock screen",
    },
    {
      id: 4,
      icon: <MdOutlineLogout size={18} color="#878a99" />,
      name: "Logout",
    },
  ];
  const profile_data_no_1 = [
    {
      id: 1,
      icon: <IoPersonCircle size={18} color="#878a99" />,
      name: "Profile",
    },
    {
      id: 2,
      icon: <LuMessageSquareText size={18} color="#878a99" />,
      name: "Messages",
    },
    {
      id: 3,
      icon: <BiTask size={18} color="#878a99" />,
      name: "Taskboard",
    },
    {
      id: 4,
      icon: <TbWorld size={18} color="#878a99" />,
      name: "Help",
    },
  ];

  return (
    <div className="navbar-honor">
      <nav
        className="d-lg-block sticky-top w-100 z-3 d-none lg-nav"
        style={{ top: "10px" }}
      >
        <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
          <div className="d-flex align-items-center gap-3 nav-first-child px-4">
            <FaArrowRightLong
              onClick={() => setLgToggleSidebar((e) => !e)}
              className={`${lgToggleSidebar ? "d-none" : "d-block"} nav-icons`}
              size={22}
            />
            <RxHamburgerMenu
              onClick={() => setLgToggleSidebar((e) => !e)}
              className={`${lgToggleSidebar ? "d-block" : "d-none"} nav-icons`}
              size={22}
            />
            <div className="nav-input-parent d-flex align-items-center rounded-1 ps-2">
              <IoMdSearch size={18} className="nav-icons" />
              <input
                type="text"
                className="nav-input py-2 ps-2 pe-3 rounded-1"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 px-4 py-2">
            <div
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center"
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox(false);
                setFlagBox((prev) => !prev);
              }}
            >
              <img
                src={selectedLanguage}
                alt=""
                className="flag-img rounded-3"
              />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setFlagBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox(false);
                setAppBox((prev) => !prev);
              }}
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center"
            >
              <CiGrid41 className="nav-icons" size={25} />
            </div>
            <div
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center position-relative"
              onClick={(e) => {
                e.stopPropagation();
                setFlagBox(false);
                setAppBox(false);
                setNavNotification(false);
                setProfileBox(false);
                setNavCart((prev) => !prev);
              }}
            >
              <IoBagOutline className="nav-icons" size={22} />
              <div className="position-absolute shopping-number text-white rounded-3">
                {cart_data.length}
              </div>
            </div>
            <div className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center">


              {isFullscreen ? (
                <MdFullscreenExit
                  onClick={toggleFullScreen}
                  className="nav-icons"
                  size={29}
                />
              ) : (
                <MdFullscreen
                  onClick={toggleFullScreen}
                  className="nav-icons"
                  size={29}
                />
              )}
            </div>
            <div
              onClick={toggleTheme}
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center"
            >
              <IoMoonOutline
                className={`nav-icons ${themeSwitch ? "d-none" : "d-block"}`}
                size={22}
              />
              <TiWeatherSunny
                className={`nav-icons ${themeSwitch ? "d-block" : "d-none"}`}
                size={22}
              />
            </div>
            <div
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center position-relative"
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setNavCart(false);
                setFlagBox(false);
                setProfileBox(false);
                setNavNotification((prev) => !prev);
              }}
            >
              <FaRegBell className="nav-icons" size={22} />
              <div className="position-absolute cart-number text-white rounded-3">
                2
              </div>
            </div>
            {/* <div
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setFlagBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox((prev) => !prev);
              }}
              className="d-flex align-items-center gap-2 r-c-1"
              style={{ padding: "12px 17px", cursor: "pointer" }}
            >
              <img width={34} className="rounded-5" src={avater_1} alt="" />
              <div className="d-flex justify-content-center flex-column">
                <p className="mb-0 anna-adme" style={{ fontSize: "13px" }}>
                  Anna Adame
                </p>
                <p style={{ fontSize: "12px" }} className="mb-0 r-c-2">
                  Founder
                </p>
              </div>
            </div> */}
            <div>
              <Link to={"/signin"}>
                <button className="nav-login-btn">Login</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${flagBox ? "d-block" : "d-none"}`}>
          <div className="flag-box rounded-3 d-flex flex-column justify-content-center py-3 shadow-sm z-3 foa map-text">
            {flags_data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex align-items-center gap-2 ps-3 pe-4 py-2 flag-bg"
                  onClick={() => setSelectedLanguage(item.img)}
                >
                  <img
                    src={item.img}
                    className="flag-box-img rounded-1"
                    alt=""
                  />
                  <p className="mb-0 map-text" style={{ fontSize: "14px" }}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${appBox ? "d-block" : "d-none"}`}>
          <div className="shadow app-box py-3 rounded-2 z-3 foa">
            <div className="d-flex align-items-center justify-content-between px-3 pb-3 r-c-3">
              <p className="mb-0 fw-bold r-c-4">Web Apps</p>
              <button className="rounded-1 px-2 py-1 view-all-apps-btn">
                View All Apps <MdKeyboardArrowRight />
              </button>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3 px-3 map-text">
              {web_app_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-center flex-column gap-2 rounded-2 web-app-child py-3"
                  >
                    <img src={item.img} width={item.width} alt="" />
                    <p
                      className="mb-0"
                      style={{ fontSize: "13.5px", fontWeight: "400" }}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`cart-abso ${navCart ? "d-block" : "d-none"}`}>
          <div className="d-flex justify-content-center align-items-center foa">
            <div className="cart-box py-3 shadow-sm rounded-2">
              <div className="cart-header d-flex justify-content-between align-items-center px-3">
                <p
                  className="mb-0 fw-semibold r-c-5"
                  style={{ fontSize: "19px" }}
                >
                  My Cart
                </p>
                <span className="items-badge fw-semibold px-2 rounded-2">
                  4 items
                </span>
              </div>
              <div className="cart-divider"></div>
              <div className="cart-overflowing products_scrollbar ">
                <div className="d-flex flex-column justify-content-center mt-2  my-2">
                  {cart_data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="cart-item d-flex align-items-center px-4"
                      >
                        <div className="product-img">
                          <img src={item.img} alt="" />
                        </div>

                        <div className="product-content">
                          <h4>{item.name}</h4>
                          <p className="mb-0">{item.quantity}</p>
                        </div>

                        <div className="product-price map-text">
                          {item.price}
                        </div>
                        <button className="cart-remove-btn d-flex align-items-center justify-content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#3678f1"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cart-divider"></div>
              <div className="my-3 pe-4 d-flex justify-content-between align-items-center ps-3">
                <p
                  className="mb-0 fw-semibold r-c-6"
                  style={{ fontSize: "17.5px" }}
                >
                  Total:
                </p>
                <p
                  className="mb-0 fw-semibold r-c-7"
                  style={{ fontSize: "17px" }}
                >
                  $2409.00
                </p>
              </div>
              <div className="px-3">
                <button className="checkout-btn rounded-1">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`notification-abso ${
            navNotification ? "d-block" : "d-none"
          }`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setNavNotification(true);
            }}
            className="notification-wrapper rounded-1"
          >
            <div className="notification-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-1">
                <h6 className="mb-0 fw-semibold text-white">Notifications</h6>
                <span className="green-dot"></span>
              </div>

              <span className="badge rounded-1 bg-light text-dark fw-semibold px-2 py-1">
                4 New
              </span>
            </div>
            <div className="tabs-area" style={{ paddingTop: "13px" }}>
              <ul className="d-flex align-items-center gap-1 list-unstyled ps-3">
                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(false);
                      setNotificationAllBtn(true);
                      setNotificationMessagesBtn(false);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationAllBtn ? "notification-all-btn" : ""
                    }`}
                  >
                    All (4)
                  </button>
                </li>

                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(false);
                      setNotificationAllBtn(false);
                      setNotificationMessagesBtn(true);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationMessagesBtn ? "notification-message-btn" : ""
                    }`}
                  >
                    Messages
                  </button>
                </li>

                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(true);
                      setNotificationAllBtn(false);
                      setNotificationMessagesBtn(false);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationAlertBtn ? "notification-all-btn" : ""
                    }`}
                  >
                    Alerts
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`notification-body products_scrollbar ${
                notificationAllBtn ? "d-block" : "d-none"
              }`}
            >
              <ul className="d-flex justify-content-center flex-column gap-4 ps-0">
                <div className="notification-item align-items-start d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="icon-circle blue-circle">
                      <FiSettings />
                    </div>

                    <div className="ms-3">
                      <p className="notification-text mb-2">
                        Your Elite author Graphic Optimization{" "}
                        <span style={{ color: "#3577f1" }}>reward</span> is
                        ready!
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock style={{ marginTop: "-2px" }} />
                        <span>JUST 30 SEC AGO</span>
                      </div>
                    </div>
                  </div>

                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
                <div className="notification-item d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt=""
                      className="profile-img"
                    />

                    <div className="ms-3">
                      <p className="mb-1 fw-semibold user-name">
                        Angela Bernier
                      </p>

                      <p className="notification-text s-n-p mb-2">
                        Answered to your comment on the cash flow forecast's
                        graph 🔔
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock />
                        <span>48 MIN AGO</span>
                      </div>
                    </div>
                  </div>
                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
                <div className="notification-item d-flex justify-content-between border-0">
                  <div className="d-flex">
                    <div className="icon-circle pink-circle">💬</div>

                    <div className="ms-3">
                      <p className="notification-text mb-2">
                        You have received{" "}
                        <span className="highlight-green">20</span> new messages
                        in the conversation
                      </p>
                    </div>
                  </div>

                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>

                <div className="notification-item d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt=""
                      className="profile-img"
                    />

                    <div className="ms-3">
                      <p className="mb-1 fw-semibold user-name">
                        Angela Bernier
                      </p>

                      <p className="notification-text s-n-p mb-2">
                        Answered to your comment on the cash flow forecast's
                        graph 🔔
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock />
                        <span>48 MIN AGO</span>
                      </div>
                    </div>
                  </div>
                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
              </ul>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="d-flex align-items-center px-3 py-2 rounded-1"
                  style={{
                    backgroundColor: "#daf4f0",
                    border: "none",
                    color: "#2ebeab",
                    fontSize: "14px",
                  }}
                >
                  <span>View All Notifications</span>
                  <TiArrowRight size={20} />
                </button>
              </div>
            </div>
            <div
              className={`notification-body ${
                notificationMessagesBtn ? "d-block" : "d-none"
              }`}
            >
              <ul className="d-flex justify-content-center flex-column gap-4 ps-0">
                {notification_message_data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="notification-item d-flex justify-content-between"
                    >
                      <div className="d-flex">
                        <img src={item.img} alt="" className="profile-img" />

                        <div className="ms-3">
                          <p className="mb-1 fw-semibold user-name">
                            {item.name}
                          </p>

                          <p className="notification-text n-m-t s-n-p mb-2 pe-2">
                            {item.text}
                          </p>

                          <div className="time-text d-flex align-items-center gap-1">
                            <BsClock />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                      <input
                        className="mt-2 notification-item-checkbox"
                        type="checkbox"
                      />
                    </div>
                  );
                })}
              </ul>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="d-flex align-items-center px-3 py-2 rounded-1"
                  style={{
                    backgroundColor: "#daf4f0",
                    border: "none",
                    color: "#2ebeab",
                    fontSize: "14px",
                  }}
                >
                  <span>View All Notifications</span>
                  <TiArrowRight size={20} />
                </button>
              </div>
            </div>
            <div
              className={`${
                notificationAlertBtn
                  ? "d-flex align-items-center justify-content-center h-100"
                  : "d-none"
              } `}
            >
              <div className="d-flex text-box align-items-center justify-content-center flex-column gap-3">
                <LuBellRing size={70} color="#2d527c" />
                <h5 className="mb-0 text-center alert-h5 fw-semibold">
                  Hey! You have no any notifications
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={`${profileBox ? "d-block" : "d-none"}`}>
          <div className="profile-box py-3 shadow rounded-3">
            <p
              className="px-3"
              style={{
                color: "#9194a1",
                fontSize: "12px",
                fontWeight: "500",
                marginBottom: "12px",
              }}
            >
              Welcome, Anna
            </p>
            <div
              className="d-flex flex-column justify-content-center pb-2"
              style={{ borderBottom: "1px solid #e9ebec" }}
            >
              {profile_data_no_1.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center gap-2 px-3 py-2 profile-item"
                  >
                    <span style={{ marginTop: "-4px" }}>{item.icon}</span>
                    <p
                      className="mb-0 nav-profile-name"
                      style={{ fontSize: "13.5px" }}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-column justify-content-center pt-1">
              {profile_data_no_2.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center gap-2 px-3 py-2 profile-item"
                  >
                    <span style={{ marginTop: "-4px" }}>{item.icon}</span>
                    <p
                      className="mb-0 nav-profile-name d-flex align-items-center"
                      style={{ fontSize: "13.5px" }}
                    >
                      {item.name}
                      <span className="fw-semibold ms-1">{item.money}</span>
                      {item.name === "Settings" ? (
                        <span className="item-box-profile rounded-2 fw-semibold">
                          {item.box}
                        </span>
                      ) : null}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <nav className="small-screen-nav d-block d-lg-none py-3 px-2">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <FaArrowRightLong
              onClick={() => setSidebar((prev) => !prev)}
              className="nav-icons"
              size={22}
            />
          </div>
          <div className="d-flex align-items-center gapping-in-sm-nav">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox(false);
                setFlagBox(false);
                setNavSearch((prev) => !prev);
              }}
            >
              <IoMdSearch className="nav-icons" size={22} />
            </div>
            <div
              className="p-1 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center"
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox(false);
                setNavSearch(false);
                setFlagBox((prev) => !prev);
              }}
            >
              <img
                src={selectedLanguage}
                alt=""
                className="flag-img rounded-3"
              />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setFlagBox(false);
                setNavCart(false);
                setNavNotification(false);
                setProfileBox(false);
                setNavSearch(false);
                setAppBox((prev) => !prev);
              }}
              className="p-1 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center"
            >
              <CiGrid41 className="nav-icons" size={25} />
            </div>
            <div
              className="p-2 rounded-5 d-flex align-items-center justify-content-center position-relative"
              onClick={(e) => {
                e.stopPropagation();
                setProfileBox(false);
                setFlagBox(false);
                setAppBox(false);
                setNavNotification(false);
                setNavSearch(false);
                setNavCart((prev) => !prev);
              }}
            >
              <IoBagOutline className="nav-icons" size={22} />
              <div className="position-absolute shopping-number text-white rounded-3">
                {cart_data.length}
              </div>
            </div>
            <div
              className="p-2 rounded-5 nav-hovering-bg d-flex align-items-center justify-content-center position-relative"
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setNavCart(false);
                setFlagBox(false);
                setProfileBox(false);
                setNavSearch(false);
                setNavNotification((prev) => !prev);
              }}
            >
              <FaRegBell className="nav-icons" size={22} />
              <div className="position-absolute cart-number text-white rounded-3">
                2
              </div>
            </div>
            {/* <div
              onClick={(e) => {
                e.stopPropagation();
                setAppBox(false);
                setFlagBox(false);
                setNavCart(false);
                setNavNotification(false);
                setNavSearch(false);
                setProfileBox((prev) => !prev);
              }}
            >
              <img src={avater_1} width={34} className="rounded-5" alt="" />
            </div> */}
            <div>
              <Link to={"/signin"}>
                <button className="nav-login-btn">Login</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${flagBox ? "d-block" : "d-none"}`}>
          <div className="flag-box rounded-3 foa d-flex flex-column justify-content-center py-3 shadow-sm z-3">
            {flags_data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="d-flex align-items-center gap-2 ps-3 pe-4 py-2 flag-bg"
                  onClick={() => setSelectedLanguage(item.img)}
                >
                  <img
                    src={item.img}
                    className="flag-box-img rounded-1"
                    alt=""
                  />
                  <p className="mb-0 map-text" style={{ fontSize: "14px" }}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${appBox ? "d-block" : "d-none"}`}>
          <div className="shadow app-box py-3 rounded-2 foa">
            <div className="d-flex align-items-center justify-content-between px-3 pb-3 r-c-3">
              <p className="mb-0 fw-bold r-c-4">Web Apps</p>
              <button className="rounded-1 px-2 py-1 view-all-apps-btn">
                View All Apps <MdKeyboardArrowRight />
              </button>
            </div>
            <div className="d-flex align-items-center flex-wrap mt-3 px-3">
              {web_app_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-center flex-column gap-2 rounded-2 web-app-child py-3"
                  >
                    <img src={item.img} width={item.width} alt="" />
                    <p
                      className="mb-0 map-text"
                      style={{ fontSize: "13.5px", fontWeight: "400" }}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setNavCart(true);
          }}
          className={`cart-abso ${navCart ? "d-block" : "d-none"}`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <div className="cart-box px-0 shadow-sm rounded-2">
              <div className="cart-header d-flex justify-content-between align-items-center px-3">
                <p
                  className="mb-0 fw-semibold r-c-5"
                  style={{ fontSize: "19px" }}
                >
                  My Cart
                </p>
                <span className="items-badge fw-semibold px-2 rounded-2">
                  4 items
                </span>
              </div>
              <div className="cart-divider"></div>
              <div className="cart-overflowing ">
                <div className="d-flex flex-column  justify-content-center mt-2  my-2">
                  {cart_data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="cart-item d-flex align-items-center px-4"
                      >
                        <div className="product-img">
                          <img src={item.img} alt="" />
                        </div>

                        <div className="product-content">
                          <h4>{item.name}</h4>
                          <p className="mb-0">{item.quantity}</p>
                        </div>

                        <div className="product-price">{item.price}</div>
                        <button className="cart-remove-btn d-flex align-items-center justify-content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#3678f1"
                            viewBox="0 0 256 256"
                          >
                            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cart-divider"></div>
              <div className="my-3 pe-4 d-flex justify-content-between align-items-center ps-3">
                <p
                  className="mb-0 fw-semibold r-c-6"
                  style={{ fontSize: "17.5px" }}
                >
                  Total:
                </p>
                <p
                  className="mb-0 fw-semibold r-c-7"
                  style={{ fontSize: "17px" }}
                >
                  $2409.00
                </p>
              </div>
              <div className="px-3">
                <button className="checkout-btn rounded-1">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`notification-abso ${
            navNotification ? "d-block" : "d-none"
          }`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setNavNotification(true);
            }}
            className="notification-wrapper rounded-1"
          >
            <div className="notification-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-1">
                <h6 className="mb-0 fw-semibold text-white">Notifications</h6>
                <span className="green-dot"></span>
              </div>

              <span className="badge rounded-1 bg-light text-dark fw-semibold px-2 py-1">
                4 New
              </span>
            </div>
            <div className="tabs-area" style={{ paddingTop: "13px" }}>
              <ul className="d-flex align-items-center gap-1 list-unstyled ps-3">
                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(false);
                      setNotificationAllBtn(true);
                      setNotificationMessagesBtn(false);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationAllBtn ? "notification-all-btn" : ""
                    }`}
                  >
                    All (4)
                  </button>
                </li>

                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(false);
                      setNotificationAllBtn(false);
                      setNotificationMessagesBtn(true);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationMessagesBtn ? "notification-message-btn" : ""
                    }`}
                  >
                    Messages
                  </button>
                </li>

                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotificationAlertBtn(true);
                      setNotificationAllBtn(false);
                      setNotificationMessagesBtn(false);
                      setNavNotification(true);
                    }}
                    className={`nav-not-btns px-3 py-2 ${
                      notificationAlertBtn ? "notification-all-btn" : ""
                    }`}
                  >
                    Alerts
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`notification-body ${
                notificationAllBtn ? "d-block" : "d-none"
              }`}
            >
              <ul className="d-flex justify-content-center flex-column gap-4 ps-0">
                <div className="notification-item align-items-start d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="icon-circle blue-circle">
                      <FiSettings />
                    </div>

                    <div className="ms-3">
                      <p className="notification-text mb-2">
                        Your Elite author Graphic Optimization{" "}
                        <span style={{ color: "#3577f1" }}>reward</span> is
                        ready!
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock style={{ marginTop: "-2px" }} />
                        <span>JUST 30 SEC AGO</span>
                      </div>
                    </div>
                  </div>

                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
                <div className="notification-item d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt=""
                      className="profile-img"
                    />

                    <div className="ms-3">
                      <p className="mb-1 fw-semibold user-name">
                        Angela Bernier
                      </p>

                      <p className="notification-text s-n-p mb-2">
                        Answered to your comment on the cash flow forecast's
                        graph 🔔
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock />
                        <span>48 MIN AGO</span>
                      </div>
                    </div>
                  </div>
                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
                <div className="notification-item d-flex justify-content-between border-0">
                  <div className="d-flex">
                    <div className="icon-circle pink-circle">💬</div>

                    <div className="ms-3">
                      <p className="notification-text mb-2">
                        You have received{" "}
                        <span className="highlight-green">20</span> new messages
                        in the conversation
                      </p>
                    </div>
                  </div>

                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>

                <div className="notification-item d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt=""
                      className="profile-img"
                    />

                    <div className="ms-3">
                      <p className="mb-1 fw-semibold user-name">
                        Angela Bernier
                      </p>

                      <p className="notification-text s-n-p mb-2">
                        Answered to your comment on the cash flow forecast's
                        graph 🔔
                      </p>

                      <div className="time-text d-flex align-items-center gap-1">
                        <BsClock />
                        <span>48 MIN AGO</span>
                      </div>
                    </div>
                  </div>
                  <input
                    className="mt-2 notification-item-checkbox"
                    type="checkbox"
                  />
                </div>
              </ul>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="d-flex align-items-center px-3 py-2 rounded-1"
                  style={{
                    backgroundColor: "#daf4f0",
                    border: "none",
                    color: "#2ebeab",
                    fontSize: "14px",
                  }}
                >
                  <span>View All Notifications</span>
                  <TiArrowRight size={20} />
                </button>
              </div>
            </div>
            <div
              className={`notification-body ${
                notificationMessagesBtn ? "d-block" : "d-none"
              }`}
            >
              <ul className="d-flex justify-content-center flex-column gap-4 ps-0">
                {notification_message_data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="notification-item d-flex justify-content-between"
                    >
                      <div className="d-flex">
                        <img src={item.img} alt="" className="profile-img" />

                        <div className="ms-3">
                          <p className="mb-1 fw-semibold user-name">
                            {item.name}
                          </p>

                          <p className="notification-text n-m-t s-n-p mb-2 pe-2">
                            {item.text}
                          </p>

                          <div className="time-text d-flex align-items-center gap-1">
                            <BsClock />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                      <input
                        className="mt-2 notification-item-checkbox"
                        type="checkbox"
                      />
                    </div>
                  );
                })}
              </ul>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="d-flex align-items-center px-3 py-2 rounded-1"
                  style={{
                    backgroundColor: "#daf4f0",
                    border: "none",
                    color: "#2ebeab",
                    fontSize: "14px",
                  }}
                >
                  <span>View All Notifications</span>
                  <TiArrowRight size={20} />
                </button>
              </div>
            </div>
            <div
              className={`${
                notificationAlertBtn
                  ? "d-flex align-items-center justify-content-center h-100"
                  : "d-none"
              } `}
            >
              <div className="d-flex text-box align-items-center justify-content-center flex-column gap-3">
                <LuBellRing size={70} color="#2d527c" />
                <h5 className="mb-0 text-center alert-h5 fw-semibold">
                  Hey! You have no any notifications
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`${profileBox ? "d-block" : "d-none"}`}>
          <div className="profile-box py-3 shadow rounded-3">
            <p
              className="px-3"
              style={{
                color: "#9194a1",
                fontSize: "12px",
                fontWeight: "500",
                marginBottom: "12px",
              }}
            >
              Welcome, Anna
            </p>
            <div
              className="d-flex flex-column justify-content-center pb-2"
              style={{ borderBottom: "1px solid #e9ebec" }}
            >
              {profile_data_no_1.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center gap-2 px-3 py-2 profile-item"
                  >
                    <span style={{ marginTop: "-4px" }}>{item.icon}</span>
                    <p
                      className="mb-0 nav-profile-name"
                      style={{ fontSize: "13.5px" }}
                    >
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-column justify-content-center pt-1">
              {profile_data_no_2.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center gap-2 px-3 py-2 profile-item"
                  >
                    <span style={{ marginTop: "-4px" }}>{item.icon}</span>
                    <p
                      className="mb-0 nav-profile-name d-flex align-items-center"
                      style={{ fontSize: "13.5px" }}
                    >
                      {item.name}
                      <span className="fw-semibold ms-1">{item.money}</span>
                      {item.name === "Settings" ? (
                        <span className="item-box-profile rounded-2 fw-semibold">
                          {item.box}
                        </span>
                      ) : null}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className={`${navSearch ? "d-block" : "d-none"}`}>
          <div
            className="d-flex align-items-center justify-content-center shadow rounded-1 position-relative"
            style={{ padding: "10px 13px" }}
          >
            <input
              className="sm-nav-input rounded-1"
              placeholder="Search..."
              type="text"
            />
            <div className="search-sm-box">
              <IoMdSearch color="white" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
