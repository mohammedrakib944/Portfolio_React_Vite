import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

// internal imports
import "./about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";
import rakib from "../../assets/img/rakib.jpg";
import CP from "../../assets/img/CP.jpg";

export default function About() {
  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>ABOUT</h2>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>ABOUT ME</h2>
            <div className="aboutMeContainer">
              <img className="myImage" src={rakib} alt="" />
              <div className="myDetails">
                <h6>Hi,</h6>
                <h5>My Name is Md.Rakibuzzaman (Rakib).</h5>
                <p>
                  I've been doing programming since 2017 from my College life.
                  At very first I learned HTML, CSS, and javascript. In 2020 I
                  got admission to Varendra University, Rajshahi Bangladesh.
                  Then I started to do competitive programming. Learned
                  <i> Data-Structure and Algorithms </i>. And Solved 450+
                  problems. Besides, I attend some Programming contests and I
                  did well on those. After that, I move to web development and
                  Learned React, Node js, Express js, Mongo DB. My goal was to
                  be a great MERN stack developer. Then the middle of 2021, I
                  got a job offer from a company called SUNNO SOFTWARE. And I do
                  the job for 8 months as React Developer. And currently, I am
                  doing freelancing projects for my clients.
                </p>
                <h5>EDUCATION</h5>
                <p>
                  BSC in Computer Science and Engineering at Varendra
                  University.
                  <i> 23rd batch (2020)</i>
                </p>
                <h5>SOCIAL ACCOUNTS</h5>
                <div className="socialLinks">
                  <Link to="#" className="scIconfiverr">
                    Fiverr
                  </Link>
                  <Link to="#">Freelancer.com</Link>
                  <Link to="#">Codeforces</Link>
                  <Link to="#">Codechef</Link>
                  <Link to="#" className="scIconYoutube">
                    Youtube
                  </Link>
                  <Link to="#">Github</Link>
                  <Link to="#">Facebook</Link>
                  <Link to="#" className="LinkdInBg">
                    Linkdin
                  </Link>
                </div>
                <h5 className="mt-4">ACHIVEMENT</h5>
                <p>
                  This is an Intra University programming contest second runners
                  Up certificate.
                </p>
                <img
                  className="Cirtificate"
                  src={CP}
                  alt="Competitive Programming Cirtificate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="myDetails">
              <h2 className={style.sectionTitle}>THIS SITE</h2>
              <p>
                This website is made with React js (A javascript library). Also
                Bootstrap and many other librarys
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
