import { getTranslation } from "../../../get-translation";
import { Locale } from "../../../i18n-config";
import ContactCard from "../../../src/components/cards/ContactCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Contact",
};

const Contact = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return (
    <PrincipalCard title={translation.titles.contact} card="contact">
      <ContactCard translation={translation.cards.contact}/>
    </PrincipalCard>
  );
};

export default Contact;
