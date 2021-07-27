import NavItem from "components/atoms/nav-item";
import Header from "components/molecules/header";
import React from "react";

const HeroSection = () => {
  return (
    <div className="o-hero-section">
      <Header />
      <div className="o-hero-section__moon" />
      <div className="o-hero-section__content">
        <div className="o-hero-section__greetings">Hi! I am</div>
        <div className="o-hero-section__name">jahid hasan shuvo</div>
        <div className="o-hero-section__profession">
          Fullstack & React Developer
        </div>
        <p className="o-hero-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
          sagittis enim non sollicitudin. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Donec
          fringilla lacus erat, nec blandit mi cursus quis. Class aptent taci
        </p>
        <div className="o-hero-section__read-more">
          <NavItem href="#about" modifier="read-more">
            READ MORE
          </NavItem>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
