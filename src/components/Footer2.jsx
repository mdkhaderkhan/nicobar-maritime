
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer  className="relative z-10 bg-[#35708a] text-white pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[80px]">
      <div  className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-10 justify-between">
          {/* Logo & Description */}
          <div className="w-full sm:w-1/2 lg:w-3/12">
            <div className="mb-5">
              <a href="/" className="mb-3 inline-block max-w-[250px]">
                <div className="flex items-center gap-1">
                  <img
                    src="./nicobar.png"
                    alt="logo"
                    className="w-10 h-10 object-contain dark:hidden"
                  />
                  <h3 className="text-lg font-semibold text-dark dark:text-white">
                    Nicobar Maritime
                  </h3>
                </div>
              </a>
              <p className="mb-5 mt-4 text-base text-body-color dark:text-dark-6">
                 Nicobar Maritime Private Limited is a Hyderabad-based global freight forwarding company founded to simplify and optimize cargo movement across borders.
            
              </p>
              <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                <span className="mr-3 text-primary">📞</span>+91 9652442433
              </p>
            </div>
          </div>

          {/* Link Sections */}
          {/* <LinkGroup header="Resources">
            <NavLink link="#" label="SaaS Development" />
            <NavLink link="#" label="Our Products" />
            <NavLink link="#" label="User Flow" />
            <NavLink link="#" label="User Strategy" />
          </LinkGroup> */}

          {/* <LinkGroup header="Company">
            <NavLink link="#" label="About TailGrids" />
            <NavLink link="#" label="Contact & Support" />
            <NavLink link="#" label="Success History" />
            <NavLink link="#" label="Privacy Settings" />
          </LinkGroup> */}

          <LinkGroup header="Quick Links">
            <NavLink link="#" label="Home" />
            <NavLink link="#Aboutus" label="About us" />
            <NavLink link="#services" label="Services" />
            <NavLink link="#contactus" label="Contact us" />
          </LinkGroup>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 lg:w-3/12">
            <div className="mb-10">
              <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                Follow Us On
              </h4>
              <div className="flex flex-wrap gap-3 mb-5">
                <SocialIcon Icon={FaFacebookF} link="https://facebook.com" />
                <SocialIcon Icon={FaInstagram} link="https://instagram.com" />
                <SocialIcon Icon={FaWhatsapp} link="https://whatsapp.com" />
                <SocialIcon Icon={FaTwitter} link="https://twitter.com" />
              </div>
              <p className="text-base text-body-color dark:text-dark-6">
                &copy; 2025 Nicobar Maritime
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

// Reusable Link Group Component
const LinkGroup = ({ children, header }) => {
  return (
    <div  className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
      <div className="mb-10">
        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul className="space-y-2">{children}</ul>
      </div>
    </div>
  );
};

// Reusable NavLink Component
const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="text-base text-body-color hover:text-primary dark:text-dark-6 block"
      >
        {label}
      </a>
    </li>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
};
