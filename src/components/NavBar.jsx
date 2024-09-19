import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; // Import your toggle component
import ProfileDrawer from './Drawer/ProfileDrawer';
// import flowbiteLogo from './path-to-your-logo.svg'; // Replace with the correct path to your Flowbite logo

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          {/* <img src={flowbiteLogo} className="h-8" alt="Flowbite Logo" /> */}
          <button
            className="md:block lg:hidden"
            type="button"
            onClick={toggleProfileDrawer} // Toggle the drawer
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="currentColor" // Make use of the text color for dark/light mode
              className="bi bi-three-dots-vertical transition-transform duration-300 ease-in-out hover:rotate-90 dark:text-white text-black"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button>

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Portfolio
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-3">
          <DarkModeToggle />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle main menu</span>
            {/* Open Menu Icon */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            {/* Close Menu Icon */}
            <svg
              className={`w-6 h-6 absolute transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1 z-50`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/about'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/services'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/skills'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/education'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/experiences'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/work'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/blog'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/contact'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isProfileDrawerOpen && (
        <ProfileDrawer toggleDrawer={toggleProfileDrawer} />
      )}
    </nav>
  );
};

export default Navbar;
