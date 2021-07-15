import React, { useEffect } from "react";
import BluredCircle from "components/atoms/blured-circle";
import ColoredCircle from "components/atoms/colored-circle";
import { MoveAnimation } from "helper/helper";

const BlackHeroSection = () => {
  useEffect(() => {
    const surface = document.getElementById(
      "m-black-hero-section"
    ) as HTMLElement;
    const targets = [
      {
        item: document.getElementById(
          "m-black-hero-section__profession"
        ) as HTMLElement,
        speed: 1,
      },
      {
        item: document.getElementsByClassName(
          "m-black-hero-section__blured-two"
        )[0] as HTMLElement,
        speed: 0.5,
      },
      {
        item: document.getElementsByClassName(
          "m-black-hero-section__blured-three"
        )[0] as HTMLElement,
        speed: 1.3,
      },
      {
        item: document.getElementsByClassName(
          "m-black-hero-section__blured-seven"
        )[0] as HTMLElement,
        speed: -3,
      },
      {
        item: document.getElementsByClassName(
          "m-black-hero-section__colored-four"
        )[0] as HTMLElement,
        speed: -6,
      },
    ];

    const animate = MoveAnimation(surface, 45, targets);
    animate.execute();
  });
  return (
    <div className="m-black-hero-section" id="m-black-hero-section">
      <div className="m-black-hero-section__intro">
        <span className="m-black-hero-section__greetings">HI! I AM</span>
        <span className="m-black-hero-section__name">JAHID HASAN</span>
        <span className="m-black-hero-section__name">Shuvo</span>
      </div>
      <div
        className="m-black-hero-section__profession"
        id="m-black-hero-section__profession"
      >
        <span className="m-black-hero-section__profession-name">
          Fullstack Software Engineer
        </span>
        <span className="m-black-hero-section__profession-name">
          React Developer
        </span>
      </div>
      {/* -----------------  Other Elements ----------------- */}
      <BluredCircle
        modifiers="small"
        className="m-black-hero-section__blured-one"
      />
      <BluredCircle
        modifiers="medium"
        className="m-black-hero-section__blured-two"
      />
      <BluredCircle className="m-black-hero-section__blured-three" />
      <BluredCircle className="m-black-hero-section__blured-four" />
      <BluredCircle
        modifiers="large"
        className="m-black-hero-section__blured-five"
      />
      <BluredCircle
        modifiers="small"
        className="m-black-hero-section__blured-six"
      />
      <BluredCircle
        modifiers="large"
        className="m-black-hero-section__blured-seven"
      />
      <BluredCircle
        modifiers="rectangle"
        className="m-black-hero-section__rectangle"
      />
      <ColoredCircle className="m-black-hero-section__colored-one" />
      <ColoredCircle
        modifiers={["small", "blue"]}
        className="m-black-hero-section__colored-two"
      />
      <ColoredCircle
        modifiers={["violet", "small"]}
        className="m-black-hero-section__colored-three"
      />
      <ColoredCircle
        modifiers={["violet", "medium"]}
        className="m-black-hero-section__colored-four"
      />
      <ColoredCircle
        modifiers="extra-small"
        className="m-black-hero-section__colored-five"
      />
      <ColoredCircle
        modifiers="medium"
        className="m-black-hero-section__colored-six"
      />
      <ColoredCircle
        modifiers="blue"
        className="m-black-hero-section__colored-seven"
      />
    </div>
  );
};

export default BlackHeroSection;
