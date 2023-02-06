import Image from "next/image";
import { useState } from "react";
import { Button, Card, Collapse, Container } from "react-bootstrap";
import { Project } from "../ProjectsCard";

import { motion } from "framer-motion";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-container">
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Image
            className="project-image pointer"
            onClick={() => setOpen(!open)}
            aria-controls={`project-${project.name}`}
            aria-expanded={open}
            src={project.imgUrl}
            alt={project.name}
            width={280}
            height={158}
            placeholder="blur"
          />
        </motion.div>

        <Collapse in={open}>
          <div id={`project-${project.name}`}>
            <Card className="project-card" body>
              <Card.Title className="text-center">
                <strong>{project.name}</strong>
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-center">
                  <Button className="project-button">
                    <a target="_blank" rel="noreferrer" href={project.link}>
                      Veja aqui
                    </a>
                  </Button>
                </p>
              </motion.div>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default ProjectCard;
