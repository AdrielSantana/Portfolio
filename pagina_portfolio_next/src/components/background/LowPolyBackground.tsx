import Image from "next/image";

import lowPoly from "../../../public/images/background/projects/low_poly.svg";

const LowPolyBackground = () => {
  return (
    <div className="solid-background">
      <Image fill priority alt="perfil photo" src={lowPoly}></Image>
    </div>
  );
};

export default LowPolyBackground;
