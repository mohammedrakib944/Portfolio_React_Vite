import Image from "next/image";
import React from "react";

import ReactImg from "../assets/react.png";
import nextjs from "../assets/next.png";
import justjs from "../assets/js.png";
import tailwindcss from "../assets/tailwind.png";

import { motion, variants } from "framer-motion";
import { pAnimateY, Iam, emoji } from "../public/animate";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="wrapper"
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="text-xl font-semibold text-sky-500 tracking-widest">
        Skills
      </p>
      <motion.h2
        variants={Iam}
        className="py-4 text-slate-700 dark:text-slate-200 mb-4"
      >
        What I Can Do{" "}
        <motion.div className="inline-block" variants={emoji}>
          🧐
        </motion.div>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          variants={pAnimateY}
          className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none"
        >
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={ReactImg} alt="image" />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              React Js
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={pAnimateY}
          className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none"
        >
          <div className="text-center">
            <div className="m-auto">
              <Image className="rounded-xl" src={nextjs} alt="image" />
            </div>
            <p className="font-semibold text-2xl mt-6 dark:text-slate-200">
              Next Js
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={pAnimateY}
          className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none"
        >
          <div className="text-center">
            <div className="m-auto">
              <Image width="100%" height="110px" src={justjs} alt="image" />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              Javasctipt
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={pAnimateY}
          className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-slate-800 dark:border-none"
        >
          <div className="text-center">
            <div className="m-auto">
              <Image
                width="100%"
                height="110px"
                src={tailwindcss}
                alt="image"
              />
            </div>
            <p className="font-semibold text-2xl mt-2 dark:text-slate-200">
              Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
