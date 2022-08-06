import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

import { motion, variants } from "framer-motion";

import { pAnimate, pAnimateY, Iam, emoji, popUp } from "../public/animate";

import bg from "../assets/bg.png";

const Main = () => {
  const Background = {
    backgroundImage: `url(${bg.src})`,
  };

  return (
    <div
      className="w-full h-screen text-center bg-no-repeat bg-contain"
      style={Background}
    >
      <div className="container w-full h-full mx-auto p-2 flex justify-center items-center">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-300"
            variants={pAnimate}
          >
            LETS BUILD SOMETING TOGETHER
          </motion.p>
          <motion.h1
            variants={Iam}
            className="py-4 text-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400"
          >
            Hi, I&apos;m{" "}
            <span className="text-gray-900 dark:text-gray-100">
              Rakib{" "}
              <motion.div className="inline-block" variants={emoji}>
                😎
              </motion.div>
            </span>
          </motion.h1>
          <motion.h1
            variants={Iam}
            className="py-2 text-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400"
          >
            🔗Blockchain Developer
          </motion.h1>
          <motion.p
            variants={pAnimateY}
            className="py-4 text-gray-600  max-w-[70%] mx-auto dark:text-gray-400"
          >
            I am an undergraduate computer science student. I am passionate
            about Programming and Technologies.
          </motion.p>
          <motion.div
            variants={popUp}
            className="flex items-center justify-center gap-4 md:justify-between max-w-[330px] mx-auto py-4"
          >
            <div className="c-button p-3 md:p-5 text-lg">
              <FaLinkedinIn />
            </div>
            <div className="c-button p-3 md:p-5 text-lg">
              <FaGithub />
            </div>
            <div className="c-button p-3 md:p-5 text-lg">
              <AiOutlineMail />
            </div>
            <div className="c-button p-3 md:p-5 text-lg">
              <BsPersonLinesFill />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
