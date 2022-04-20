import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// internal imports
import "./nav.css";

export default function Nav() {
  const [toggleButton, setToggleButton] = useState("hideNav");

  window.onscroll = function () {
    const navi = document.querySelector(".navSection");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };

  return (
    <div className="navSection">
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
  );
}
