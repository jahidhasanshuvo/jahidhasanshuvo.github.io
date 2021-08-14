import React from "react";
import { Link } from "react-router-dom";
import { mapModifiers, ModifiersProp } from "helper/helper";

type NavItemProps = {
  href: string;
  modifier?: ModifiersProp<"active" | "read-more">;
};

const NavItem: React.FC<NavItemProps> = ({ href, modifier, children }) => {
  const link = href.startsWith("#") ? false : true;
  const classname = mapModifiers("a-nav-item", modifier);
  return link ? (
    <Link to={href} className={classname}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classname}>
      {children}
    </a>
  );
};

export default NavItem;
