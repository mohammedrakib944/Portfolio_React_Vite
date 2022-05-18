import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// internal imports
import "./nav.css";

export default function Nav() {
  const [toggleButton, setToggleButton] = useState("hideNav");
  const [toggleSetting, setToggleSetting] = useState("");

  window.onscroll = function () {
    const navi = document.querySelector(".navSection");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };

  function changePrimaryColor(color) {
    document.documentElement.style.setProperty("--primaryColor", color);
  }

  return (
    <>
      <div className="navSection">
        <div className="settingsSilder">
          <button onClick={() => setToggleSetting("showSetting")}>
            <i class="fa-solid fa-palette"></i>
            {/* <i class="fa-solid fa-brush"></i> */}
          </button>
        </div>

        <div className={`settings ${toggleSetting}`}>
          <button className="hideSetting" onClick={() => setToggleSetting("")}>
            <i class="fa-solid fa-angles-left"></i>
          </button>
          <h5 className="settingsTitle">Settings</h5>
          <hr />
          <h6 className="colorTitle">Primary Color</h6>
          <div className="primaryColorChage">
            <button
              className="colorBtn redBg"
              onClick={() => changePrimaryColor("#ff0068")}
            ></button>
            <button
              className="colorBtn greenBg"
              onClick={() => changePrimaryColor("#b9ff00")}
            ></button>
            <button
              className="colorBtn blueBg"
              onClick={() => changePrimaryColor("#62d8ff")}
            ></button>
            <button
              className="colorBtn purpleBg"
              onClick={() => changePrimaryColor("#b774f9")}
            ></button>
            <button
              className="colorBtn yellowBg"
              onClick={() => changePrimaryColor("#f1c40f")}
            ></button>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="menubar">
                <button
                  className="hideMenu"
                  onClick={() => setToggleButton("showNav")}
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
                <NavLink to="/">
                  <h2 className="Logo">
                    Md. <strong> Rakib</strong>
                  </h2>
                </NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <ul className={`navigation ${toggleButton}`}>
                <span
                  className="hideNavigation"
                  onClick={() => setToggleButton("hideNav")}
                ></span>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">Partnars</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
