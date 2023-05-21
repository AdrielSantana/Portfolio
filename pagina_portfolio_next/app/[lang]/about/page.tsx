import AboutCard from "../../../src/components/cards/AboutCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <PrincipalCard title="Sobre" card="about">
      <AboutCard />
    </PrincipalCard>
  );
};

export default About;
