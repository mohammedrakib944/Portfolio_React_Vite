import { Parallax } from "react-parallax";

// internal imports
import style from "../../assets/common.module.css";
import "./home.css";
import BG1 from "../../assets/img/bg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Parallax className="landing" bgImage={BG1} strength={700}>
        <div className="landingContent">
          <h5>I'm Rakib</h5>
          <h1>WEB DEVELOPER</h1>
          <p>expert on MERN stack</p>
          <button className="custom-btn">CONTACT</button>
        </div>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>PROJECTS</h2>
            <div className="myProject">
              <Link to="#" className="ISP">
                ISP-Management
              </Link>

              <Link to="#" className="ecommerce">
                E-commenrce
              </Link>
              <Link to="#" className="blog">
                Blog
              </Link>
              <Link to="#" className="dashboard">
                Dashboard
              </Link>
              <Link to="#" className="portfolio">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>MY SKILLS</h2>
            <div className="skillsSection">
              <div className="frontEnd">
                <h4>FRONT END</h4>

                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>React js</p>
                <p>Rest API</p>
              </div>
              <div className="backEnd">
                <h4>BACK END</h4>
                <p>Node js</p>
                <p>Express js</p>
                <p>PHP</p>
                <hr />
                <h4>DATABASE</h4>
                <p>MySql</p>
                <p>Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gotoAboutSection">
          <button className="custom-btn aboutBtn">ABOUT ME</button>
        </div>
      </div>
    </>
  );
}
