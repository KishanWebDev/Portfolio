import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSunny, IoMoon } from 'react-icons/io5';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark'); // Corrected line
    }
  }, [theme]);

  const handleLinkClick = (item) => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white p-6 flex justify-between items-center sm:overflow-x-hidden sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-sans tracking-wide">Kishan Rai</h1>
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl text-blue-300 focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? (
              <IoSunny />
            ) : (
              <IoMoon />
            )}
          </button>
          <button className="sm:hidden text-2xl text-blue-300 focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`text-lg sm:text-xl font-medium fixed top-0 right-0 h-full w-64 bg-gray-800 bg-opacity-95 z-50 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-row sm:translate-x-0 sm:bg-transparent sm:w-auto`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto pt-16 sm:pt-0">
            {['Profile', 'Experience', 'Skills', 'Projects', 'Contacts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-6 py-3 my-1 sm:my-0 sm:mx-2 rounded-full transition-all duration-300 ease-in-out text-blue-200 hover:bg-gray-700 hover:text-white"
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </a>
            ))}
            <a
              href="#hire-me"
              className="px-6 py-3 my-1 sm:my-0 sm:mx-2 rounded-full text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              onClick={() => handleLinkClick('Hire me')}
            >
              Hire me
            </a>
          </div>
        </nav>
      </header>
      <hr className="border-blue-500 opacity-25" />
    </>
  );
};

export default Header;