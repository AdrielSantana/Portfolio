import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useCard } from "../../hooks/useCard";

type Props = {
  name: string;
  card: string;
};

const BurgerButton = ({ name, card }: Props) => {
  const { handleCardChange } = useCard();

  return (
    <>
      <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
        <Button className="nav-button" onClick={(e) => handleCardChange(card)}>
          <a>{name}</a>
        </Button>
      </motion.div>
    </>
  );
};

export default BurgerButton;
