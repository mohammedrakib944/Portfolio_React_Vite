import React from "react";
import ProjectsItem from "./ProjectsItem";

import Instagram from "../assets/projects/instaLong.png";
import Ecommerce from "../assets/projects/ecommerce.png";
import Movie from "../assets/projects/movie.png";
import NFT from "../assets/projects/NFT.png";

import { Iam, emoji, popUp } from "../public/animate";

const Projects = () => {
  return (
    <div id="projects" className="wrapper">
      <p className="text-xl font-semibold tracking-widest text-sky-600">
        Projects
      </p>
      <h2 variants={Iam} className="py-4 text-gray-700 dark:text-gray-200 mb-4">
        What I&apos;ve Build{" "}
        <div className="inline-block" variants={emoji}>
          😌💪
        </div>
      </h2>
      <div
        className="grid md:grid-cols-3 gap-8 overflow-hidden"
        transition={{ staggerChildren: 0.2 }}
      >
        <div variants={popUp}>
          <ProjectsItem
            name="Instagram Dark Mood"
            tech="Next Js, Tailwind CSS"
            url="https://rakib-insta.netlify.app/"
            bg={Instagram}
          />
        </div>
        <div variants={popUp}>
          <ProjectsItem
            name="Ecommerce"
            tech="React Js"
            url="https://rakib-e-commerce.netlify.app/"
            bg={Ecommerce}
          />
        </div>
        <div variants={popUp}>
          <ProjectsItem
            name="Movie"
            tech="API integration, React Js"
            url="https://rakib-movie.netlify.app/"
            bg={Movie}
          />
        </div>
        <div variants={popUp}>
          <ProjectsItem
            name="NFT"
            tech="React Js"
            url="https://rakib38-swap.netlify.app/"
            bg={NFT}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
