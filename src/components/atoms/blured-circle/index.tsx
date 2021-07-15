import { mapModifiers, ModifiersProp, modifiersType } from "helper/helper";
import React from "react";

type BluredCircleProps = {
  className?: string;
  modifiers?: ModifiersProp<
    "rectangle" | "medium" | "large" | "small" | "doughnut"
  >;
};

const BluredCircle: React.FC<BluredCircleProps> = ({
  className,
  modifiers,
}) => {
  return (
    <div className={mapModifiers("a-blured-circle", modifiers, className)} />
  );
};

export default BluredCircle;
