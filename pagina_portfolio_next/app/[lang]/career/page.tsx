import { getTranslation } from "../../../get-translation";
import { Locale } from "../../../i18n-config";
import CareerCard from "../../../src/components/cards/CareerCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Career",
};

const Career = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const translation = await getTranslation(lang);

  return (
    <PrincipalCard title={translation.titles.career} card="career">
      <CareerCard translation={translation.cards.career} />
    </PrincipalCard>
  );
};

export default Career;
