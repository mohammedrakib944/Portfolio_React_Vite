import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// internal imports
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";
import "./project.css";
import { projectData } from "./Data";

export default function Project() {
  const { paramsName } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const findData = () => {
      const temp = projectData.filter((val) => val.params === paramsName);
      setData(temp[0]);
    };
    findData();
  }, [paramsName, projectData]);
  return (
    <div>
      <Parallax
        className={style.commonBackground}
        bgImage={secondaryBG}
        strength={700}
      >
        <h2>Project</h2>
        <p>{data?.name}</p>
      </Parallax>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Link to="/" className="backBtn">
              Back
            </Link>
            <br />
            <h5 className="projectTitle">
              Project Name: <span>{data?.name}</span>
            </h5>
            <h5 className="projectTitle">
              Language/Fremwork: <span>{data?.language}</span>
            </h5>
            <h5 className="projectTitle">
              Description: <span>{data?.description}</span>
            </h5>
            {data?.preview && (
              <h5 className="projectTitle">
                <a
                  className="btn btn-danger"
                  href={data?.preview}
                  target="_blank"
                >
                  Live Preview
                </a>
              </h5>
            )}
            <hr />
            <Link
              to="/contact"
              style={{ color: "var(--primaryColor)", fontWeight: 500 }}
            >
              For source code contact with me
            </Link>
            <hr />
            <p>Screenshots</p>
            <div className="projectImages">
              <img className="projectImgClass" src={data?.img1} />
              <img className="projectImgClass" src={data?.img2} />
              <img className="projectImgClass" src={data?.img3} />
              <img className="projectImgClass" src={data?.img4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
