import React from "react";
import { TiHome } from "react-icons/ti";
import error_img from "./../assets/error400-cover.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center w-100"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        
        <div className="col-11 col-lg-5">
          <img className="img-fluid" src={error_img} alt="" />
        </div>

        <div className="d-flex flex-column align-items-center gap-2 mt-4 text-center">
          <h4 className="m-0">SORRY PAGE NOT FOUND</h4>

          <p
            className="m-0"
            style={{ fontSize: "13px", color: "#8794a2" }}
          >
            The page you are looking for not available!
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="d-flex align-items-center px-3 py-2 gap-2 error-go-home-btn rounded-1"
          >
            <TiHome /> Back to home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Error;