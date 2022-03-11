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
                <h5>My Name is Md.Rakibuzzaman (Nick name Rakib).</h5>
                <p>
                  {" "}
                  I'm from Bangladesh. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Aspernatur ut eaque ab corrupti nesciunt,
                  ipsum beatae placeat veniam dicta ullam voluptatum incidunt
                  possimus vero dolorem quidem impedit officia magni
                  voluptatibus! veniam dicta ullam voluptatum incidunt possimus
                  vero dolorem quidem impedit officia magni voluptatibus!
                </p>
                <h5>EDUCATION</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur sunt nisi doloremque quibusdam ex eius ipsa nemo ea
                  eos provident deserunt, odio veritatis dolores, commodi
                  blanditiis quas nesciunt aliquam non?
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi delectus corporis fugit inventore soluta iure voluptates
                  ex ab. Consequatur, animi!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                deleniti officia est ex recusandae modi cumque accusamus
                necessitatibus, magni a autem doloribus minima quia unde quasi
                consequuntur neque ab eum fugit totam tempora! Veritatis atque
                aspernatur animi architecto officia distinctio vel quidem
                sapiente ipsa perferendis fuga id inventore et dolor, ducimus,
                consequatur blanditiis deleniti ut maxime rem mollitia veniam.
                Impedit quas incidunt, fugiat rerum dignissimos voluptas,
                perferendis deleniti voluptates animi porro nam, et ad
                consectetur odit doloribus eligendi quibusdam dicta officiis rem
                sapiente maiores? Consequatur voluptate, nulla harum nam
                inventore accusantium sint officia. Aut accusantium nam
                exercitationem nisi aliquid adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
