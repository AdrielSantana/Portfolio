"use client";

import { useEffect } from "react";
import ContactCard from "../../src/components/cards/ContactCard";
import PrincipalCard from "../../src/components/layout/PrincipalCard";
import { useCard } from "../../src/hooks/useCard";

const Contact = () => {
  const { setTitle, setCard } = useCard();

  useEffect(() => {
    setTitle("Contato");
    setCard("contact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrincipalCard>
      <ContactCard />
    </PrincipalCard>
  );
};

export default Contact;
