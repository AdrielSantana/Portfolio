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
    if(card === "hero") return router.push("/")
    return router.push(`/${card}`);
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
