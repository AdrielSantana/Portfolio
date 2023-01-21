import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import WavyText from "./WavyText";

const HeroTitle = () => {
  const [replay, setReplay] = useState<boolean>(false);

  useEffect(() => {
    setReplay(true);
  }, []);

  return (
    <>
      <div className="title">
        <WavyText
          text="Bem vindo ao meu Portfolio :)"
          replay={replay}
          duration={0.1}
        />
      </div>
    </>
  );
};

export default HeroTitle;
