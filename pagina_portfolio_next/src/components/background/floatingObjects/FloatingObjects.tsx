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
  animation: "floatingFast" | "floatingMedium" | "floatingSlow";
  device: "desktop" | "phone";
};

const FloatingObjects = ({ src, animation, device }: Props) => {
  return (
    <>
      <motion.div
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
        className={device === 'desktop' ? "desktop-floating" : "phone-floating"}
        variants={animationFloating}
        animate={animation}
      >
        <Image draggable={false} priority src={src} alt={"floating objects"} fill />
      </motion.div>
    </>
  );
};

export default FloatingObjects;
