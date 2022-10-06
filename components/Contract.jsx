import { motion, variants } from "framer-motion";

import { pAnimateY, Iam, emoji } from "../public/animate";

const Contract = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      id="contact"
      className="wrapper"
    >
      <p className="text-xl font-semibold tracking-widest text-sky-600">
        Contact
      </p>
      <motion.h2
        variants={Iam}
        className="py-4 text-gray-700 dark:text-gray-200 mb-4"
      >
        Get In Touch{" "}
        <motion.div className="inline-block" variants={emoji}>
          🤝
        </motion.div>
      </motion.h2>
      <motion.p variants={pAnimateY} className="text-sky-600 font-semibold">
        mohammedrakib944@gmail.com
      </motion.p>
    </motion.div>
  );
};

export default Contract;
