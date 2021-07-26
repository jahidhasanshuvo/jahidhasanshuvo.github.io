import React from "react";
import { Link } from "react-router-dom";
import { mapModifiers, ModifiersProp } from "helper/helper";

type NavItemProps = {
  href: string;
  modifier?: ModifiersProp<"active">;
};

const NavItem: React.FC<NavItemProps> = ({ href, modifier, children }) => {
  return (
    <Link to={href} className={mapModifiers("a-nav-item", modifier)}>
      {children}
    </Link>
  );
};

export default NavItem;
