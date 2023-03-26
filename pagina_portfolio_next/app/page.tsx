"use client";

import BurgerMenu from "../src/components/layout/BurgerMenu";
import PrincipalLayout from "../src/components/layout/PrincipalLayout";
import PrincipalCard from "../src/components/layout/PrincipalCard";
import HeroTitle from "../src/components/layout/HeroTitle";

import AboutCard from "../src/components/cards/AboutCard";
import ProjectsCard from "../src/components/cards/ProjectsCard";
import SkillsCard from "../src/components/cards/SkillsCard";
import ContactCard from "../src/components/cards/ContactCard";
import { useCard } from "../src/hooks/useCard";

const Home = () => {
  const { card } = useCard();

  return (
    <div id="outer-container">
      <BurgerMenu />
      <PrincipalLayout>
        {card === "hero" ? (
          <HeroTitle />
        ) : (
          <PrincipalCard>
            {card === "about" && <AboutCard />}
            {card === "projects" && <ProjectsCard />}
            {card === "skills" && <SkillsCard />}
            {card === "contact" && <ContactCard />}
          </PrincipalCard>
        )}
      </PrincipalLayout>
    </div>
  );
};

export default Home;
