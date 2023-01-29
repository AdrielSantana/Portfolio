import Image from "next/image";
import { motion } from "framer-motion";

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
        <Image src={"/images/background/high_wave.png"} alt={"waves"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={"waveMedium"}
      >
        <Image src={"/images/background/medium_wave.png"} alt={"waves"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={"waveFast"}
      >
        <Image src={"/images/background/small_wave.png"} alt={"waves"} fill />
      </motion.div>
    </>
  );
};

export default WavyBackground;
