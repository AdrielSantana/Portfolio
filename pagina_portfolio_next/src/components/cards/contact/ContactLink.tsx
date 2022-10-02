import { Col, Row } from "react-bootstrap"
import Image from 'next/image'

import { motion } from 'framer-motion'

type Props = {
    name: string
    imgUrl: string
    size: number
    link: string
}

const ContactLink = ({ name, imgUrl, size, link}: Props) => {


    return (
        <>
            <motion.a 
            target='_blank'
            href={link}
            whileTap={{ scale: 0.95 }} 
            whileHover={{ scale: 1.05 }} 
            className='contact-link'
            >
                <Row>
                    <Col className="pb-3 d-flex align-self-center justify-content-center" xs={12} sm={6}>
                        <Image
                            width={size}
                            height={size}
                            src={imgUrl}
                            alt={name}
                        />
                    </Col>
                    <Col xs={12} sm={6} className="d-flex align-self-center justify-content-center">
                        <p className="fs-4">{name}</p>
                    </Col>
                </Row>
            </motion.a>
        </>
    )
}

export default ContactLink