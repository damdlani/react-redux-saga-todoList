import React from "react";
import { NavigationBar, NavigationItem, StyledNavLink } from "./styled";

export const Nav = () => {
  return (
    <NavigationBar>
      <NavigationItem>
        <StyledNavLink to="/zadania"> Zadania </StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to="/autor"> O autorze </StyledNavLink>
      </NavigationItem>
    </NavigationBar>
  );
};
