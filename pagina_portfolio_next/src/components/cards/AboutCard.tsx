import { useCard } from "../../hooks/useCard";

const AboutCard = () => {
  const { handleCardChange } = useCard();

  return (
    <>
      <p className="about-text">
        Olá! Meu nome é Adriel Santana e sou um engenheiro de computação
        apaixonado por tecnologia e programação. Com apenas 20 anos de idade, já
        tenho uma vasta experiência como programador Full-Stack mobile e web, e
        estou sempre em busca de novos desafios e oportunidades para aprender e
        crescer profissionalmente.
      </p>
      <p className="about-text">
        Tenho o privilégio de trabalhar em{" "}
        <a onClick={(e) => handleCardChange("projects")}>
          <strong>
            <i>
              <span className="pointer">projetos</span>
            </i>
          </strong>
        </a>{" "}
        incríveis que me permitem aplicar minhas habilidades e conhecimentos
        para criar soluções inovadoras e eficientes.
      </p>
      <p className="about-text">
        Meu objetivo como programador é sempre entregar resultados de alta
        qualidade, seguindo as melhores práticas do mercado e buscando
        constantemente aprimorar minha técnica e criatividade. Estou sempre
        aberto a novos desafios e oportunidades, e espero poder colaborar em
        projetos que possam agregar valor e impactar positivamente a vida das
        pessoas.
      </p>
      <p className="about-text">
        Se você estiver em busca de um programador dedicado, apaixonado por
        tecnologia e com{" "}
        <a onClick={(e) => handleCardChange("skills")}>
          <strong>
            <i>
              <span className="pointer">habilidades</span>
            </i>
          </strong>
        </a>{" "}
        comprovadas em desenvolvimento mobile e web, não hesite em entrar em{" "}
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
