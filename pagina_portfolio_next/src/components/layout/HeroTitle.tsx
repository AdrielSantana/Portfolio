import { useState, useEffect } from "react";
import WavyText from "./WavyText";

const HeroTitle = () => {
  const [replay, setReplay] = useState<boolean>(false);

  useEffect(() => {
    setReplay(true);
  }, []);

  return (
    <>
      <div className="title">
        <WavyText text=" Bem vindo ao" replay={replay} duration={0.1} delay={0.2}/>
        <WavyText text="meu Portfolio :)" replay={replay} duration={0.1} delay={1.8}/>
      </div>
    </>
  );
};

export default HeroTitle;
