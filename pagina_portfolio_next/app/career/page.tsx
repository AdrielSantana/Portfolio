"use client";

import { useEffect } from "react";
import CareerCard from "../../src/components/cards/CareerCard";
import PrincipalCard from "../../src/components/layout/PrincipalCard";
import { useCard } from "../../src/hooks/useCard";

const Career = () => {
  const { setTitle, setCard } = useCard();

  useEffect(() => {
    setTitle("Carreira");
    setCard("career");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrincipalCard>
      <CareerCard />
    </PrincipalCard>
  );
};

export default Career;
