import React, { Fragment } from "react";
import RocketImage from "assets/image/organisms/rocket-1.svg";
import MarsImage from "assets/image/organisms/mars.svg";

const About = () => {
  const skills = [
    {
      title: "Programming Language",
      items: [
        "javascript",
        "php",
        "c++",
        "c#",
        "javascript",
        "php",
        "c++",
        "c#",
        "javascript",
        "php",
        "c++",
        "c#",
      ],
    },
    {
      title: "Programming Language",
      items: ["javascript", "php", "c++", "c#"],
    },
    {
      title: "Programming Language",
      items: ["javascript", "php", "c++", "c#"],
    },
    {
      title: "Programming Language",
      items: ["javascript", "php", "c++", "c#"],
    },
    {
      title: "Programming Language",
      items: ["javascript", "php", "c++", "c#"],
    },
    {
      title: "Programming Language",
      items: ["javascript", "php", "c++", "c#"],
    },
    {
      title: "Javascript Library/ Framework",
      items: ["react", "nextjs", "redux", "redux-thunk"],
    },
  ];
  return (
    <section className="o-about" id="about">
      <img src={RocketImage} alt="" className="o-about__rocket-image" />
      <img src={MarsImage} alt="" className="o-about__mars-image" />
      <div className="o-about__content">
        <div className="o-about__about-me">
          <div className="o-about__about-me-header">About Me</div>
          <div className="o-about__about-me-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
            sagittis enim non sollicitudin. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec
            fringilla lacus erat, nec blandit mi cursus quis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Etiam a aliquam nibh. Donec elementum lorem nec ex
            convallis, ac molestie augue volutpat. Mauris interdum nibh sit amet
            sollicitudin tristique.
          </div>
        </div>
        <div className="o-about__technical-skills">
          <div className="o-about__technical-skills-header">
            Technical Skills
          </div>
          <div className="o-about__technical-skills-content">
            {skills.map(({ title, items }, index) => (
              <Fragment key={index}>
                <div className="o-about__technical-skills-title">{title}</div>
                <div className="o-about__technical-skills-items">
                  {items.join(" ,  ")}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
