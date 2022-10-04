import Image from "next/image"
import { useState } from "react";
import { Container } from "react-bootstrap"
import { motion, AnimatePresence, transform } from 'framer-motion'

type Props = {
    title: string;
    children: React.ReactNode;
    handleCardChange: (card: string) => void
    card: string
};

const animationCard = {
    hiddenNext: {
        x: "130vh",
        opacity: 0,
    },
    hiddenPrevious: {
        x: "-130vh",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 600,
        }
    },
    exitNext: {
        x: "-130vh",
        opacity: 0,
        transition: {
            duration: 0.05,
            type: "spring",
            damping: 100,
            stiffness: 600,
        }
    },
    exitPrevious: {
        x: "130vh",
        opacity: 0,
        transition: {
            duration: 0.05,
            type: "spring",
            damping: 100,
            stiffness: 600,
        }
    }
}

const animationTitle = {
    hidden: {
        y: "-6rem",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 600,
        }
    },
    exit: {
        y: "-6rem",
        opacity: 0,
        transition: {
            duration: 0.05,
            type: "spring",
            damping: 100,
            stiffness: 600,
        }
    }
}

const PrincipalLayout = ({ title, children, card, handleCardChange }: Props) => {
    const [slideAnimation, setSlideAnimation] = useState<string>('next')

    const findNext = (card: string) => {
        let nextCard: string

        switch (card) {
            case 'about':
                nextCard = 'projects'
                break;
            case 'projects':
                nextCard = 'skills'
                break;
            case 'skills':
                nextCard = 'contact'
                break;
            case 'contact':
                nextCard = 'about'
                break;
            default:
                nextCard = 'about'
                break;
        }
        setSlideAnimation('next')

        return nextCard
    }

    const findPrevious = (card: string) => {
        let previousCard: string

        switch (card) {
            case 'about':
                previousCard = 'contact'
                break;
            case 'projects':
                previousCard = 'about'
                break;
            case 'skills':
                previousCard = 'projects'
                break;
            case 'contact':
                previousCard = 'skills'
                break;
            default:
                previousCard = 'about'
                break;
        }
        setSlideAnimation('previous')

        return previousCard
    }

    return (
        <>
            <div className="perfil-photo-container">
                <Image
                    width={400}
                    height={300}
                    priority
                    alt="perfil photo"
                    src={"/images/me/perfil.png"}>
                </Image>
            </div>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                <motion.div
                    key={title}
                    variants={animationTitle}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"exit"}
                >
                    <p className="h1 title title-hero text-center">
                        {title}
                    </p>
                </motion.div>
            </AnimatePresence>

            <Container fluid className="justify-content-center align-items-center principal-layout d-flex" id='page-wrap'>
                <Container className="d-flex justify-content-center card-container">
                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                    >
                        <motion.div
                            key={title}
                            variants={animationCard}
                            initial={(slideAnimation === 'next') ? "hiddenNext" : "hiddenPrevious"}
                            animate={"visible"}
                            exit={(slideAnimation === 'next') ? "exitNext" : "exitPrevious"}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </Container>
            </Container>

            <motion.span
                layout
                className="previous-btn slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    left: 'calc(50% - 7.3rem)',
                    top: '3.1rem',
                    transform: 'translate(-50 %, -50 %)'
                }}
            >
                <Image
                    onClick={e => handleCardChange(findPrevious(card))}
                    src={'/images/extra/pointer.svg'}
                    alt={'Previous card'}
                    height={30}
                    width={30}
                />
            </motion.span>

            <motion.span
                layout
                className="next-btn slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    left: 'calc(50% + 5.3rem)',
                    top: '3.1rem',
                    transform: 'translate(-50 %, -50 %)',
                }}
            >
                <Image
                    onClick={e => handleCardChange(findNext(card))}
                    style={{ transform: 'rotate(180deg)' }}
                    src={'/images/extra/pointer.svg'}
                    alt={'Next card'}
                    height={30}
                    width={30}
                />
            </motion.span>
        </>
    )
}

export default PrincipalLayout