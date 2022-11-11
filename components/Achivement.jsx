import Image from "next/image";
import Achive1 from "../assets/achivement/1.jpg";
import Achive2 from "../assets/achivement/2.jpg";
import Achive3 from "../assets/achivement/3.jpeg";

import { motion, variants } from "framer-motion";
import { pAnimateY, Iam, emoji } from "../public/animate";

const Achivement = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      id="achivement"
      className="wrapper"
    >
      <motion.h2
        variants={Iam}
        className="py-4 text-gray-700 dark:text-gray-200 mb-4"
      >
        Achivement &nbsp;
        <motion.div className="inline-block" variants={emoji}>
          🏆
        </motion.div>
      </motion.h2>
      <div className="mb-6">
        <h3 className="text-gray-500 dark:text-gray-100 text-2xl">
          <span className="text-sky-300">BUET</span> CSE FEST 2022
        </h3>
        <h3 className="text-gray-400">Hackathon: Web 3.0 and Blockchain</h3>
        <h3 className="text-gray-400">Position: 2nd</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <Image
          src={Achive1}
          alt=""
          className="rounded-md hover:scale-110 duration-200"
        />
        <Image
          src={Achive2}
          alt=""
          className="rounded-md hover:scale-110 duration-200"
        />
        <Image
          src={Achive3}
          alt=""
          className="rounded-md hover:scale-110 duration-200"
        />
      </div>
    </motion.div>
  );
};

export default Achivement;
