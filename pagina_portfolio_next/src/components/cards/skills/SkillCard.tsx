import Image from "next/image";
import { useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import { Skill } from "../SkillsCard";

import { motion } from "framer-motion";

type Props = {
  skill: Skill;
};

const SkillCard = ({ skill }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="skill-image d-flex align-items-center justify-content-center"
        whileTap={{ scale: 0.95, backgroundColor: skill.color }}
        whileHover={{ scale: 1.05, backgroundColor: skill.color }}
      >
        <Image
          className="pointer"
          onClick={() => setOpen(!open)}
          aria-controls={`skill-${skill.name}`}
          aria-expanded={open}
          src={skill.imgUrl}
          alt={skill.name}
          width={100}
          height={100}
        />
      </motion.div>

      <Collapse in={open}>
        <div id={`skill-${skill.name}`}>
          <p className="fs-4 skill-title text-center">{skill.name}</p>
          <Card className="skill-card" body>
            <Card.Text>{skill.description}</Card.Text>
          </Card>
        </div>
      </Collapse>
    </>
  );
};

export default SkillCard;
