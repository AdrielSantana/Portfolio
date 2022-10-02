import type { NextPage } from 'next'
import { useState } from 'react'
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
  const [title, setTitle] = useState('Me use!')

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
        setTitle('de novo?')
        break;
    }
  }

  return (
    <div id='outer-container'>
      <Head>
        <title>Portfolio | Adriel Santana</title>
        <meta name="description" content="Adriel's Portfolio" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <BurgerMenu handleCardChange={handleCardChange} />

      <PrincipalLayout card={card} handleCardChange={handleCardChange} title={title}>
        {
          (card === 'hero') ? <HeroTitle /> :
            <PrincipalCard>
              {
                (card === 'about') && <AboutCard handleCardChange={handleCardChange} />
              }
              {
                (card === 'projects') && <ProjectsCard />
              }
              {
                (card === 'skills') && <SkillsCard />
              }
              {
                (card === 'contact') && <ContactCard />
              }
            </PrincipalCard>
        }
      </PrincipalLayout>
    </div >
  )
}

export default Home