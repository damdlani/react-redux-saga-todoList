import React from "react";
import { StyledTitle } from "./styled";

const Header = ({ title }) => (
  <header>
    <StyledTitle>{title}</StyledTitle>
  </header>
);

export default Header;
