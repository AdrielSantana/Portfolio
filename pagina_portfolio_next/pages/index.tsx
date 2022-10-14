import type {NextPage} from 'next'
import {useState} from 'react'
import Head from 'next/head'

import BurgerMenu from '../src/components/layout/BurgerMenu'
import PrincipalLayout from '../src/components/layout/PrincipalLayout'
import PrincipalCard from '../src/components/layout/PrincipalCard'
import HeroTitle from '../src/components/layout/HeroTitle'

import AboutCard from '../src/components/cards/AboutCard'
import ProjectsCard from '../src/components/cards/ProjectsCard'
import SkillsCard from '../src/components/cards/SkillsCard'
import ContactCard from '../src/components/cards/ContactCard'

const Home: NextPage = () => {
    const [card, setCard] = useState('hero')
    const [title, setTitle] = useState('/')

    const handleCardChange = (card: string) => {
        switch (card) {
            case 'about':
                setCard(card)
                setTitle('Sobre mim')
                break;
            case 'projects':
                setCard(card)
                setTitle('Projetos')
                break;
            case 'skills':
                setCard(card)
                setTitle('Habilidades')
                break;
            case 'contact':
                setCard(card)
                setTitle('Contato')
                break;
            default:
                setCard(card)
                setTitle('/')
                break;
        }
    }

    return (
        <div id='outer-container'>
            <Head>
                <title>Portfolio | Adriel Santana</title>
            </Head>

            <BurgerMenu handleCardChange={handleCardChange}/>

            <PrincipalLayout card={card} handleCardChange={handleCardChange} title={title}>
                {
                    (card === 'hero') ? <HeroTitle/> :
                        <PrincipalCard>
                            {
                                (card === 'about') && <AboutCard handleCardChange={handleCardChange}/>
                            }
                            {
                                (card === 'projects') && <ProjectsCard/>
                            }
                            {
                                (card === 'skills') && <SkillsCard/>
                            }
                            {
                                (card === 'contact') && <ContactCard/>
                            }
                        </PrincipalCard>
                }
            </PrincipalLayout>
        </div>
    )
}

export default Home