import Image from "next/image";
import { motion } from "framer-motion";

import { StaticImageData } from "next/image";

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

type Props = {
  src: string | StaticImageData;
  animation: string;
};

const Waves = ({ src, animation }: Props) => {
  return (
    <>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className="wave"
        variants={animationWave}
        animate={animation}
      >
        <Image draggable={false} priority src={src} alt={"waves"} fill />
      </motion.div>
    </>
  );
};

export default Waves;
