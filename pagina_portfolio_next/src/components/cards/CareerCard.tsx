import { motion } from "framer-motion";
import CompanyCard from "./career/CompanyCard";
import Line from "./career/Line";
import { companies } from "../../types/companies";

const CareerCard = () => {
  return (
    <>
      <div className="career-card-container">
        <motion.h1
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
          2023
        </motion.h1>

        <Line size={2}/>
        
        <CompanyCard company={companies["mandarin"]} />

        <Line size={15}/>

        <motion.h1
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
          2024
        </motion.h1>
      </div>
    </>
  );
};

export default CareerCard;
