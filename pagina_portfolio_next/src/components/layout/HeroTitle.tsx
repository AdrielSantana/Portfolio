"use client";

import { useState, useEffect } from "react";
import { useCard } from "../../hooks/useCard";
import WavyText from "./WavyText";

type Props = {
  title: string;
  card: string;
};

const HeroTitle = ({ title, card }: Props) => {
  const [replay, setReplay] = useState<boolean>(false);
  const { setTitle, setCard } = useCard();

  useEffect(() => {
    setReplay(true);
    setTitle(title);
    setCard(card);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="title pb-5">
        <WavyText
          text=" Bem vindo ao"
          replay={replay}
          duration={0.1}
          delay={0.2}
        />
        <WavyText
          text="meu Portfolio :)"
          replay={replay}
          duration={0.1}
          delay={1.8}
        />
      </div>
    </>
  );
};

export default HeroTitle;
