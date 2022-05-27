import { Parallax } from "react-parallax";

// internal imports
import "./about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";
import rakib from "../../assets/img/rakib.jpg";
import CP from "../../assets/img/CP.jpg";
import Footer from "../../components/footer/Footer";

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
                  I am an undergraduate computer science student. I am
                  passionate about Programming and Technologies. I have been
                  doing programming since 2016. In early stage I learned HTML,
                  CSS, and javascript.{" "}
                  <b style={{ color: "var(--text)" }}>
                    {" "}
                    Javscript ! is my favorite Language.
                  </b>{" "}
                  I started to do competitive programming in 2019 then learn
                  Data Structure and Algorithms. And Solved many problems on
                  different websites like codechef.com, codeforces.com,
                  hackerrank.com, etc. Besides, I attend Programming contests.
                  Then I move to MERN stack development and Learn React, Node
                  js, Express js, and MongoDB. My goal was to be a skilled MERN
                  stack developer. On the middle of 2021, I got a job. I did the
                  job for 8 months as MERN stack Developer. <br /> Now a days, I
                  am doing freelancing projects for my clients, And of course,
                  Learning new technologies.
                </p>
                <h5>EDUCATION</h5>
                <p>
                  BSC in Computer Science and Engineering at Varendra
                  University.
                  <i> 23rd batch (2020)</i>
                </p>
                <h5>SOCIAL ACCOUNTS</h5>
                <div className="socialLinks">
                  <a
                    href="https://www.fiverr.com/share/1V3dBr"
                    target="_blank"
                    className="scIconfiverr"
                  >
                    Fiverr
                  </a>
                  <a
                    href="https://www.freelancer.com/u/rakibuzzamanpro3"
                    target="_blank"
                  >
                    Freelancer.com
                  </a>
                  <a
                    href="https://codeforces.com/profile/MohammedRakib"
                    target="_blank"
                  >
                    Codeforces
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCgjIzFwnjt1vXEg-_BDN8fw"
                    target="_blank"
                    className="scIconYoutube"
                  >
                    Youtube
                  </a>
                  <a
                    href="https://github.com/mohammedrakib944"
                    target="_blank"
                    className="gitHub"
                  >
                    Github
                  </a>
                  <a
                    href="https://web.facebook.com/md.rakib.38"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammed-rakib-246a701b2/"
                    target="_blank"
                    className="LinkdInBg"
                  >
                    Linkdin
                  </a>
                </div>
                <h5 className="mt-4">ACHIVEMENT</h5>
                <p>
                  This is our Intra University programming contest certificate
                  (second runners Up).
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
                I tried to make this website with a unique UI. This website is
                made with React js (A javascript library), CSS 3, Bootstrap 5
                and many other librarys
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
