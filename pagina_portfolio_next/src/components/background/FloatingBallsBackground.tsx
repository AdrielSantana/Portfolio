import Image from "next/image";
import { motion } from "framer-motion";

import farBalls from "../../../public/images/background/skills/far_balls.svg";
import mediumBalls from "../../../public/images/background/skills/medium_balls.svg";
import closeBalls from "../../../public/images/background/skills/close_balls.svg";

const animationFloating = {
  floatingFast: {
    y: ["0%", "10%", "0%"],
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
  floatingMedium: {
    y: ["0%", "10%", "0%"],
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
  floatingSlow: {
    y: ["0%", "10%", "0%"],
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

const FloatingBallsBackground = () => {
  return (
    <>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="floating"
        variants={animationFloating}
        animate={"floatingSlow"}
      >
        <Image priority src={farBalls} alt={"floating balls"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="floating"
        variants={animationFloating}
        animate={"floatingMedium"}
      >
        <Image priority src={mediumBalls} alt={"floating balls"} fill />
      </motion.div>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="floating"
        variants={animationFloating}
        animate={"floatingFast"}
      >
        <Image priority src={closeBalls} alt={"floating balls"} fill />
      </motion.div>
    </>
  );
};

export default FloatingBallsBackground;
