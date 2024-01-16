import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white bottom-0 w-100 ">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Github --> */}
            <SocialIcon
              className="social-icon"
              url="https://github.com/AJS-Bootcamp/Movie-Reviews"
            />
            {/* <!-- Twitter --> */}
            <SocialIcon url="https://twitter.com" />
            {/* <!-- Linkedin --> */}
            <SocialIcon url="https://www.linkedin.com" />
            {/* <!-- Facebook --> */}
            <SocialIcon url="https://www.facebook.com" />
            {/* <!-- Discord --> */}
            <SocialIcon url="https://discord.com" />
            {/* <!-- Instagram --> */}
            <SocialIcon url="https://instagram.com" />
            {/* <!-- Google --> */}
            <SocialIcon url="https://google.com" />
            {/* <!-- Reddit --> */}
            <SocialIcon url="https://reddit.com" />
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023 Copyright:
          <p className="text-white">
            Austin, Jocelyn & Sylvia
          </p>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
