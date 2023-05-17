import { motion } from "framer-motion";
import CompanyCard from "./career/CompanyCard";
import Line from "./career/Line";
import { companies } from "../../types/companies";
import Date from "./career/Date";

const CareerCard = () => {
  return (
    <>
      <div className="career-card-container">
        <Date date="2023" />

        <Line size={2} />

        <CompanyCard company={companies["mandarin"]} />

        <Line size={15} />

        <Date date="2024" />
      </div>
    </>
  );
};

export default CareerCard;
