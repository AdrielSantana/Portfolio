import Image from "next/image";
import { useState } from "react";
import { Button, Card, Collapse, Container } from "react-bootstrap";

import { motion } from "framer-motion";
import { Project } from "../../../types/projects";

type Props = {
  project: Project;
  translation: {
    seeMore: string;
  };
};

const ProjectCard = ({ project, translation }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-container">
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Image
            draggable={false}
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
                <h2 className="fs-5"><strong>{project.name}</strong></h2>
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-center">
                  <Button className="project-button">
                    <a target="_blank" rel="noreferrer" href={project.link}>
                      {translation.seeMore}
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
