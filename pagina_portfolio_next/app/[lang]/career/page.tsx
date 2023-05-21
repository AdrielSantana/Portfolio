import CareerCard from "../../../src/components/cards/CareerCard";
import PrincipalCard from "../../../src/components/layout/PrincipalCard";

export const metadata = {
  title: "Career",
};

const Career = () => {
  return (
    <PrincipalCard title="Carreira" card="career">
      <CareerCard />
    </PrincipalCard>
  );
};

export default Career;
