import { getTranslation } from "../../../get-translation";
import { Locale } from "../../../i18n-config";
import SkillsCard from "../../../src/components/cards/SkillsCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Skills",
};

const Skills = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return (
    <PrincipalCard title={translation.titles.skills} card="skills">
      <SkillsCard translation={translation.cards.skills}/>
    </PrincipalCard>
  );
};

export default Skills;
