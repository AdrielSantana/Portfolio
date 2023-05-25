import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import * as React from "react";

type Props = {
  name?: string;
  translation: {
    head: string;
    hello: string;
    feedback: string;
    thanks: string;
  };
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "";

const UserEmail = ({ name, translation }: Props) => {
  return (
    <Html lang="pt-br">
      <Head>
        <title>{translation.head}</title>
      </Head>
      <Container style={main}>
        <Heading style={title} my="32" as="h2">
          <strong>
            <i>{translation.hello}</i>
          </strong>
          {name}
        </Heading>
        <Text style={message}>{translation.feedback}</Text>
        <Link href="https://www.adrielsan.social">
          <Img
            style={image}
            src={`${baseUrl}/images/extra/logo.png`}
            alt="Logo"
            width="150"
            height="150"
          />
        </Link>
        <Hr style={hr} />
        <Text style={outro}>
          {translation.thanks}
          <Link style={link} href="https://www.adrielsan.social">
            <i>Adriel Santana</i>
          </Link>
          .
        </Text>
      </Container>
    </Html>
  );
};

const flex = {
  display: "flex",
  justifyContent: "center",
};

const image = { margin: "0 auto" };

const main = {
  backgroundColor: "#212121",
  padding: "1.5rem",
  ...flex,
};

const text = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  textAlign: "center",
} as React.CSSProperties;

const hr = {
  borderColor: "#F8F9FA",
  margin: "2rem 0 1rem",
};

const title = {
  color: "#F8F9FA",
  ...text,
};

const message = {
  color: "#F8F9FA",
  paddingBottom: "1rem",
  fontSize: "1rem",
  ...text,
};

const outro = {
  color: "#a3a3a3",
  ...text,
};

const link = {
  color: "#48E5C2",
  textDecoration: "none",
};

export default UserEmail;
