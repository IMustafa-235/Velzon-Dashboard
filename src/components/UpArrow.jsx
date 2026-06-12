import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const UpArrow = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".mainLayout-no-2");

    const handleScroll = () => {
      if (container.scrollTop > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    const container = document.querySelector(".mainLayout-no-2");

    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBtn && (
        <div
          className="arrowUp-btn-parent"
          onClick={goTop}
        >
          <button
            className="d-flex align-items-center justify-content-center rounded-1"
            style={{
              backgroundColor: "#f06548",
              padding: "12px 13px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaArrowUp color="white" size={12} />
          </button>
        </div>
      )}
    </>
  );
};

export default UpArrow;