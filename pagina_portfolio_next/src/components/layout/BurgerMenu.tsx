'use client'

import { useState } from "react";

import { Cross as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Col, Row } from "react-bootstrap";

import BurgerButton from "./BurgerButton";
import { useCard } from "../../hooks/useCard";

const BurguerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { handleCardChange } = useCard();

  return (
    <>
      <Menu
        customBurgerIcon={
          <Hamburger
            color="#212121"
            distance="md"
            direction="right"
            rounded
            onToggle={setNavbarOpen}
          />
        }
        customCrossIcon={false}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        noOverlay
        isOpen={navbarOpen}
      >
        <Row className="justify-items-start my-5 align-self-center">
          <Col>
            <a
              onClick={(e) => handleCardChange("hero")}
              className="pointer nav-title"
            >
              Adriel&apos;s Portfolio
            </a>
          </Col>
        </Row>

        <Row className="align-self-center menu-buttons">
          <Col>
            <BurgerButton name={"Sobre"} card={"about"} />
          </Col>
          <Col>
            <BurgerButton name={"Carreira"} card={"career"} />
          </Col>
          <Col>
            <BurgerButton name={"Projetos"} card={"projects"} />
          </Col>
          <Col>
            <BurgerButton name={"Habilidades"} card={"skills"} />
          </Col>
          <Col>
            <BurgerButton name={"Contato"} card={"contact"} />
          </Col>
        </Row>
      </Menu>
    </>
  );
};

export default BurguerMenu;
