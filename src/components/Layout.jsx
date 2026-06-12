import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import HorizontalNavbar from "./HorizontalNavbar";
import SettingsBtn from "./SettingsBtn";
import Footer from "./Footer";
import UpArrow from "./UpArrow";

import { LayoutChangeContext } from "../context/LayoutChange";

const Layout = () => {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [themeSwitch, setThemeSwitch] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme ? JSON.parse(saveTheme) : false;
  });

  const { layout } = useContext(LayoutChangeContext);

  const containerRef = useRef();

  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleTheme = () => {
    setThemeSwitch(!themeSwitch);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeSwitch));
  }, [themeSwitch]);

  return (
    <div
      ref={containerRef}
      className={`${layout === "vertical" ? "container-fluid" : ""} p-0 ${
        themeSwitch ? "dark bg-dark text-white" : "light bg-white"
      }`}
    >
      <div className="row m-0 mainLayout">
        <div
          className={`${
            layout === "vertical" ? "col-9 col-md-3 col-lg-2 p-0" : "d-none"
          }`}
        >
          <Sidebar />
        </div>

        <div
          className={`${
            layout === "horizontal"
              ? "col-12 px-0 container mainLayout-no-2"
              : "col-12 col-lg-10 p-0 mainLayout-no-2"
          }`}
        >
          {layout === "vertical" ? (
            <Navbar
              toggleTheme={toggleTheme}
              themeSwitch={themeSwitch}
              toggleFullScreen={toggleFullScreen}
              isFullscreen={isFullscreen}
              setIsFullscreen={setIsFullscreen}
            />
          ) : (
            <HorizontalNavbar
              toggleTheme={toggleTheme}
              themeSwitch={themeSwitch}
              toggleFullScreen={toggleFullScreen}
              isFullscreen={isFullscreen}
            />
          )}

          <div className="main">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <SettingsBtn themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch} />
      <UpArrow />
    </div>
  );
};

export default Layout;
