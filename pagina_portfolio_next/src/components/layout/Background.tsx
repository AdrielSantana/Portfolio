import PhotoBackground from "../background/PhotoBackground";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    card: String
}

const animationCard = {
    hiddenNext: {
      x: "130vh",
      opacity: 0,
    },
    hiddenPrevious: {
      x: "-130vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 600,
      },
    },
    exitNext: {
      x: "-130vh",
      opacity: 0,
      transition: {
        duration: 0.05,
        type: "spring",
        damping: 100,
        stiffness: 600,
      },
    },
    exitPrevious: {
      x: "130vh",
      opacity: 0,
      transition: {
        duration: 0.05,
        type: "spring",
        damping: 100,
        stiffness: 600,
      },
    },
  };

const Background = ({ card}: Props) => {
  return (
    <>
      {card === "hero" && <PhotoBackground />}
      {card === "about" && <PhotoBackground />}
      {card === "projects" && <PhotoBackground />}
      {card === "skills" && <PhotoBackground />}
      {card === "contact" && <PhotoBackground />}
    </>
  );
};

export default Background;
