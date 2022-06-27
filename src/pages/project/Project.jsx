import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";

// internal imports
import "./project.css";
import { projectData } from "./Data";

export default function Project() {
  const [data, setData] = useState([]);
  const [currentId, setcurrentId] = useState("1");

  const setSinglePage = (id) => {
    let _id = id || 1;
    setcurrentId(_id);
    const tempDetails = projectData.find((page) => page.id == _id);
    setData(tempDetails);
  };

  useEffect(() => {
    setSinglePage();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {/* otheres projects */}
          <div className="col-md-2">
            {/* <h5 className="mp-title">All Projects</h5> */}
            <div className="othersProjects">
              <div className="MoreProjects">
                {projectData.map((data, index) => (
                  <div
                    key={index}
                    className="myTooltip"
                    tooltip-text={data.name}
                    onClick={() => setSinglePage(data.id)}
                  >
                    <img
                      src={data.img1}
                      alt=""
                      className={
                        data.id === currentId
                          ? "IndiVidualProjects IvpActive"
                          : "IndiVidualProjects"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* project details section */}
          <div className="col-md-8">
            <div id="singleProject">
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
              <div className="projectImages">
                <img className="projectImgClass" src={data?.img1} />
                <img className="projectImgClass" src={data?.img2} />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
