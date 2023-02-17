import tomenoteImg from "../../public/images/projects/tomenote.png";
import oneBitLifeImg from "../../public/images/projects/oneBitLife.png";
import catalogoAppleImg from "../../public/images/projects/catalogoApple.png";
import meuClimaImg from "../../public/images/projects/meuClima.png";
import spaceXImg from "../../public/images/projects/spaceX.png";
import portfolioImg from "../../public/images/projects/portfolio.png";
import githubImg from "../../public/images/projects/github.png";

import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  imgUrl: StaticImageData;
  link: string;
};

export const projects: Project[] = [
  {
    name: "Tomenote",
    description:
      "Projeto Full-Stack que se baseia no conceito do App Evernote ( criação e edição de notas ). Utilizei Figma, Sass, BootStrap, ReactJs, NodeJS e MongoDB.",
    imgUrl: tomenoteImg,
    link: "http://www.tomenote.adrielsan.social",
  },
  {
    name: "OneBitLife",
    description:
      "Projeto mobile completo mostrando as principais funcionalidades do React Navite e Expo. Utilizei React Native e SQLite.",
    imgUrl: oneBitLifeImg,
    link: "https://github.com/AdrielSantana/Projeto-React-Native-OBC",
  },
  {
    name: "Catálogo Apple",
    description:
      "Projeto utilizando o framework Next Js e TypeScript simulando um catálogo com carrinho de compras.",
    imgUrl: catalogoAppleImg,
    link: "http://www.catalogoapple.adrielsan.social",
  },
  {
    name: "Meu Clima",
    description:
      "Projeto Front-End React projetado para mostrar o clima local, atual e previsões consumindo uma API externa.",
    imgUrl: meuClimaImg,
    link: "http://www.climalocal.adrielsan.social",
  },
  {
    name: "SpaceX",
    description:
      "Projeto Front-End inspirado no site da SpaceX, mostrando sua funcionalidade e responsividade Front-End, utilizando apenas HTML, CSS, Bootstrap e Sass.",
    imgUrl: spaceXImg,
    link: "http://www.spacex.adrielsan.social",
  },
  {
    name: "Meu Portfolio",
    description:
      "Projeto utilizando o framework Next Js e TypeScript para apresentar meu portfolio com um visual limpo, moderno, responsivo e de alta performance.",
    imgUrl: portfolioImg,
    link: "",
  },
  {
    name: "Meu Github",
    description:
      "Aqui você pode ver meus variados projetos e descrição técnica sobre eles. Dá uma olhadinha :)",
    imgUrl: githubImg,
    link: "https://github.com/AdrielSantana?tab=repositories",
  },
];
