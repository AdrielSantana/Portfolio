import Image from "next/image";
import { motion } from "framer-motion";

import highWave from "../../../public/images/background/high_wave.png";
import mediumWave from "../../../public/images/background/medium_wave.png";
import smallWave from "../../../public/images/background/small_wave.png";

const animationWave = {
  waveFast: {
    x: ["0vw", "20vw", "0vw"],
    transition: {
      duration: 10,
      type: "spring",
      damping: 100,
      stiffness: 600,
      repeat: Infinity,
      repeatDelay: 0,
      times: [0, 0.5, 1],
    },
  },
  waveMedium: {
    x: ["0vw", "20vw", "0vw"],
    transition: {
      duration: 20,
      type: "spring",
      damping: 100,
      stiffness: 600,
      repeat: Infinity,
      repeatDelay: 0,
      times: [0, 0.5, 1],
    },
  },
  waveSlow: {
    x: ["0vw", "20vw", "0vw"],
    transition: {
      duration: 30,
      type: "spring",
      damping: 100,
      stiffness: 600,
      repeat: Infinity,
      repeatDelay: 0,
      times: [0, 0.5, 1],
    },
  },
};

const WavyBackground = () => {
  return (
    <>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={"waveSlow"}
      >
        <Image placeholder="blur" src={highWave} alt={"waves"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={"waveMedium"}
      >
        <Image placeholder="blur" src={mediumWave} alt={"waves"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={"waveFast"}
      >
        <Image placeholder="blur" src={smallWave} alt={"waves"} fill />
      </motion.div>
    </>
  );
};

export default WavyBackground;
