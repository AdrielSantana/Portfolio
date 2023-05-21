'use client'

import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useCard } from "../../hooks/useCard";

type Props = {
  children?: React.ReactNode;
  title: string;
  card: string;
};

const PrincipalCard = ({ children, title, card }: Props) => {
  const { setTitle, setCard } = useCard();

  useEffect(() => {
    setTitle(title);
    setCard(card);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="principal-card">
        <Container className="principal-container">{children}</Container>
      </div>
    </>
  );
};

export default PrincipalCard;
