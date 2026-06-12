import React, { useContext } from "react";
import { LayoutChangeContext } from "../context/LayoutChange";

const Footer = () => {
  const { layout } = useContext(LayoutChangeContext);
  return (
    <div className="footer-parent">
      <footer className={`${layout === "horizontal" ? "container" : ""}`}>
        <div className="d-flex align-items-center footer justify-content-between px-4 flex-wrap py-3">
          <p className="mb-0 text-center text-lg-start">2026 © Velzon.</p>
          <p className="mb-0 text-center text-lg-start">
            Design & Developed by Muhammad Mustafa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
