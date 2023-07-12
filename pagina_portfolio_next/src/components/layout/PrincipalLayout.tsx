"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import { useCard } from "../../hooks/useCard";
import { useSlide } from "../../hooks/useSlide";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
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
  },
  exit: {
    y: "-6rem",
    opacity: 0,
  },
};

const animationCard = {
  enter: (slideAnimation: number) => {
    if (slideAnimation == 0) {
      return {
        x: 0,
        opacity: 1,
      };
    }

    return {
      x: slideAnimation > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
  },
  exit: (slideAnimation: number) => {
    if (slideAnimation == 0) {
      return {
        x: 0,
        opacity: 1,
      };
    }

    return {
      zIndex: 0,
      x: slideAnimation < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 100000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
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

  function checkKey(e: any) {
    switch (e.key) {
      case "ArrowLeft":
        handleSlide(findPrevious());
        break;
      case "ArrowRight":
        handleSlide(findNext());
        break;
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", checkKey);
  }
  
  return (
    <>
      <Background />
      <div
        tabIndex={-1}
        onKeyDown={(e) => {
          checkKey(e);
        }}
        className="main-content"
      >
        <Container className="selector">
          <motion.span
            layout
            className="previous-btn pointer slide"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            variants={animationSlide}
            onClick={(e) => handleSlide(findPrevious())}
            animate={slidePointerAnimation ? "pulse" : "stopPulse"}
            whileHover={!slidePointerAnimation ? { scale: 1.2 } : {}}
            whileTap={!slidePointerAnimation ? { scale: 0.8 } : {}}
          >
            <Image
              draggable={false}
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
              transition={{
                y: { type: "spring", stiffness: 400, damping: 50 },
                opacity: { duration: 0.2 },
              }}
            >
              <h1 className="title text-center">{title}</h1>
            </motion.div>
          </AnimatePresence>

          <motion.span
            layout
            className="next-btn pointer slide"
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            variants={animationSlide}
            onClick={(e) => handleSlide(findNext())}
            animate={slidePointerAnimation ? "pulse" : "stopPulse"}
            whileHover={!slidePointerAnimation ? { scale: 1.2 } : {}}
            whileTap={!slidePointerAnimation ? { scale: 0.8 } : {}}
          >
            <Image
              draggable={false}
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
          className="justify-content-center z-1 align-items-center principal-layout d-flex"
          id="page-wrap"
        >
          <AnimatePresence initial={false} custom={slideAnimation} mode="wait">
            <motion.div
              className="draggable-container"
              key={card}
              variants={animationCard}
              custom={slideAnimation}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                console.log(swipe);

                if (swipe < -swipeConfidenceThreshold) {
                  handleSlide(findNext());
                } else if (swipe > swipeConfidenceThreshold) {
                  handleSlide(findPrevious());
                }
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
    </>
  );
};

export default PrincipalLayout;
