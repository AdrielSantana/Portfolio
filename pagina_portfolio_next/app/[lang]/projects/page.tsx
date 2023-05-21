import ProjectsCard from "../../../src/components/cards/ProjectsCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <PrincipalCard title={"Projetos"} card={"projects"}>
      <ProjectsCard />
    </PrincipalCard>
  );
};

export default Projects;
