import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useContactForm from "../../../hooks/useContactForm";

type Props = {
  translation: {
    title: string
    labels: {
      name: string;
      message: string;
      send: string;
    };
    placeholder: {
      name: string;
      email: string;
      message: string;
    };
    mutedText: {
      message: string;
    };
    result: {
      message1: string;
      sended: string;
      messageSended: string;
      denied: string;
      messageDenied: string;
    };
  };
};

const ContactForm = ({ translation }: Props) => {
  const { nameRef, emailRef, messageRef, result, showResult, handleSubmit } =
    useContactForm();

  return (
    <>
      <p className="fs-4 text-center form-title">{translation.title}</p>

      <Form style={{ width: "80%" }} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>{translation.labels.name}</Form.Label>
          <Form.Control
            required
            type="text"
            ref={nameRef}
            placeholder={translation.placeholder.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            ref={emailRef}
            placeholder={translation.placeholder.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>{translation.labels.message}</Form.Label>
          <Form.Control
            required
            as="textarea"
            ref={messageRef}
            placeholder={translation.placeholder.message}
          />
          <Form.Text className="text-muted">
            {translation.mutedText.message}
          </Form.Text>
        </Form.Group>

        <motion.div
          className="d-flex justify-content-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="primary" className="form-button" type="submit">
            {translation.labels.send}
          </Button>
        </motion.div>
        {showResult ? (
          result ? (
            <h6 className="form-confirmation pt-3 text-center">
              {translation.result.message1}
              <strong className="sucessful">
                <i>{translation.result.sended}</i>
              </strong>
              {translation.result.messageSended}
            </h6>
          ) : (
            <h6 className="form-confirmation pt-3 text-center">
              {translation.result.message1}
              <strong className="denied">
                <i>{translation.result.denied}</i>
              </strong>
              {translation.result.messageDenied}
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
