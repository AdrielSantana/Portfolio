import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    children?: React.ReactNode;
};

const PrincipalCard = ({ children }: Props) => {

    return (
        <>
            <div className="principal-card">
                <Container className="principal-container">
                    {children}
                </Container>
            </div>
        </>
    )
}

export default PrincipalCard