import { Col, Row } from "react-bootstrap";
import ProjectCard from "./projects/ProjectCard";
import { motion } from "framer-motion";
import { Project, projects } from "../../types/projects";

const ProjectsCard = () => {
  return (
    <>
      <Row>
        {projects.map((project: Project, i: number) => {
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
                    delay: 0.2,
                    type: "spring",
                    damping: 50,
                    stiffness: 130,
                  },
                }}
              >
                <ProjectCard project={project} key={i} />
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ProjectsCard;
