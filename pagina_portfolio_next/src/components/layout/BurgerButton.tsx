import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "react-bootstrap";

type Props = {
  name: string;
  card: string;
};

const BurgerButton = ({ name, card }: Props) => {
  return (
      <motion.div style={{width: 'fit-content'}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
        <Link href={`/${card}`}>
          <Button className="nav-button">{name}</Button>
        </Link>
      </motion.div>
  );
};

export default BurgerButton;
