import PhotoBackground from "../background/PhotoBackground";
import WavyBackground from "../background/WavyBackground";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  background: string;
};

const animationTitle = {
  hidden: {
    y: "12rem",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
  exit: {
    y: "12rem",
    opacity: 0,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
};

const Background = ({ background }: Props) => {
  return (
    <>
      <AnimatePresence initial={true} mode="sync">
        <motion.div
          style={{ position: "fixed", right: 0, bottom: 0, zIndex: 0 }}
          key={background}
          variants={animationTitle}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          {background === "photo" ? <PhotoBackground /> : <WavyBackground />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Background;
