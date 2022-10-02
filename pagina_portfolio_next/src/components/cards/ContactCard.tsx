import { Col, Row } from "react-bootstrap"

import ContactLink from "./contact/ContactLink"
import ContactForm from "./contact/ContactForm"

const ContactCard = () => {
    return (
        <>
            <Row style={{ height: '100%' }}>

                <Col style={{ minHeight: '100%' }} className="pb-3 d-flex flex-column align-items-center justify-content-evenly" xs={12} lg={6}>

                    <ContactLink
                        name={"LinkedIn"}
                        size={80}
                        imgUrl={"/images/me/linkedin.svg"}
                        link={'https://www.linkedin.com/in/adrielsan/'}
                    />

                    <ContactLink
                        name={"Telegram"}
                        size={90}
                        imgUrl={"/images/me/telegram.svg"}
                        link={'https://t.me/Adrielsan'}
                    />

                    <ContactLink
                        name={"WhatsApp"}
                        size={65}
                        imgUrl={"/images/me/whatsapp.svg"}
                        link={'https://wa.me/5579996911693?text=Olá,%20vim%20do%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato!'}
                    />

                </Col>

                <Col style={{ minHeight: '100%' }} className="pb-3 d-flex flex-column align-items-center justify-content-center" xs={12} lg={6}>
                    <ContactForm/>
                </Col>

            </Row>
        </>
    )
}

export default ContactCard