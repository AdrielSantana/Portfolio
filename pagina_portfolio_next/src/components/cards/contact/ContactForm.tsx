import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useContactForm from "../../../hooks/useContactForm";

const ContactForm = () => {
  const { nameRef, emailRef, messageRef, result, showResult, handleSubmit } =
    useContactForm();

  return (
    <>
      <p className="fs-4 text-center form-title">Deixe sua mensagem</p>

      <Form style={{ width: "80%" }} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            ref={nameRef}
            placeholder="Seu nome"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            ref={emailRef}
            placeholder="Seu email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            required
            as="textarea"
            ref={messageRef}
            placeholder="Olá, gostaria de te contatar..."
          />
          <Form.Text className="text-muted">
            Será enviado um email de confirmação, favor checar caixa de spam
          </Form.Text>
        </Form.Group>

        <motion.div
          className="d-flex justify-content-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="primary" className="form-button" type="submit">
            Enviar
          </Button>
        </motion.div>
        {showResult ? (
          result ? (
            <h6 className="form-confirmation pt-3 text-center">
              Sua mensagem foi{" "}
              <strong className="sucessful">
                <i>enviada</i>
              </strong>
              , entrarei em contato assim que possível!
            </h6>
          ) : (
            <h6 className="form-confirmation pt-3 text-center">
              Sua mensagem foi{" "}
              <strong className="denied">
                <i>negada</i>
              </strong>
              , tente novamente ou me contate por outros meios.
            </h6>
          )
        ) : (
          <></>
        )}
      </Form>
    </>
  );
};

export default ContactForm;
