import { Parallax } from "react-parallax";

// internal imports
import "./partners.css";
import "../about/about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";

export default function Partners() {
  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>PARTNERS</h2>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>PARTNERS</h2>
            <div className="partNersWrapper">
              <br />
              <h2>
                Single <i class="fa-solid fa-face-smile-beam"></i>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
