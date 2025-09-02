import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id='contacts' className="bg-gradient-to-b from-gray-900 to-gray-900 dark:from-slate-900 dark:to-slate-950 text-gray-100 dark:text-gray-100 p-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Contact</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:raik55488@gmail.com" className="hover:text-gray-300">raik55488@gmail.com</a>
          </p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:9696661363" className="hover:text-gray-300">9696661363</a>
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Location</p>
          <p className="py-1 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            DLF Phase 3, Sector 24
          </p>
          <p className="py-1"> Gurugram, Haryana , 122002 ,India</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/kishan-web-dev" className="text-gray-100 hover:text-gray-300" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/KishanWebDev" className="text-gray-100 hover:text-gray-300" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <div className="text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Made with <span className="heart-beat">❤️</span> by Kishan
        </p>
      </div>
    </footer>
  );
};

export default Footer;