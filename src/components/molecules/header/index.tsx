import NavItem from "components/atoms/nav-item";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="m-header">
      <NavItem href="#home" modifier="active">
        Home
      </NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Contact</NavItem>
      <NavItem href="#">Tech</NavItem>
    </header>
  );
};

export default Header;
