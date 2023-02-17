import Image from "next/image";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { useCard } from "../../hooks/useCard";
import { useSlide } from "../../hooks/useSlide";

type Props = {
  children: React.ReactNode;
};

const animationCard = {
  hiddenNext: {
    x: "100vw",
    opacity: 0,
  },
  hiddenPrevious: {
    x: "-100vw",
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
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
  exitPrevious: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
};

const animationSlide = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
  stopPulse: {},
};

const animationTitle = {
  hidden: {
    y: "-6rem",
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
    y: "-6rem",
    opacity: 0,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
};

const PrincipalLayout = ({ children }: Props) => {
  const { card, title } = useCard();
  const {
    slideAnimation,
    slidePointerAnimation,
    handleSlide,
    findPrevious,
    findNext,
  } = useSlide();

  return (
    <>
      <Background />

      <div className="main-content">
        <Container className="selector">
          <motion.span
            layout
            className="previous-btn pointer slide"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            variants={animationSlide}
            animate={slidePointerAnimation ? "pulse" : "stopPulse"}
            whileHover={!slidePointerAnimation ? { scale: 1.2 } : {}}
            whileTap={!slidePointerAnimation ? { scale: 0.8 } : {}}
          >
            <Image
              onClick={(e) => handleSlide(findPrevious(card))}
              src={"/images/extra/pointer.svg"}
              alt={"Previous card"}
              height={30}
              width={30}
            />
          </motion.span>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={title}
              variants={animationTitle}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
            >
              <p className="h1 title text-center">{title}</p>
            </motion.div>
          </AnimatePresence>

          <motion.span
            layout
            className="next-btn pointer slide"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            variants={animationSlide}
            animate={slidePointerAnimation ? "pulse" : "stopPulse"}
            whileHover={!slidePointerAnimation ? { scale: 1.2 } : {}}
            whileTap={!slidePointerAnimation ? { scale: 0.8 } : {}}
          >
            <Image
              onClick={(e) => handleSlide(findNext(card))}
              style={{ transform: "rotate(180deg)" }}
              src={"/images/extra/pointer.svg"}
              alt={"Next card"}
              height={30}
              width={30}
            />
          </motion.span>
        </Container>

        <Container
          fluid
          className="justify-content-center align-items-center principal-layout d-flex"
          id="page-wrap"
        >
          <Container
            style={{ zIndex: 1 }}
            className="d-flex justify-content-center"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={title}
                variants={animationCard}
                initial={
                  slideAnimation === "next" ? "hiddenNext" : "hiddenPrevious"
                }
                animate={"visible"}
                exit={slideAnimation === "next" ? "exitNext" : "exitPrevious"}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default PrincipalLayout;
