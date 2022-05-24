import React from "react";
import { Link } from "react-router-dom";
import "./team.css";

const Team = ({ details }) => {
  const { dp, name, title, pera, facebook, github, linkdin } = details;
  return (
    <div className="TeamCard">
      <img
        src={dp}
        className="img-fluid rounded-start team-card-image"
        alt="..."
      />
      <div className="cardBody">
        <h5 className="mt-3">{name}</h5>
        <h6>{title}</h6>
        {name === "Md.Rakibuzzaman" ? (
          <Link to="/about" className="AboutMeBTN">
            About me
          </Link>
        ) : (
          <p>{pera}</p>
        )}
        <ul className="footerIcons">
          <a href={facebook} target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href={github} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={linkdin} target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Team;
