import { Col, Row } from "react-bootstrap"
import SkillCard from "./skills/SkillCard"

import { motion } from 'framer-motion'

export type Skill = {
    name: string
    description: string
    imgUrl: string
    color: string
}

const SkillsCard = () => {
    const skills: Skill[] = [
        {
            name: 'HTML',
            description: 'Linguagem de marcação utilizada na construção de páginas na Web.',
            imgUrl: '/images/skills/html.svg',
            color: '#f06529'
        },
        {
            name: 'CSS',
            description: 'Mecanismo para adicionar estilo a um documento web em formato cascata.',
            imgUrl: '/images/skills/css.svg',
            color: '#2965f1'
        },
        {
            name: 'JavaScript',
            description: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
            imgUrl: '/images/skills/javascript.svg',
            color: '#f7df1e'
        },
        {
            name: 'Sass',
            description: 'Linguagem de extensão do CSS pré-compilada para dar mais agilidade e utilidade ao CSS padrão, além da facil manutenção e desenvolvimento de páginas.',
            imgUrl: '/images/skills/sass.svg',
            color: '#cd6799'
        },
        {
            name: 'Bootstrap',
            description: 'Framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web.',
            imgUrl: '/images/skills/bootstrap.svg',
            color: '#563d7c'
        },
        {
            name: 'Git',
            description: 'Um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.',
            imgUrl: '/images/skills/git.svg',
            color: '#f1502f'
        }
        ,
        {
            name: 'MongoDB',
            description: 'Banco de dados NoSQL. O MongoDB usa documentos semelhantes a JSON com esquemas.',
            imgUrl: '/images/skills/mongoDB.svg',
            color: '#58AA50'
        },
        {
            name: 'Figma',
            description: 'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.',
            imgUrl: '/images/skills/figma.svg',
            color: '#E64A19'
        },
        {
            name: 'Node Js',
            description: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
            imgUrl: '/images/skills/nodeJs.svg',
            color: '#388E3C'
        },
        {
            name: 'React',
            description: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
            imgUrl: '/images/skills/react.svg',
            color: '#4E7AB5'
        }
        ,
        {
            name: 'TypeScript',
            description: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
            imgUrl: '/images/skills/typescript.svg',
            color: '#1976D2'
        }
        ,
        {
            name: 'Next Js',
            description: 'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
            imgUrl: '/images/skills/nextJs.svg',
            color: '#95A5A6'
        }
    ]

    return (
        <>
            <div>
                <Row>
                    {
                        skills.map((skill: Skill, i: number) => {
                            return (
                                <Col className="my-4 d-flex justify-content-center align-self-start" xs={12} md={6} lg={4} key={i}>
                                    <motion.div
                                        className='d-flex flex-column align-items-center skill-container'
                                        key={i}
                                        style={{ backgroundColor: 'transparent', perspective: '1000px' }}
                                        initial={{ transform: 'rotateY(90deg)', opacity: 0, }}
                                        whileInView={{ transform: 'rotateY(0deg)', opacity: 1, transition: { delay: 0.15, type: "spring", damping: 30, stiffness: 130 } }}
                                    >
                                        <SkillCard skill={skill} key={i} />
                                    </motion.div>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </div>
        </>
    )
}

export default SkillsCard