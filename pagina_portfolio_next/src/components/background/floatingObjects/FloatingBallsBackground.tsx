import desktopFarBalls from "../../../../public/images/background/skills/desktop_far_balls.svg";
import desktopMediumBalls from "../../../../public/images/background/skills/desktop_medium_balls.svg";
import desktopCloseBalls from "../../../../public/images/background/skills/desktop_close_balls.svg";

import phoneFarBalls from "../../../../public/images/background/skills/phone_far_balls.svg";
import phoneMediumBalls from "../../../../public/images/background/skills/phone_medium_balls.svg";
import phoneCloseBalls from "../../../../public/images/background/skills/phone_close_balls.svg";

import FloatingObjects from "./FloatingObjects";

const FloatingBallsBackground = () => {
  return (
    <>
      <FloatingObjects
        device="desktop"
        animation="floatingSlow"
        src={desktopFarBalls}
      />

      <FloatingObjects
        device="desktop"
        animation="floatingMedium"
        src={desktopMediumBalls}
      />

      <FloatingObjects
        device="desktop"
        animation="floatingFast"
        src={desktopCloseBalls}
      />

      <FloatingObjects
        device="phone"
        animation="floatingSlow"
        src={phoneFarBalls}
      />

      <FloatingObjects
        device="phone"
        animation="floatingMedium"
        src={phoneMediumBalls}
      />

      <FloatingObjects
        device="phone"
        animation="floatingFast"
        src={phoneCloseBalls}
      />
    </>
  );
};

export default FloatingBallsBackground;
