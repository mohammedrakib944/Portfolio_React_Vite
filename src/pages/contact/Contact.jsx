import { Parallax } from "react-parallax";

// internal imports
import "./contact.css";
import "../about/about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";

export default function Contact() {
  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>CONTACT</h2>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>CONTACT</h2>
            <div className="formWrapper">
              <form className="ContactForm">
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  required
                />
                <input type="email" placeholder="Name" className="input" />
                <textarea
                  required
                  placeholder="Type message..."
                  className="input contactTextArea"
                ></textarea>
                <button className="contactBtn" type="submit">
                  SEND MESSAGE
                </button>
              </form>
              <br />
              <hr />
              <br />
              <p>
                Email:{" "}
                <span className="texting">mohammedrakib944@gmail.com</span>
              </p>
              <p>
                Phone: <span className="texting">+88 01705472922</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
