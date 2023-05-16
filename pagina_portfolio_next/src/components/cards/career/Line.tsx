import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type LineProps = {
  size: number;
};

const Line = ({ size }: LineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-20 -2 40 ${10 + size}`}
      className="progress-bar"
    >
      <motion.path
        d={`M 0 0 V ${5 + size}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default Line;
