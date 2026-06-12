import React, { useState } from "react";
import "./Authentication.css";
import logo from "./../../assets/logo.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const SignIn = () => {
  const [shown, setShown] = useState(false);
  return (
    <>
      <div className="signIn-wrapper">
        <div className="d-flex justify-content-center align-items-center py-lg-5">
          <div className="signin-card">
            <div className="col-12 col-lg-6 sign-sec-1">
              <div className="overlay">
                <div>
                  <Link to={"/"}><img width={110} src={logo} alt="" /></Link>
                </div>

                <div className="quote-section">
                  <RiDoubleQuotesL className="quote" color="#0ab39c" />

                  <div
                    id="testimonialCarousel"
                    className="carousel slide testimonial-carousel"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            Great! Clean code, clean design, easy for
                            customization. Thanks very much!
                          </p>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            Excellent template with beautiful design and smooth
                            responsiveness on every device.
                          </p>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            Easy to customize and very well structured. Highly
                            recommended.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-indicators testimonial-indicators">
                      <button
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>

                      <button
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide-to="1"
                      ></button>

                      <button
                        type="button"
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide-to="2"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 form-section position-relative">
              <h6 className="title">Welcome Back!</h6>
              <p className="subtitle">Sign in to continue to Velzon.</p>

              <div className="mb-3">
                <label style={{ fontSize: "13px" }}>Username</label>
                <input className="sign-form-input"
                  style={{ fontSize: "13px" }}
                  type="text"
                  placeholder="Enter username"
                />
              </div>

              <div className="mb-3">
                <div className="label-row">
                  <label style={{ fontSize: "13px" }}>Password</label>
                  <a href="/">Forgot password?</a>
                </div>
                <div className="position-relative">
                  <input className="sign-form-input"
                    style={{ fontSize: "13px" }}
                    type={shown ? "text" : "password"}
                    placeholder="Enter password"
                  />

                  <span
                    className="eye"
                    onClick={() => setShown(!shown)}
                    style={{ cursor: "pointer" }}
                  >
                    {shown ? (
                      <FaEyeSlash color="#878a99" size={13} />
                    ) : (
                      <FaEye color="#878a99" size={13} />
                    )}
                  </span>
                </div>
              </div>

              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" style={{ fontSize: "13px" }}>
                  Remember me
                </label>
              </div>

              <button className="btn-login">Sign In</button>

              <div className="social-wrapper d-flex align-items-center justify-content-center gap-4">
                <div className="line"></div>
                <p className="mb-0 text-black" style={{ fontSize: "13px" }}>
                  Sign In with
                </p>
                <div className="line"></div>
              </div>

              <div className="d-flex gap-1 justify-content-center mt-lg-4 mt-2">
                <div
                  className="social-icons rounded-1"
                  style={{ backgroundColor: "#405189" }}
                >
                  <FaFacebookF size={15} color="white" />
                </div>
                <div
                  className="social-icons rounded-1"
                  style={{ backgroundColor: "#f06548" }}
                >
                  <FaGoogle size={15} color="white" />
                </div>
                <div
                  className="social-icons rounded-1"
                  style={{ backgroundColor: "#212529" }}
                >
                  <FaGithub size={15} color="white" />
                </div>
                <div
                  className="social-icons rounded-1"
                  style={{ backgroundColor: "#299cdb" }}
                >
                  <FaTwitter size={15} color="white" />
                </div>
              </div>

              <p className="signup-text text-center mt-4 mt-lg-0">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          © 2026 Velzon. Crafted with <FaHeart color="#f06548"/> by Muhammad Mustafa
        </footer>
      </div>
    </>
  );
};

export default SignIn;
