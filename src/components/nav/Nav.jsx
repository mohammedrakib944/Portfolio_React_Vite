import React from "react";
import { NavLink } from "react-router-dom";

// internal imports
import "./nav.css";

export default function Nav() {
  window.onscroll = function () {
    const navi = document.querySelector(".navSection");
    let height = window.pageYOffset;
    if (height >= 100) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };

  return (
    <div className="navSection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="Logo">
              Md. <strong> Rakib</strong>
            </h2>
          </div>
          <div className="col-md-4">
            <ul className="navigation">
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
