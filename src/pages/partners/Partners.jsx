import { Parallax } from "react-parallax";

// internal imports
import "./partners.css";
import "../about/about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";
import { data } from "./data";
import Team from "../../components/team/Team";

export default function Partners() {
  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>TEAM</h2>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="partNersWrapper">
              <div className="teams">
                {data.map((val, index) => (
                  <Team key={index} details={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
