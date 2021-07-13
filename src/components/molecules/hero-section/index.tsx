import React, { useEffect, useState } from "react";
import TypeWriter from "typewriter-effect";
import ContactMe from "components/atoms/contact-me-button";
import { ThreeDAnimation } from "helper/helper";

const HeroSection = () => {
  useEffect(() => {
    const target = document.getElementById("m-header__content") as HTMLElement;
    const animate = ThreeDAnimation(target, 15);
    animate.execute();
    return () => {
      animate.cleanUp();
    };
  }, []);
  return (
    <section className="m-header" id="m-header">
      <div className="m-header__circle1"></div>
      <div className="m-header__glass-bg-1"></div>
      <div className="m-header__glass-bg-2"></div>
      <div className="m-header__glass-bg-3"></div>
      <div className="m-header__glass-bg-4"></div>
      <div className="m-header__content" id="m-header__content">
        <div className="m-header__hello">HI! I am</div>
        <h3 className="m-header__name">
          <span className="m-header__first-name">Jahid Hasan</span>
          <span className="m-header__last-name">Shuvo</span>
        </h3>
        <div className="m-header__profession">
          <span>I am a</span>
          <span
            className="m-header__profession-name"
            id="m-header__profession-name"
          >
            <TypeWriter
              options={{
                strings: ["Fullstack Software Engineer", "React Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <ContactMe>Contact Me</ContactMe>
      </div>
    </section>
  );
};

export default HeroSection;
