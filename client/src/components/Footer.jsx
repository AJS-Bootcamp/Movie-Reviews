import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white bottom-0 w-100 ">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="">
            {/* <!-- Github --> */}
            <SocialIcon
              className="social-icon"
              url="https://github.com/AJS-Bootcamp/Movie-Reviews"
              style={{height: "40px", width: "40px"}}
            />
            {/* <!-- Twitter --> */}
            <SocialIcon url="https://twitter.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Linkedin --> */}
            <SocialIcon url="https://www.linkedin.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Facebook --> */}
            <SocialIcon url="https://www.facebook.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Discord --> */}
            <SocialIcon url="https://discord.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Instagram --> */}
            <SocialIcon url="https://instagram.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Google --> */}
            <SocialIcon url="https://google.com" style={{height: "40px", width: "40px"}} />
            {/* <!-- Reddit --> */}
            <SocialIcon url="https://reddit.com" style={{height: "40px", width: "40px"}} />
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize: '12px' }}
        >
          © 2023 Copyright: Austin, Jocelyn & Sylvia
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
