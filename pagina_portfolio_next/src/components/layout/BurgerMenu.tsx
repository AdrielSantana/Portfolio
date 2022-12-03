import {useState} from 'react'

import {Cross as Hamburger} from 'hamburger-react'
import {slide as Menu} from 'react-burger-menu'
import {Col, Row} from 'react-bootstrap'

import BurgerButton from './BurgerButton'

type Props = {
    handleCardChange: (card: string) => void
}

const BurguerMenu = ({handleCardChange}: Props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <>
            <Menu
                customBurgerIcon={<Hamburger color="#212121" distance="md" direction="right" rounded
                                             onToggle={setNavbarOpen}/>}
                customCrossIcon={false}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
                noOverlay
                isOpen={navbarOpen}
            >
                <Row className='justify-items-start align-self-center'>
                    <Col>
                        <a onClick={e => handleCardChange('hero')} className='pointer nav-title'>Adriel&apos;s Portfolio</a>
                    </Col>
                </Row>

                <Row className='align-self-center'>
                    <Col>
                        <BurgerButton
                            handleCardChange={handleCardChange}
                            name={'Sobre'}
                            card={'about'}
                        />
                    </Col>
                    <Col>
                        <BurgerButton
                            handleCardChange={handleCardChange}
                            name={'Projetos'}
                            card={'projects'}
                        />
                    </Col>
                    <Col>
                        <BurgerButton
                            handleCardChange={handleCardChange}
                            name={'Habilidades'}
                            card={'skills'}
                        />
                    </Col>
                    <Col>
                        <BurgerButton
                            handleCardChange={handleCardChange}
                            name={'Contato'}
                            card={'contact'}
                        />
                    </Col>
                </Row>

                <div></div>
            </Menu>
        </>
    )
}

export default BurguerMenu