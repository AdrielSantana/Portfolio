import ContactCard from "../../../src/components/cards/ContactCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <PrincipalCard title="Contato" card="contact">
      <ContactCard />
    </PrincipalCard>
  );
};

export default Contact;
