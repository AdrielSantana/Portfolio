import Link from "next/link";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Ops, não encontrado</h2>
      <Link replace className="link-light text-decoration-none" href="/">
        <h3>Voltar para a página inicial</h3>
      </Link>
    </div>
  );
};

export default NotFound;
