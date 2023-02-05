import Image from "next/image";
import { motion } from "framer-motion";

import { StaticImageData } from "next/image";

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

type Props = {
  src: string | StaticImageData;
  animation: string;
  className: string;
};

const FloatingBalls = ({ src, animation, className }: Props) => {
  return (
    <>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className={className}
        variants={animationFloating}
        animate={animation}
      >
        <Image priority src={src} alt={"floating balls"} fill />
      </motion.div>
    </>
  );
};

export default FloatingBalls;
