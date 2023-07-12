"use client";

import BurgerButton from "../../src/components/layout/BurgerButton";
import PrincipalCard from "../../src/components/layout/PrincipalCard";

export default function NotFound() {
  return (
    <div className="d-flex gap-5 justify-content-center align-items-center row">
      <h1 className="text-center">
        <i>404</i>!
      </h1>
      <BurgerButton card="/" name="Home Page" />
    </div>
  );
}
