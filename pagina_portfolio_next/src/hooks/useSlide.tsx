import { useState } from "react";

import { useCard } from "./useCard";

export const useSlide = () => {
  const { card, handleCardChange } = useCard();
  const [slideAnimation, setSlideAnimation] = useState<number>(0);
  const [slidePointerAnimation, setSlidePointerAnimation] =
    useState<boolean>(true);

  const handleSlide = (nextCard: string): void => {
    handleCardChange(nextCard);
    setSlidePointerAnimation(false);
  };

  const findNext = (): string => {
    let nextCard: string;

    switch (card) {
      case "about":
        nextCard = "career";
        break;
      case "career":
        nextCard = "projects";
        break;
      case "projects":
        nextCard = "skills";
        break;
      case "skills":
        nextCard = "contact";
        break;
      case "contact":
        nextCard = "about";
        break;
      default:
        nextCard = "about";
        break;
    }
    setSlideAnimation(1);

    return nextCard;
  };

  const findPrevious = (): string => {
    let previousCard: string;

    switch (card) {
      case "about":
        previousCard = "contact";
        break;
      case "career":
        previousCard = "about";
        break;
      case "projects":
        previousCard = "career";
        break;
      case "skills":
        previousCard = "projects";
        break;
      case "contact":
        previousCard = "skills";
        break;
      default:
        previousCard = "about";
        break;
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
    setSlideAnimation
  };
};

export default useSlide;
