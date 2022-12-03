type Props = {
    handleCardChange: (card: string) => void
}

const AboutCard = ({handleCardChange}: Props) => {
    return (
        <>
            <p className="about-text">
                Olá, me chamo Adriel Santana, sou programador Full-Stack, tenho 19 anos e resido em Aracaju, Sergipe.
                Desde pequeno tenho anseio para aprender coisas novas, e isso só aumentou ao ter descoberto o mundo da
                programação.
                Desde então o foco e uma boa organização foi essencial para o desenvolvimento na carreira.
            </p>
            <p className="about-text">
                Comecei a cursar engenharia de computação no intuito de descobrir mais sobre computadores,
                porém descobri um grande empecilho nessa escolha: <strong>a faculdade não te ensina a programar de
                verdade.</strong> Depois de perceber isso, fui de cabeça no aprendizado auto-didata, pesquisando e
                aprendendo através da própria internet. Então larguei a faculdade?
                Não, pois a faculdade é muito importante para as Soft-Skills <i>e o almoço é bom</i>, portanto irei
                terminar o curso.
            </p>
            <p className="about-text">
                Quer ver como estou me saindo? dá uma olhada nos meu últimos <a
                onClick={e => handleCardChange('projects')}><strong><i><span className="pointer">projetos</span></i></strong></a>!
                Minha curva de aprendizagem é <strong>O(!n)!</strong>
            </p>
        </>
    )
}

export default AboutCard