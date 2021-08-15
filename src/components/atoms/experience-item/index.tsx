import React from "react";
import { mapModifiers, ModifiersProp } from "helper/helper";

type ExperienceItemProps = {
  modifiers?: ModifiersProp<"right">;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ modifiers }) => {
  return (
    <div className={mapModifiers("a-experience-item", modifiers)}>
      <h3>BJIT Limited</h3>
      <h4>Senior Software Engineer Lead sdf sdasd</h4>
      <h4>2018 ~ Present</h4>
    </div>
  );
};

export default ExperienceItem;
