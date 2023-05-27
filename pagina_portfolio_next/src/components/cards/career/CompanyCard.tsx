import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Card, Collapse } from "react-bootstrap";

import { motion } from "framer-motion";
import { Company } from "../../../types/companies";

type Props = {
  company: Company
};

const CompanyCard = ({ company }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="d-flex flex-column align-items-center skill-container"
        initial={{ y: "-4rem", opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            type: "spring",
            damping: 50,
            stiffness: 130,
          },
        }}
      >
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Image
            className="project-image pointer"
            onClick={() => setOpen(!open)}
            aria-controls={`company-${company.name}`}
            aria-expanded={open}
            src={company.imgUrl}
            alt={company.name}
            width={280}
            height={158}
            placeholder="blur"
          />
        </motion.div>
        <Collapse in={open}>
          <div id={`company-${company.name}`}>
            <Card className="project-card" body>
              <Card.Title className="text-center">
                <strong>{company.name}</strong>
              </Card.Title>
                <p className="company-description">{company.description}</p>
                <p className="company-date">{company.period}</p>
            </Card>
          </div>
        </Collapse>
      </motion.div>
    </>
  );
};

export default CompanyCard;
