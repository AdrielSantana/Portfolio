import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { Button } from 'react-bootstrap'

type Props = {
    handleCardChange: (card: string) => void
    name: string
    card: string
}

const BurgerButton = ({ handleCardChange, name, card}: Props) => {
    return (
        <>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                <Button className='nav-button' onClick={e => handleCardChange(card)}>
                    <a>{name}</a>
                </Button>
            </motion.div>
        </>
    )
}

export default BurgerButton