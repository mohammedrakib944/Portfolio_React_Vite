import { Parallax } from "react-parallax";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// internal imports
import "./contact.css";
import "../about/about.css";
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";

export default function Contact() {
  const sendMessageHandler = () => {
    toast.error("Can't send message! (এই মুহূর্তে সংযোগ দেয়া সম্ভব হচ্ছে না)");
  };

  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>CONTACT</h2>
      </Parallax>
      <ToastContainer position="top-right" theme="colored" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className={style.sectionTitle}>CONTACT</h2>
            <div className="formWrapper">
              <div className="ContactForm">
                <input type="text" placeholder="Name" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <textarea
                  placeholder="Type message..."
                  className="input contactTextArea"
                ></textarea>
                <button className="contactBtn" onClick={sendMessageHandler}>
                  SEND MESSAGE
                </button>
              </div>
              <br />
              <hr />
              <br />
              <p>
                <i className="fa-solid fa-envelope"></i> &nbsp; Email:&nbsp;
                &nbsp;
                <span className="texting">mohammedrakib944@gmail.com</span>
              </p>
              <p>
                {/* Phone: <span className="texting">+88 01705472922</span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
