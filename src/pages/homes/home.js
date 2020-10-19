import React from "react";
import {JumbotronContainer} from "../../containers/jumbotron/jumbotron";
import { HeaderContainer } from "../../containers/header/header";
import {AccordionContainer} from "../../containers/accordion/accordion";
import {FooterContainer} from "../../containers/footer/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
