import PhotoBackground from "../background/PhotoBackground";
import WavyBackground from "../background/waves/WavyBackground";
import { motion, AnimatePresence } from "framer-motion";
import LowPolyBackground from "../background/LowPolyBackground";
import FloatingBallsBackground from "../background/floatingBalls/FloatingBallsBackground";

type Props = {
  card: string;
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

const Background = ({ card }: Props) => {
  return (
    <>
      <AnimatePresence initial={true} mode="sync">
        <motion.div
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
          key={card}
          variants={animationTitle}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          {card === "hero" && <PhotoBackground />}
          {card === "about" && <WavyBackground />}
          {card === "projects" && <LowPolyBackground />}
          {card === "skills" && <FloatingBallsBackground />}
          {card === "contact" && <></>}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Background;
