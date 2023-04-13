"use client";

import { useEffect } from "react";
import ProjectsCard from "../../src/components/cards/ProjectsCard";
import PrincipalCard from "../../src/components/layout/PrincipalCard";
import { useCard } from "../../src/hooks/useCard";

const Projects = () => {
  const { setTitle, setCard } = useCard();

  useEffect(() => {
    setTitle("Projetos");
    setCard("projects");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrincipalCard>
      <ProjectsCard />
    </PrincipalCard>
  );
};

export default Projects;
