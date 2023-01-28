import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import * as React from "react";
import { Section } from "@react-email/section";

type Props = {
  name: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "";

const UserEmail = ({ name }: Props) => {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Entrarei em contato.</title>
      </Head>
      <Container style={main}>
        <Heading style={title} my="32" as="h2">
          <strong>
            <i>Olá, </i>
          </strong>
          {name}
        </Heading>
        <Text style={message}>
          Recebi sua mensagem e vou te responder o mais rápido o possível!
        </Text>
        <Section style={logoContainer}>
          <Link href="https://www.adrielsan.social">
            <Img
              src={`${baseUrl}/images/extra/logo.png`}
              alt="Logo"
              width="150"
              height="150"
            />
          </Link>
        </Section>
        <Hr style={hr} />
        <Text style={outro}>
          Agradecimentos,{" "}
          <Link style={link} href="https://www.adrielsan.social">
            <i>Adriel Santana</i>
          </Link>
          .
        </Text>
      </Container>
    </Html>
  );
};

const main = {
  backgroundColor: "#212121",
  padding: "1.5rem",
};

const font = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const hr = {
  borderColor: "#F8F9FA",
  margin: "2rem 0 1rem",
};

const title = {
  color: "#F8F9FA",
  ...font,
};

const message = {
  color: "#F8F9FA",
  paddingBottom: "1rem",
  fontSize: "1rem",
  ...font,
};

const logoContainer = {
  display: "grid",
  placeItems: "center",
};

const outro = {
  color: "#a3a3a3",
  ...font,
};

const link = {
  color: "#48E5C2",
};

export default UserEmail;
