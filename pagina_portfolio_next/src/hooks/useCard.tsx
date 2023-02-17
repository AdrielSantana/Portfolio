"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type CardContextType = {
  card: string;
  title: string;
  handleCardChange: (card: string) => void;
};

const CardContext = createContext<CardContextType>({} as CardContextType);

export const CardContextProvider = (props: { children?: ReactNode }) => {
  const [card, setCard] = useState<string>("hero");
  const [title, setTitle] = useState<string>("/");

  const handleCardChange = (card: string) => {
    switch (card) {
      case "about":
        setCard(card);
        setTitle("Sobre mim");
        break;
      case "projects":
        setCard(card);
        setTitle("Projetos");
        break;
      case "skills":
        setCard(card);
        setTitle("Habilidades");
        break;
      case "contact":
        setCard(card);
        setTitle("Contato");
        break;
      default:
        setCard(card);
        setTitle("/");
        break;
    }
  };

  return (
    <CardContext.Provider value={{ card, title, handleCardChange }}>
      {props.children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
