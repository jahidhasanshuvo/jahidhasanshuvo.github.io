import { mapModifiers, ModifiersProp } from "helper/helper";
import React from "react";

type ColoredProps = {
  className?: string;
  modifiers?: ModifiersProp<
    "violet" | "blue" | "medium" | "small" | "extra-small"
  >;
};

const Colored: React.FC<ColoredProps> = ({ className, modifiers }) => {
  return (
    <div className={mapModifiers("a-colored-circle", modifiers, className)} />
  );
};

export default Colored;
