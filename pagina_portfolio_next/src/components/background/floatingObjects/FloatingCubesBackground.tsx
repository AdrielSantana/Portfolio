import desktopFarCubes from "../../../../public/images/background/hero/desktop_far_cubes.svg";
import desktopMediumCubes from "../../../../public/images/background/hero/desktop_medium_cubes.svg";
import desktopCloseCubes from "../../../../public/images/background/hero/desktop_close_cubes.svg";

import phoneFarCubes from "../../../../public/images/background/hero/phone_far_cubes.svg";
import phoneMediumCubes from "../../../../public/images/background/hero/phone_medium_cubes.svg";
import phoneCloseCubes from "../../../../public/images/background/hero/phone_close_cubes.svg";

import FloatingObjects from "./FloatingObjects";

const FloatingBallsBackground = () => {
  return (
    <>
     <FloatingObjects
        device={"desktop"}
        animation="floatingSlow"
        src={desktopFarCubes}
      />

      <FloatingObjects
        device={"desktop"}
        animation="floatingMedium"
        src={desktopMediumCubes}
      />

      <FloatingObjects
        device={"desktop"}
        animation="floatingFast"
        src={desktopCloseCubes}
      />

      <FloatingObjects
        device="phone"
        animation="floatingSlow"
        src={phoneFarCubes}
      />

      <FloatingObjects
        device="phone"
        animation="floatingMedium"
        src={phoneMediumCubes}
      />

      <FloatingObjects
        device="phone"
        animation="floatingFast"
        src={phoneCloseCubes}
      />
    </>
  );
};

export default FloatingBallsBackground;
