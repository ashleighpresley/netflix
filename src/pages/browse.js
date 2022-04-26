import React from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { useContent } from "../hooks";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <FooterContainer />
    </>
  );
}
