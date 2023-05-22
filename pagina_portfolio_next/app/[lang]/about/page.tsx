import { getTranslation } from "../../../get-translation";
import { Locale } from "../../../i18n-config";
import AboutCard from "../../../src/components/cards/AboutCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "About",
};

const About = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return (
    <PrincipalCard title={translation.titles.about} card="about">
      <AboutCard translation={translation.cards.about}/>
    </PrincipalCard>
  );
};

export default About;
