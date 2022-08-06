import { Database } from "./Data";
import Tech from "./Tech";

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
        className="py-4 text-gray-700 dark:text-gray-200 mb-4"
      >
        What I Can Do{" "}
        <motion.div className="inline-block" variants={emoji}>
          🧐
        </motion.div>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Database.map((data) => (
          <motion.div key={data.id} variants={pAnimateY}>
            <Tech data={data} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
