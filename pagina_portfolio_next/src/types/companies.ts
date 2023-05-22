import { StaticImageData } from "next/image";
import mandarinImg from "../../public/images/career/mandarin.png";

export type Company = {
  name: string;
  description: string;
  period: string;
  imgUrl: StaticImageData;
};

export const companiesImgUrl = {
  mandarin: mandarinImg,
};
