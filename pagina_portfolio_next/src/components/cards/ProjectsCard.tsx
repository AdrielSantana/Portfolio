import { Col, Row } from "react-bootstrap"
import ProjectCard from "./projects/ProjectCard"
import { motion } from "framer-motion"

export type Project = {
    name: string
    description: string
    imgUrl: string
    link: string
}

const ProjectsCard = () => {
    const projects: Project[] = [
        {
            name: 'Tomenote',
            description: 'Projeto Full-Stack que se baseia no conceito do App Evernote ( criação e edição de notas ). Utilizei Figma, Sass, BootStrap, ReactJs, NodeJS e MongoDB.',
            imgUrl: '/images/projects/tomenote.png',
            link: 'http://www.tomenote.adrielsan.social'
        },
        {
            name: 'Catálogo Apple',
            description: 'Projeto utilizando o framework Next Js e TypeScript simulando um catálogo com carrinho de compras.',
            imgUrl: '/images/projects/catalogoApple.png',
            link: 'http://www.catalogoapple.adrielsan.social'
        },
        {
            name: 'Meu Clima',
            description: 'Projeto Front-End React projetado para mostrar o clima local, atual e previsões consumindo uma API externa.',
            imgUrl: '/images/projects/meuClima.png',
            link: 'http://www.climalocal.adrielsan.social'
        },
        {
            name: 'SpaceX',
            description: 'Projeto Front-End inspirado no site da SpaceX, mostrando sua funcionalidade e responsividade Front-End, utilizando apenas HTML, CSS, Bootstrap e Sass.',
            imgUrl: '/images/projects/spaceX.png',
            link: 'http://www.spacex.adrielsan.social'
        },
        {
            name: 'Meu Portfolio',
            description: 'Projeto utilizando o framework Next Js e TypeScript para apresentar meu portfolio com um visual limpo, moderno, responsivo e de alta performance.',
            imgUrl: '/images/projects/portfolio.png',
            link: ''
        },
        {
            name: 'Meu Github',
            description: 'Aqui você pode ver meus variados projetos e descrição técnica sobre eles. Dá uma olhadinha :)',
            imgUrl: '/images/projects/github.png',
            link: 'https://github.com/AdrielSantana?tab=repositories'
        }
    ]

    return (
        <>
            <Row>
                {
                    projects.map((project: Project, i: number) => {
                        return (
                            <Col className="my-4 d-flex justify-content-center align-self-start" xs={12} md={6} key={i}>
                                <motion.div
                                    className='d-flex flex-column align-items-center skill-container'
                                    key={i}
                                    initial={{ y: '-4rem', opacity: 0, }}
                                    whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2, type: "spring", damping: 50, stiffness: 130 } }}
                                >
                                    <ProjectCard project={project} key={i} />
                                </motion.div>
                            </Col>
                        )
                    }
                    )
                }
            </Row>
        </>
    )
}

export default ProjectsCard