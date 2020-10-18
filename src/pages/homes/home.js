import React from "react";
import JumbotronContainer from "../../containers/jumbotron/jumbotron";
import AccordionContainer from "../../containers/accordion/accordion";
import FooterContainer from "../../containers/footer/footer";

export default function Home() {
  return (
    <>
      <JumbotronContainer></JumbotronContainer>
      <AccordionContainer></AccordionContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
