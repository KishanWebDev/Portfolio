import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 to-gray-900 text-white p-6 flex justify-between items-center sm:overflow-x-hidden sticky top-0 z-50">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-300">Kishan Rai</h1>
        <button className="sm:hidden text-2xl text-blue-300 focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`text-lg sm:text-xl font-medium fixed top-0 right-0 h-full w-64 bg-gray-800 bg-opacity-95 z-50 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-row sm:translate-x-0 sm:bg-transparent sm:w-auto`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto pt-16 sm:pt-0">
            {['Profile', 'Skills', 'Projects', 'Contacts', 'Hire me'].map((item) => (
              <a
                key={item} // Added key prop here
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-6 py-3 my-1 sm:my-0 hover:bg-blue-700 hover:text-white transition-colors duration-200 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <hr className="border-blue-500 opacity-25" />
    </>
  );
};

export default Header;
