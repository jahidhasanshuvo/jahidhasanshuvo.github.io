import React from "react";
import Linkedin from "assets/image/molecules/linkedin.png";
import Github from "assets/image/molecules/github.png";
import Stackoverflow from "assets/image/molecules/stackoverflow.png";

const Links = [
  {
    link: "#",
    icon: Linkedin,
  },
  {
    link: "#",
    icon: Github,
  },
  {
    link: "#",
    icon: Stackoverflow,
  },
];
const SocialLinks = () => {
  return (
    <div className="m-social-links">
      {Links.map(({ link, icon }) => (
        <a href={link} target="_blank" className="m-social-links__link">
          <img src={icon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
