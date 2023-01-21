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
        <WavyText text=" Bem vindo ao" replay={replay} duration={0.1} />
        <WavyText text="meu Portfolio :)" replay={replay} duration={0.1} delay={1.5}/>
      </div>
    </>
  );
};

export default HeroTitle;
