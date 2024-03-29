import Image from "next/image";

import lowPolyDesktop from "../../../public/images/background/projects/low_poly_desktop.svg";
import lowPolyPhone from "../../../public/images/background/projects/low_poly_phone.svg";

const LowPolyBackground = () => {
  return (
    <div className="solid-background">
      <Image draggable={false} className="phone-poly" fill priority alt="Low Poly" src={lowPolyPhone}></Image>
      <Image draggable={false} className="desktop-poly" fill priority alt="Low Poly" src={lowPolyDesktop}></Image>
    </div>
  );
};

export default LowPolyBackground;
