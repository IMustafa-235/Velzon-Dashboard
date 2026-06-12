import React, { useContext, useState } from "react";
import Logo from "./../assets/logo.png";
import blackLogo from "./../assets/logo-dark.png";
import { RiDashboard2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { Sidebar_Context } from "../context/Sidebar_Context";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { sidebar, setSidebar, sidebarBgChange } = useContext(Sidebar_Context);
  const sidebarData = [
    {
      title: "Dashboard",
      icon: <RiDashboard2Line size={19} />,
      arrow: true,
      items: [
        { name: "Home", url: "/" },
        { name: "Analytics", url: "/analytics" },
        { name: "CRM", url:"/crm"},
        { name: "Ecommerce" , url:"/ecommerce"},
        { name: "Crypto", url:"/crypto" },
        { name: "Projects", url:"/projects" },
        { name: "NFT", url:"/nft" },
        { name: "Job", url:"/job" },
        { name: "Blog", badge: "New", url:"/blog" },
      ],
    },

    {
      title: "Apps",
      icon: <RiApps2Line size={19} />,
      arrow: true,
      items: [
        {
          name: "Calendar",
          subMenu: ["Main Calendar", "Month Grid"],
          url:"/calendar"
        },

        { name: "Chat", url:"/chat" },

        {
          name: "Email",
          subMenu: ["Mailbox", "Email Templates"],
          url:"/email"
        },

        {
          name: "Ecommerce",
          subMenu: [
            "Products",
            "Product Details",
            "Create Product",
            "Orders",
            "Order Details",
            "Customers",
            "Shopping Cart",
            "Checkout",
            "Sellers",
            "Sellers Details",
          ],
          url:"/ecommerce"
        },

        {
          name: "Projects",
          subMenu: ["List", "Overview", "Create Project"],
          url:"/projects"
        },

        {
          name: "Tasks",
          subMenu: ["Kanban Board", "List View", "Task Details"],
          url:"/tasks"
        },

        {
          name: "CRM",
          subMenu: ["Contacts", "Companies", "Deals", "Leads"],
          url:"/crm"
        },

        {
          name: "Crypto",
          subMenu: [
            "Transactions",
            "Buy & Sell",
            "Orders",
            "My Wallet",
            "ICO List",
            "KYC Application",
          ],
          url:"/crypto"
        },

        {
          name: "Invoices",
          subMenu: ["List View", "Details", "Create Invoice", "Leads"],
          url:"/invoices"
        },

        {
          name: "Support Tickets",
          subMenu: ["List View", "Ticket Details"],
          url:"/support tickets"
        },

        {
          name: "NFT Marketplace",
          subMenu: [
            "Marketplace",
            "Explore Now",
            "Live Auction",
            "Item Details",
            "Collections",
            "Creators",
            "Ranking",
            "Wallet Connect",
            "Create NFT",
          ],
          url:"/nft marketplace"
        },

        { name: "File Manager", url:"/file manager" },
        { name: "To Do", url:"/to do" },

        {
          name: "Jobs",
          subMenu: [
            "Statics",
            "Job Lists",
            "Candidate Lists",
            "Application",
            "New Job",
            "Companies List",
            "Job Categories",
          ],
          url:"/jobs"
        },

        { name: "API Key", url:"/api key" },
      ],
    },

    {
      title: "Layouts",
      icon: <FiLayout size={19} />,
      badge: "Hot",
      items: [
        { name: "Horizontal", url:"/horizontal" },
        { name: "Detached", url:"/detached" },
        { name: "Two Column", url:"/two column" },
        { name: "Hovered", url:"hovered" },
      ],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setSidebar((prev) => !prev)}
        className={`sidebar-overlay ${sidebar ? "d-block" : "d-none"}`}
      ></div>
      <div
        className={`py-4 sidebar-wrapper ${
          sidebarBgChange === "sidebar-light" ? "sidebar-light" : ""
        } ${sidebarBgChange === "sidebar-dark" ? "sidebar-dark" : ""} ${
          sidebarBgChange === "sidebar-gradient" ? "sidebar-gradient" : ""
        }
    ${sidebar ? "sidebar-block" : "sidebar-none"}`}
      >
        <div
          className={`${
            sidebarBgChange === "sidebar-light" ? "d-block" : "d-none"
          }`}
        >
          <Link
            to="/"
            className="logo-parent justify-content-center align-items-center pb-3"
          >
            <img className="" width={100} src={blackLogo} alt="" />
          </Link>
        </div>
        <div
          className={`${
            sidebarBgChange === "sidebar-dark" ||
            sidebarBgChange === "sidebar-gradient"
              ? "d-block"
              : "d-none"
          }`}
        >
          <Link
            to="/"
            className="logo-parent justify-content-center align-items-center pb-3"
          >
            <img className="" width={100} src={Logo} alt="" />
          </Link>
        </div>
        <ul className="nav_scroll">
          <p
            className={`fw-bold mt-lg-3 mb-0 sidebar-menu-text ${
              sidebarBgChange === "sidebar-light" ? "sidebar-text-colors" : ""
            } ${
              sidebarBgChange === "sidebar-gradient"
                ? "sidebar-text-colors"
                : ""
            }`}
            style={{ fontSize: "13px" }}
          >
            MENU
          </p>
          {sidebarData.map((item, index) => {
            return (
              <div className="ps-1 mt-lg-4 mt-3 pe-4" key={index}>
                <div
                  className={`d-flex align-items-center justify-content-between ${
                    sidebarBgChange === "sidebar-light"
                      ? "parent-sidebar-texts"
                      : ""
                  }`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className={`${
                        sidebarBgChange === "sidebar-light"
                          ? "parent-sidebar-texts"
                          : "text-white"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <p
                      className={`mb-0 ${
                        sidebarBgChange === "sidebar-light"
                          ? "parent-sidebar-texts"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {item.arrow && (
                    <MdKeyboardArrowDown
                      className={`${
                        sidebarBgChange === "sidebar-light"
                          ? "arrow-down-s-p-t"
                          : "text-white"
                      }`}
                      size={19}
                    />
                  )}
                </div>

                <div className="d-flex flex-column gap-1 justify-content-center mt-3">
                  {item.items.map((navItem, navIndex) => {
                    return (
                      <div key={navIndex}>
                        <div
                          className={`d-flex justify-content-between  align-items-center
                      ${
                        location.pathname === navItem.url
                          ? "text-white"
                          : "sidebar-text-colors"
                      }
                      `}
                        >
                          <NavLink
                            to={navItem.url}
                            className={({ isActive }) =>
                              `d-flex align-items-center gap-3 text-decoration-none px-3 py-2 rounded ${
                                isActive
                                  ? "text-white"
                                  : sidebarBgChange === "sidebar-gradient"
                                  ? "text-white"
                                  : sidebarBgChange === "sidebar-light"
                                  ? "sidebar-text-colors_light"
                                  : "text-color"
                              }`
                            }
                            style={{ fontSize: "14.5px" }}
                          >
                            <FiMinus size={10} />

                            <span>{navItem.name}</span>
                          </NavLink>
                          {navItem.subMenu && (
                            <MdKeyboardArrowRight
                              className={`text-color ${
                                sidebarBgChange === "sidebar-light"
                                  ? "sidebar-text-colors"
                                  : ""
                              } ${
                                sidebarBgChange === "sidebar-gradient"
                                  ? "text-white"
                                  : ""
                              }`}
                              size={18}
                            />
                          )}

                          {navItem.badge && (
                            <div
                              className="text-white px-1 rounded-1 fw-semibold"
                              style={{
                                backgroundColor: "#0ab39c",
                                fontSize: "11px",
                              }}
                            >
                              {navItem.badge}
                            </div>
                          )}
                        </div>

                        {navItem.subMenu && (
                          <div className="ps-2">
                            <ul
                              className={`text-color d-flex flex-column justify-content-center mb-0 ${
                                sidebarBgChange === "sidebar-light"
                                  ? "sidebar-text-colors"
                                  : ""
                              } ${
                                sidebarBgChange === "sidebar-gradient"
                                  ? "text-white"
                                  : ""
                              }`}
                              style={{
                                fontSize: "14.5px",
                                gap: "13px",
                                marginTop: "13px",
                              }}
                            >
                              {navItem.subMenu.map((subItem, subIndex) => {
                                return <li key={subIndex}>{subItem}</li>;
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
