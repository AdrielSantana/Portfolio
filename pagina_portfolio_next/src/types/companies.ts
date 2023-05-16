import { StaticImageData } from "next/image";

import mandarin from "../../public/images/career/mandarin.png";

export type Company = {
  name: string;
  description: string;
  imgUrl: StaticImageData;
  date: string;
};

export const companies: { [company: string]: Company } = {
  mandarin: {
    name: "Mandarin",
    description: "Estagiário Full-Stack",
    date: "Mar/2023 - Atual",
    imgUrl: mandarin,
  },
};
