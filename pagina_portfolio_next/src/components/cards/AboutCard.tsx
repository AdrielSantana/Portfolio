import { useCard } from "../../hooks/useCard";

const AboutCard = () => {
  const { handleCardChange } = useCard();

  return (
    <>
      <p className="about-text">
        Olá, meu nome é Adriel Santana e sou um programador Full-Stack de 20
        anos de idade, com experiência em diversas tecnologias. Atualmente, sou
        estudante de Engenharia da Computação e resido em Aracaju, Sergipe.
        Desde que comecei a programar, há alguns anos, descobri que a tecnologia
        é uma das minhas grandes paixões e decidi seguir carreira nessa área.
      </p>
      <p className="about-text">
        Minha experiência em programação inclui trabalhar em{" "}
        <a onClick={(e) => handleCardChange("projects")}>
          <strong>
            <i>
              <span className="pointer">projetos</span>
            </i>
          </strong>
        </a>{" "}
        complexos, utilizando diversas linguagens de programação, bancos de
        dados e frameworks. Além disso, também possuo{" "}
        <a onClick={(e) => handleCardChange("skills")}>
          <strong>
            <i>
              <span className="pointer">habilidades</span>
            </i>
          </strong>
        </a>{" "}
        em áreas como análise de dados e desenvolvimento de aplicativos móveis.
      </p>
      <p className="about-text">
        Busco sempre estar atualizado com as novas tecnologias e tendências do
        mercado, por isso, dedico uma parte do meu tempo para estudar e
        aprimorar minhas habilidades. Sou um profissional dedicado, organizado e
        apaixonado por solucionar problemas através da programação.
      </p>
      <p className="about-text">
        Estou sempre em busca de novos desafios e oportunidades para colocar em
        prática minhas habilidades e aprender ainda mais. Se você busca um
        programador Full-Stack comprometido e com experiência em diversas
        tecnologias, entre em{" "}
        <a onClick={(e) => handleCardChange("contact")}>
          <strong>
            <i>
              <span className="pointer">contato</span>
            </i>
          </strong>
        </a>{" "}
        comigo!
      </p>
    </>
  );
};

export default AboutCard;
