import {FormEvent} from "react"
import {useState} from "react"
import {Form, Button} from "react-bootstrap"
import {motion} from 'framer-motion'

type Request = {
    email: string
    subject: string
    message: string
}

type fetchData = {
    validate: boolean
}

const ContactForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const [result, setResult] = useState<boolean>(false)
    const [showResult, setShowResult] = useState<boolean>(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let userRequest: Request = ({
            email: email,
            subject: 'Confirmação de recebimento',
            message: `Olá ${name}, recebi sua mensagem e vou te responder o mais rápido o possível!.\n\n\nAgradecimentos, Adriel Santana.`
        })

        let myRequest: Request = {
            email: 'adriel.sanxd@gmail.com',
            subject: `Mensagem de ${name}`,
            message: `Email: ${email}\n\nMensagem: ${message}`
        }


        try {
            const userReq: fetchData = await fetch(`/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userRequest)
            }).then(res => res.json())

            const myReq: fetchData = await fetch(`/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(myRequest)
            }).then(res => res.json())

            setName('')
            setEmail('')
            setMessage('')

            if (myReq.validate && userReq.validate) {
                setResult(true)
            } else {
                setResult(false)
            }

            setShowResult(true)
        } catch (error) {
            console.log(error)
            setResult(false)

            setShowResult(true)
        }
    }

    return (
        <>
            <p className="fs-4 text-center form-title">Deixe sua mensagem</p>

            <Form style={{'width': '80%'}} onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control required type="text" value={name} onChange={e => setName(e.target.value)}
                                  placeholder="Seu nome"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" value={email} onChange={e => setEmail(e.target.value)}
                                  placeholder="Seu email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control required as="textarea" value={message} onChange={e => setMessage(e.target.value)}
                                  placeholder="Olá, gostaria de te contatar..." rows={3}/>
                    <Form.Text className="text-muted">
                        Será enviado um email de confirmação, favor checar caixa de spam
                    </Form.Text>
                </Form.Group>

                <motion.div className="d-flex justify-content-center" whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}>
                    <Button variant="primary" className="form-button" type="submit">
                        Enviar
                    </Button>
                </motion.div>
                {
                    showResult ? (result ?
                            <h6 className="form-confirmation pt-3 text-center">Sua mensagem foi <strong
                                className="sucessful"><i>enviada</i></strong>, entrarei em contato assim que possível!
                            </h6>
                            :
                            <h6 className="form-confirmation pt-3 text-center">Sua mensagem foi <strong
                                className="denied"><i>negada</i></strong>, tente novamente ou me contate por outros
                                meios.</h6>
                    ) : <></>
                }

            </Form>
        </>
    )
}

export default ContactForm