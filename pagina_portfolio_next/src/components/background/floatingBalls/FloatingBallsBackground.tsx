import desktopFarBalls from "../../../../public/images/background/skills/desktop_far_balls.svg";
import desktopMediumBalls from "../../../../public/images/background/skills/desktop_medium_balls.svg";
import desktopCloseBalls from "../../../../public/images/background/skills/desktop_close_balls.svg";

import phoneFarBalls from "../../../../public/images/background/skills/phone_far_balls.svg";
import phoneMediumBalls from "../../../../public/images/background/skills/phone_medium_balls.svg";
import phoneCloseBalls from "../../../../public/images/background/skills/phone_close_balls.svg";

import FloatingBalls from "./FloatingBalls";

const FloatingBallsBackground = () => {
  return (
    <>
      <FloatingBalls
        className="desktop-floating"
        animation="floatingSlow"
        src={desktopFarBalls}
      />

      <FloatingBalls
        className="desktop-floating"
        animation="floatingMedium"
        src={desktopMediumBalls}
      />

      <FloatingBalls
        className="desktop-floating"
        animation="floatingFast"
        src={desktopCloseBalls}
      />

      <FloatingBalls
        className="phone-floating"
        animation="floatingSlow"
        src={phoneFarBalls}
      />

      <FloatingBalls
        className="phone-floating"
        animation="floatingMedium"
        src={phoneMediumBalls}
      />

      <FloatingBalls
        className="phone-floating"
        animation="floatingFast"
        src={phoneCloseBalls}
      />
    </>
  );
};

export default FloatingBallsBackground;
