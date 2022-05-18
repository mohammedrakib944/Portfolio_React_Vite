import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";

// internal imports
import style from "../../assets/common.module.css";
import secondaryBG from "../../assets/img/bg2.png";
import "./project.css";
import { projectData } from "./Data";
import { ProjectsNames } from "../Home/Projects";

export default function Project() {
  const { paramsName } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

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
        <h4 className="project-Name">( {data?.name} )</h4>
      </Parallax>

      <div className="container">
        <div className="row justify-content-center">
          {/* otheres projects */}
          <div className="col-md-2">
            {/* <h5 className="mp-title">All Projects</h5> */}
            <div className="othersProjects">
              <div className="MoreProjects">
                {ProjectsNames.map((data, index) =>
                  data.name === "Portfolio" ? (
                    ""
                  ) : (
                    <NavLink
                      to={data.path}
                      className="IndiVidualProjects"
                      key={index}
                    >
                      {data.name}
                    </NavLink>
                  )
                )}
              </div>
            </div>
          </div>

          {/* project details section */}
          <div className="col-md-8">
            {/* <h5 className="mp-title">Details</h5> */}
            <div id="singleProject">
              <p className="backBtn" onClick={() => navigate(-1)}>
                <i class="fa-solid fa-arrow-left"></i> Back
              </p>
              <br />
              <hr />
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
                style={{
                  color: "var(--blue)",
                  fontWeight: 500,
                }}
              >
                For source code contact with me
              </Link>
              <hr />
              <h6 className="mp-title">Images</h6>
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
    </div>
  );
}
