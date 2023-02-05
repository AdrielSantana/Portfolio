import highWave from "../../../../public/images/background/about/high_wave.svg";
import mediumWave from "../../../../public/images/background/about/medium_wave.svg";
import smallWave from "../../../../public/images/background/about/small_wave.svg";
import Waves from "./Waves";

const WavyBackground = () => {
  return (
    <>
      <Waves src={highWave} animation="waveSlow" />

      <Waves src={mediumWave} animation="waveMedium" />
      
      <Waves src={smallWave} animation="waveFast" />
    </>
  );
};

export default WavyBackground;
