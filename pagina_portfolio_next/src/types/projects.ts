import tomenoteImg from "../../public/images/projects/tomenote.png";
import oneBitLifeImg from "../../public/images/projects/oneBitLife.png";
import catalogoAppleImg from "../../public/images/projects/catalogoApple.png";
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

export const projects = [
  {
    name: "dashboardApp",
    imgUrl: dashboardApp,
    link: "https://dashboard.adrielsan.pro",
  },
  {
    name: "mandaDex",
    imgUrl: mandaDex,
    link: "https://mandadex.adrielsan.pro",
  },
  {
    name: "tomenote",
    imgUrl: tomenoteImg,
    link: "https://tomenote.adrielsan.pro",
  },
  {
    name: "gameAwards",
    imgUrl: gameAwards,
    link: "https://github.com/AdrielSantana/game-awards",
  },
  {
    name: "oneBitLife",
    imgUrl: oneBitLifeImg,
    link: "https://github.com/AdrielSantana/Projeto-React-Native-OBC",
  },
  {
    name: "catalogoApple",
    imgUrl: catalogoAppleImg,
    link: "https://catalogo.adrielsan.pro",
  },
  {
    name: "meuGitHub",
    imgUrl: githubImg,
    link: "https://github.com/AdrielSantana?tab=repositories",
  },
];
