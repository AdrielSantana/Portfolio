"use client";

import { useCard } from "../../hooks/useCard";

type Props = {
  translation: {
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    section5: string;
    section6: string;
    section7: string;
    projects: string;
    skills: string;
    contact: string;
  };
};

const AboutCard = ({ translation }: Props) => {
  const { handleCardChange } = useCard();

  return (
    <>
      <p className="about-text">{translation.section1}</p>
      <p className="about-text">
        {translation.section2}
        <a onClick={(e) => handleCardChange("projects")}>
          <strong>
            <i>
              <span className="pointer">{translation.projects}</span>
            </i>
          </strong>
        </a>
        {translation.section3}
      </p>
      <p className="about-text">{translation.section4}</p>
      <p className="about-text">
        {translation.section5}
        <a onClick={(e) => handleCardChange("skills")}>
          <strong>
            <i>
              <span className="pointer">{translation.skills}</span>
            </i>
          </strong>
        </a>{" "}
        {translation.section6}
        <a onClick={(e) => handleCardChange("contact")}>
          <strong>
            <i>
              <span className="pointer">{translation.contact}</span>
            </i>
          </strong>
        </a>
        {translation.section7}
      </p>
    </>
  );
};

export default AboutCard;
