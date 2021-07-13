import React from "react";

type ContactMeProps = {
  children: string;
};

const ContactMe: React.FC<ContactMeProps> = ({ children }) => {
  return (
    <a className="a-hero-technical-skill" href="#">
      {children}
    </a>
  );
};

export default ContactMe;
