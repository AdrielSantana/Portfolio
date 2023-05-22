"use client";
import CompanyCard from "./career/CompanyCard";
import Line from "./career/Line";
import Date from "./career/Date";

import { companiesImgUrl } from "../../types/companies";

type Props = {
  translation: {
    jobs: {
      [company: string]: {
        name: string;
        description: string;
        period: string;
      };
    };
  };
};

const CareerCard = ({ translation }: Props) => {
  return (
    <>
      <div className="career-card-container">
        <Date date="2023" />

        <Line size={2} />

        <CompanyCard
          company={{
            ...translation.jobs.mandarin,
            imgUrl: companiesImgUrl.mandarin,
          }}
        />

        <Line size={15} />

        <Date date="2024" />
      </div>
    </>
  );
};

export default CareerCard;
