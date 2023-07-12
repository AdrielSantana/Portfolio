import { useState } from "react";

import { useCard } from "./useCard";

export const useSlide = () => {
  const { card, handleCardChange } = useCard();
  const [slideAnimation, setSlideAnimation] = useState<number>(0);
  const [slidePointerAnimation, setSlidePointerAnimation] =
    useState<boolean>(true);

  const pages = ["about", "career", "projects", "skills", "contact"];

  const handleSlide = (nextCard: string): void => {
    handleCardChange(nextCard);
    setSlidePointerAnimation(false);
  };

  const findNext = (): string => {
    let nextCard: string;

    nextCard = pages[pages.indexOf(card) + 1];

    if (nextCard === undefined) {
      nextCard = pages[0];
    }

    setSlideAnimation(1);

    return nextCard;
  };

  const findPrevious = (): string => {
    let previousCard: string;

    previousCard = pages[pages.indexOf(card) - 1];

    if (previousCard === undefined) {
      previousCard = pages[pages.length - 1];
    }

    setSlideAnimation(-1);

    return previousCard;
  };

  return {
    slideAnimation,
    slidePointerAnimation,
    handleSlide,
    findPrevious,
    findNext,
    setSlideAnimation,
  };
};

export default useSlide;
