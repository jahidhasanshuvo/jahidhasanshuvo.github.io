import SocialLinks from "components/molecules/social-links";
import React from "react";

const Contact = () => {
  return (
    <section className="o-contact">
      <div className="o-contact__title">CONTACT</div>
      <div className="o-contact__content">
        <h2 className="o-contact__email">Email: mdsuv.3@gmail.com</h2>
        <h2 className="o-contact__skype">Skype: live:mdsuv.3</h2>
        <p className="o-contact__email-to">
          Please send <a href="mailto:mdsuv.3@gmail.com">email</a> for any
          quiries
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;
