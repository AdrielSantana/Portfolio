"use client";

import { useEffect } from "react";
import HeroTitle from "../src/components/layout/HeroTitle";
import { useCard } from "../src/hooks/useCard";

const Home = () => {
  const { handleCardChange } = useCard()

  useEffect(() => {
    handleCardChange("hero")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HeroTitle />
  );
};

export default Home;
