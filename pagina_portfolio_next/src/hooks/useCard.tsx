"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type CardContextType = {
  card: string;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setCard: React.Dispatch<React.SetStateAction<string>>;
  handleCardChange: (card: string) => void;
};

const CardContext = createContext<CardContextType>({} as CardContextType);

export const CardContextProvider = (props: { children?: ReactNode }) => {
  const [card, setCard] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const router = useRouter();

  const handleCardChange = (card: string) => {
    switch (card) {
      case "about":
        router.push("/about");
        break;
      case "projects":
        router.push("/projects");
        break;
      case "skills":
        router.push("/skills");
        break;
      case "contact":
        router.push("/contact");
        break;
      case "career":
        router.push("/career");
        break;
      default:
        router.push("/");
        break;
    }
  };

  return (
    <CardContext.Provider
      value={{ card, title, setTitle, setCard, handleCardChange }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
