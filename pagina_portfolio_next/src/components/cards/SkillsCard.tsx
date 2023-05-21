'use client'
import { Col, Row } from "react-bootstrap";
import SkillCard from "./skills/SkillCard";

import { motion } from "framer-motion";

import { skills } from "../../types/skills";
import { Skill } from "../../types/skills";

const SkillsCard = () => {
  return (
    <>
      <div>
        <Row>
          {skills.map((skill: Skill, i: number) => {
            return (
              <Col
                className="my-4 d-flex justify-content-center align-self-start"
                xs={12}
                md={6}
                lg={4}
                key={i}
              >
                <motion.div
                  className="d-flex flex-column align-items-center skill-container"
                  key={i}
                  style={{
                    backgroundColor: "transparent",
                    perspective: "1000px",
                  }}
                  initial={{ transform: "rotateY(90deg)", opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{
                    transform: "rotateY(0deg)",
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      type: "spring",
                      damping: 30,
                      stiffness: 130,
                    },
                  }}
                >
                  <SkillCard skill={skill} key={i} />
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default SkillsCard;
