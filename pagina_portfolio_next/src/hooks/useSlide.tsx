import { useState } from "react";

import { useCard } from "./useCard";

export const useSlide = () => {
  const { handleCardChange } = useCard();

  const [slideAnimation, setSlideAnimation] = useState<string>("next");
  const [slidePointerAnimation, setSlidePointerAnimation] =
    useState<boolean>(true);

  const handleSlide = (card: string): void => {
    handleCardChange(card);

    setSlidePointerAnimation(false);
  };

  const findNext = (card: string): string => {
    let nextCard: string;

    switch (card) {
      case "about":
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
    setSlideAnimation("next");

    return nextCard;
  };

  const findPrevious = (card: string): string => {
    let previousCard: string;

    switch (card) {
      case "about":
        previousCard = "contact";
        break;
      case "projects":
        previousCard = "about";
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
    setSlideAnimation("previous");

    return previousCard;
  };

  return {
    slideAnimation,
    slidePointerAnimation,
    handleSlide,
    findPrevious,
    findNext,
  };
};

export default useSlide;
