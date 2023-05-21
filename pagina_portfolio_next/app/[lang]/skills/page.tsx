import SkillsCard from "../../../src/components/cards/SkillsCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Skills",
};

const Skills = () => {
  return (
    <PrincipalCard title="Habilidades" card="skills">
      <SkillsCard />
    </PrincipalCard>
  );
};

export default Skills;
