import style from "../../assets/common.module.css";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Project from "../project/Project";
import fiverr from "../../assets/img/fiverr.png";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <div className="landing">
        <div className="landingContent">
          <h5>Hi, I'm Rakib</h5>
          <h1 className="webTag">WEB DEVELOPER</h1>
          <p>expert on Front-End</p>
          <div className="buttons">
            <a
              href="https://github.com/mohammedrakib944"
              target="_blank"
              className="github"
            >
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
            <a
              href="https://rakib-tailwind.netlify.app/"
              target="_blank"
              className="fiverr"
            >
              <span>🤪 My Another Website</span>
            </a>
            <a
              href="https://www.fiverr.com/mdrakibuzzam"
              target="_blank"
              className="fiverr"
            >
              <img src={fiverr} className="fiverrLogo" alt="fiver logo" />
              <span>Fiverr</span>
            </a>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className={style.sectionTitle}>PROJECTS</h2>
            <Project />
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-5 col-10">
            <h2 className={style.sectionTitle}>MY SKILLS</h2>
            <div className="skillsSection">
              <div className="frontEnd">
                <h4>FRONT END</h4>
                <p>*** HTML</p>
                <p>*** CSS</p>
                <p>UI/UX</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>*** React js</p>
                <p>*** Next js</p>
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

        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            preset: "firefly",

            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 80,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                random: false,
                speed: 0.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: false,
          }}
        />

        <div className="gotoAboutSection">
          <Link className="custom-btn aboutBtn" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
