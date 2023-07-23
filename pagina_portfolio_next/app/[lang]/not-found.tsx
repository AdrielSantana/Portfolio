"use client";

import { useParams } from "next/navigation";
import { Locale } from "../../i18n-config";
import BurgerButton from "../../src/components/layout/BurgerButton";

export default function NotFound() {
  const {lang} = useParams() as { lang: Locale };

  return (
    <div className="d-flex gap-5 justify-content-center align-items-center row">
      <h1 className="text-center">
        <i>{lang === 'pt-BR' ? 'Página Não Encontrada' : 'Page Not Found'}</i>!
      </h1>
      <BurgerButton card="/" name={lang === 'pt-BR' ? "Voltar" : "Go Back"} />
    </div>
  );
}
