import { getTranslation } from "../../../get-translation";
import { Locale } from "../../../i18n-config";
import ProjectsCard from "../../../src/components/cards/ProjectsCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Projects",
};

const Projects = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return (
    <PrincipalCard title={translation.titles.projects} card={"projects"}>
      <ProjectsCard translation={translation.cards.projects} />
    </PrincipalCard>
  );
};

export default Projects;
