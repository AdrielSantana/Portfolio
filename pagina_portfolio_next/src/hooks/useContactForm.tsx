import { FormEvent, useRef, useState } from "react";
import UserEmail from "../../emails";
import { render } from "@react-email/render";

type Request = {
  email: string;
  subject: string;
  text: string;
  html: string;
};

type fetchData = {
  validate: boolean;
};

export const useContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [result, setResult] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const getFirstName = (fullName: string | undefined): string => {
    const firstName: string = fullName ? fullName.split(" ")[0] : "";

    return firstName;
  };

  const resetInputs = (): void => {
    nameRef.current ? (nameRef.current.value = "") : null;
    emailRef.current ? (emailRef.current.value = "") : null;
    messageRef.current ? (messageRef.current.value = "") : null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const message = messageRef?.current?.value;

    const html = render(<UserEmail name={getFirstName(name)} />, {
      pretty: true,
    });

    const text = render(<UserEmail name={name} />, {
      plainText: true,
    });

    let userRequest: Request = {
      email: `${email}`,
      subject: "Confirmação de recebimento",
      text: text,
      html: html,
    };

    let myRequest: Request = {
      email: "adriel.sanxd@gmail.com",
      subject: `Mensagem de ${name}`,
      text: "Email: ${email}\n\nMensagem: ${message}",
      html: `<p>Email: ${email}\n\nMensagem: ${message}<p>`,
    };

    try {
      const userReq: fetchData = await fetch(`/api/contact`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify(userRequest),
      }).then((res) => res.json());

      const myReq: fetchData = await fetch(`/api/contact`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify(myRequest),
      }).then((res) => res.json());

      if (myReq.validate && userReq.validate) {
        setResult(true);
      } else {
        setResult(false);
      }

      resetInputs();

      setShowResult(true);
    } catch (error) {
      console.log(error);
      setResult(false);

      setShowResult(true);
    }
  };

  return {
    nameRef,
    emailRef,
    messageRef,
    result,
    showResult,
    handleSubmit,
  };
};

export default useContactForm;
