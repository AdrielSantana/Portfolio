"use client";

import { useState } from "react";

import { Cross as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Col, Row } from "react-bootstrap";

import BurgerButton from "./BurgerButton";
import { useCard } from "../../hooks/useCard";
import LanguageChanger from "./LanguageChanger";

type Props = {
  translation: {
    about: string;
    career: string;
    projects: string;
    skills: string;
    contact: string;
  };
};

const BurguerMenu = ({ translation }: Props) => {
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

        <Row className="align-self-center">
          <Col>
            <BurgerButton name={translation.about} card={"about"} />
          </Col>
          <Col>
            <BurgerButton name={translation.career} card={"career"} />
          </Col>
          <Col>
            <BurgerButton name={translation.projects} card={"projects"} />
          </Col>
          <Col>
            <BurgerButton name={translation.skills} card={"skills"} />
          </Col>
          <Col>
            <BurgerButton name={translation.contact} card={"contact"} />
          </Col>
        </Row>
        <LanguageChanger />
      </Menu>
    </>
  );
};

export default BurguerMenu;
