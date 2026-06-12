import React, { useContext, useEffect } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { LayoutChangeContext } from "../context/LayoutChange";
import { Sidebar_Context } from "../context/Sidebar_Context";
import { Offcanvas } from "bootstrap";

const SettingsBtn = ({themeSwitch ,setThemeSwitch}) => {
  const { layout, setLayout } = useContext(LayoutChangeContext);
  const {sidebarBgChange, setSidebarBgChange} = useContext(Sidebar_Context)
  const openOffcanvas = () => {
    const offcanvasElement = document.getElementById("layoutChangerBar");
  
    if (offcanvasElement) {
      const bsOffcanvas =
        Offcanvas.getOrCreateInstance(offcanvasElement);
  
      bsOffcanvas.show();
    }
  };
  useEffect(() => {
    openOffcanvas();
  }, []);
  

  return (
    <div className="d-lg-block d-none">
      <div
        className="d-flex align-items-center justify-content-center setting-btn-parent p-3"
        onClick={openOffcanvas}
      >
        <MdOutlineSettings className="setting-btn-icon" size={22} />
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="layoutChangerBar"
      >
        <div className="offcanvas-header theme-customizer-bar-header">
          <p
            className="offcanvas-title"
            style={{ fontSize: "17.5px", fontWeight: "480" }}
          >
            Theme Customizer
          </p>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body Theme_Customizer px-4">
          <p className="mb-0 offcanvas-layout-text">LAYOUT</p>
          <p className="mb-0 offcanvas-cl-text">Choose your layout</p>

          <div className="d-flex gap-4">
            <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setLayout("vertical")}
              >
                <input
                  type="radio"
                  className="form-check-input "
                  checked={layout === "vertical"}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                      layout === "vertical"
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside">
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer"></span>
                      <span className="lay_head_footer"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Vertical
              </p>
            </div>

            <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setLayout("horizontal")}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={layout === "horizontal"}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                      layout === "horizontal"
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside">
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer"></span>
                      <span className="lay_head_footer"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Horizontal
              </p>
            </div>

          </div>
          <p className="mb-0 mt-4 offcanvas-layout-text">COLOR SCHEME</p>
          <p className="mb-0 offcanvas-cl-text">Choose Light or Dark Scheme.</p>
          <div className="d-flex gap-4">
          <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setThemeSwitch(false)}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={themeSwitch === false}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                      themeSwitch === false
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside">
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer"></span>
                      <span className="lay_head_footer"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Light
              </p>
            </div>
          <div>
              <div
                className="set-radio-btn mt-3" style={{backgroundColor:"#212529"}}
                onClick={() => setThemeSwitch(true)}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={themeSwitch === true}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                      themeSwitch === true
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside" style={{backgroundColor:"#383b3f"}}>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#4c4f53"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#4c4f53"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#4c4f53"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#4c4f53"}}></div>
                    </div>

                    <div className="layoutRightSide" style={{backgroundColor:"#212529"}}>
                      <span className="lay_head_footer ms-1" style={{backgroundColor:"#383b3f"}}></span>
                      <span className="lay_head_footer ms-1" style={{backgroundColor:"#383b3f"}}></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Dark
              </p>
            </div>
          </div>
          <p className="mb-0 mt-4 offcanvas-layout-text">SIDEBAR COLOR</p>
          <p className="mb-0 offcanvas-cl-text">Choose a color of Sidebar.</p>
          <div className="d-flex gap-4">
          <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setSidebarBgChange("sidebar-light")}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={sidebarBgChange === "sidebar-light"}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                      sidebarBgChange === "sidebar-light"
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside">
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                      <div className="layout_Logo_Side"></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer"></span>
                      <span className="lay_head_footer"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Light
              </p>
            </div>
          <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setSidebarBgChange("sidebar-dark")}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={sidebarBgChange === "sidebar-dark"}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                    sidebarBgChange === "sidebar-dark"
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout">
                    <div className="layoutLeftside rounded-1" style={{backgroundColor:"#405189"}}>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#536395"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#536395"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#536395"}}></div>
                      <div className="layout_Logo_Side" style={{backgroundColor:"#536395"}}></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer ms-1"></span>
                      <span className="lay_head_footer ms-1"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Dark
              </p>
            </div>
            <div>
              <div
                className="set-radio-btn mt-3"
                onClick={() => setSidebarBgChange("sidebar-gradient")}
              >
                <input
                  type="radio"
                  className="form-check-input custom-radio"
                  checked={sidebarBgChange === "sidebar-gradient"}
                  readOnly
                />

                <label
                  className="vertical_lable"
                  style={{
                    border:
                    sidebarBgChange === "sidebar-gradient"
                        ? "1px solid #0d3b66"
                        : "1px solid transparent",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="vertical_layout rounded-1">
                    <div className="layoutLeftside  gradient-vertical_layout rounded-1">
                      <div className="layout_Logo_Side d-l-l-s"></div>
                      <div className="layout_Logo_Side d-l-l-s"></div>
                      <div className="layout_Logo_Side d-l-l-s"></div>
                      <div className="layout_Logo_Side d-l-l-s"></div>
                    </div>

                    <div className="layoutRightSide">
                      <span className="lay_head_footer"></span>
                      <span className="lay_head_footer"></span>
                    </div>
                  </div>
                </label>
              </div>

              <p
                className="text-center my-1 theme-chooser-text"
                style={{ fontSize: "13.5px" }}
              >
                Gradient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBtn;