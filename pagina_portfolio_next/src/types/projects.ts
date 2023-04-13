import tomenoteImg from "../../public/images/projects/tomenote.png";
import oneBitLifeImg from "../../public/images/projects/oneBitLife.png";
import catalogoAppleImg from "../../public/images/projects/catalogoApple.png";
import meuClimaImg from "../../public/images/projects/meuClima.png";
import spaceXImg from "../../public/images/projects/spaceX.png";
import portfolioImg from "../../public/images/projects/portfolio.png";
import githubImg from "../../public/images/projects/github.png";
import gameAwards from "../../public/images/projects/gameAwards.png";
import dashboardApp from "../../public/images/projects/dashboardApp.png";
import mandaDex from "../../public/images/projects/mandaDex.png";

import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  imgUrl: StaticImageData;
  link: string;
};

export const projects: Project[] = [
  {
    name: "Dashboard App",
    description:
      "Projeto Full-Stack Web. Veja dados e informações relevantes sobre a empresa. Clique na engranagem para acessar. Utilizei ChakraUi, NextJs, TypeScript e MongoDB.",
    imgUrl: dashboardApp,
    link: "https://dashboard-app-indol.vercel.app",
  },
  {
    name: "MandaDex",
    description:
      "Projeto Front-End Web. Procure e ache seu pokemon favorito. Api fornecida pela Mandarin desabilitada no momento. Utilizei Bootstrap, NextJs e TypeScript.",
    imgUrl: mandaDex,
    link: "https://mandadex-client.vercel.app",
  },
  {
    name: "Tomenote",
    description:
      "Projeto Full-Stack Web. Crie e edite notas de onde quiser. Utilizei Figma, Sass, Bootstrap, ReactJs, NodeJS e MongoDB.",
    imgUrl: tomenoteImg,
    link: "http://www.tomenote.adrielsan.social",
  },
  {
    name: "Game Awards",
    description:
      "Projeto Full-Stack Mobile. Vote nos jogos e categorias do Game Awards. Utilizei Figma, Sequelize, Express, Postgres e React Native / Expo.",
    imgUrl: gameAwards,
    link: "https://github.com/AdrielSantana/game-awards",
  },
  {
    name: "OneBitLife",
    description:
      "Projeto Full-Stack Mobile. Cumpra bons hábitos para ajudar o robô. Utilizei React Native / Expo e SQLite.",
    imgUrl: oneBitLifeImg,
    link: "https://github.com/AdrielSantana/Projeto-React-Native-OBC",
  },
  {
    name: "Catálogo Apple",
    description:
      "Projeto Front-End Web. Simula um catálogo com carrinho de compras. Utilizei Next Js e TypeScript.",
    imgUrl: catalogoAppleImg,
    link: "http://www.catalogoapple.adrielsan.social",
  },
  {
    name: "Meu Clima",
    description:
      "Projeto Front-End Web. Mostrar o clima local, atual e previsões consumindo uma API externa. Utilizei React.",
    imgUrl: meuClimaImg,
    link: "http://www.climalocal.adrielsan.social",
  },
  {
    name: "SpaceX",
    description:
      "Projeto Front-End Web. Insparado no site da SpaceX, mostrando sua funcionalidade e responsividade Front-End. Utilizei apenas HTML, CSS, Bootstrap e Sass.",
    imgUrl: spaceXImg,
    link: "http://www.spacex.adrielsan.social",
  },
  {
    name: "Meu Portfolio",
    description:
      "Projeto Front-End Web. Apresentar meu portfolio com um visual limpo, moderno, responsivo e de alta performance. Utilizei Next Js e TypeScript.",
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
