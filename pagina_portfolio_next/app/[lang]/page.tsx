import HeroTitle from "../../src/components/layout/HeroTitle";
import { Locale } from "../../i18n-config";
import { getTranslation } from "../../get-translation";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return <HeroTitle translation={translation.cards.hero} title={"/"} card={"hero"} />;
};

export default Home;
