"use client";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./projects/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../../types/projects";

type Props = {
  translation: {
    project: {
      [project: string]: {
        name: string;
        description: string;
      };
    };
    buttonLabel: {
      seeMore: string;
    };
  };
};

const ProjectsCard = ({ translation }: Props) => {
  return (
    <>
      <Row>
        {projects.map((project, i: number) => {
          return (
            <Col
              className="my-4 d-flex justify-content-center align-self-start"
              xs={12}
              md={6}
              key={i}
            >
              <motion.div
                className="d-flex flex-column align-items-center skill-container"
                key={i}
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
                <ProjectCard
                  translation={translation.buttonLabel}
                  project={{
                    ...project,
                    name: translation.project[project.name].name,
                    description: translation.project[project.name].description,
                  }}
                  key={i}
                />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ProjectsCard;
