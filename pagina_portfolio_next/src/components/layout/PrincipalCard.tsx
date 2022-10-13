import { Container } from "react-bootstrap";

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