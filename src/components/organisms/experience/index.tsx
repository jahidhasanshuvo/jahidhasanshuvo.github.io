import React from "react";
import ExperienceTitle from "assets/image/organisms/experience.svg";
import ExperienceItem from "components/atoms/experience-item";

const Experience = () => {
  return (
    <div className="o-experience">
      <img
        className="o-experience__header-image"
        src={ExperienceTitle}
        alt="EXPERIENCE"
      />
      <div className="o-experience__content">
        <ExperienceItem />
        <ExperienceItem modifiers="right" />
      </div>
    </div>
  );
};

export default Experience;
