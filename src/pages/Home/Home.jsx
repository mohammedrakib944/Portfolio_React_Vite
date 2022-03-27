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
              <Link to="project/isp" className="ISP">
                ISP-Management
              </Link>

              <Link to="project/ecommerce" className="ecommerce">
                NFT
              </Link>
              <Link to="project/socialMedia" className="blog">
                Social Media
              </Link>
              <Link to="project/movie" className="dashboard">
                Movie
              </Link>
              <Link to="project/portfolio" className="portfolio">
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
                <p>UI/UX</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>React js</p>
                <p>Rest API</p>
                <hr />
                <h4>BACK END</h4>
                <p>Node js</p>
                <p>Express js</p>
                <p>PHP</p>
              </div>
              <div className="backEnd">
                <h4>DATABASE</h4>
                <p>MySql</p>
                <p>Mongo DB</p>
                <hr />
                <h4>OTHERS</h4>
                <p>CP(Solve 450+ Problems)</p>
                <p>Networking</p>
                <p>HTTP</p>
                <p>SEO</p>
                <p>Git/GitHub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gotoAboutSection">
          <Link className="custom-btn aboutBtn" to="/about">
            ABOUT ME
          </Link>
        </div>
      </div>
    </>
  );
}
