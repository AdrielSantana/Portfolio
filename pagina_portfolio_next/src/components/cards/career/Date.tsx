import { motion } from "framer-motion";
import React from "react";

type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return (
    <motion.h1
      className="career-date"
      initial={{ x: "-4rem", opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          type: "spring",
          damping: 50,
          stiffness: 130,
        },
      }}
    >
      {date}
    </motion.h1>
  );
};

export default Date;
