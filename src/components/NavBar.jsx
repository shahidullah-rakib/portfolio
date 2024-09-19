import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; // Import your toggle component
import ProfileDrawer from './Drawer/ProfileDrawer';
// import flowbiteLogo from './path-to-your-logo.svg'; // Replace with the correct path to your Flowbite logo

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          {/* <img src={flowbiteLogo} className="h-8" alt="Flowbite Logo" /> */}
          <button
            className="md:block lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={toggleProfileDrawer} // Toggle the drawer
          >
            Show Profile
          </button>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Portfolio
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-3">
          <DarkModeToggle /> {/* Dark Mode Toggle Button */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } items-center justify-between w-full md:flex md:w-auto md:order-1 z-50`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/about'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/services'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/skills'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/education'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/experiences'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
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
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                  location.pathname === '/contact'
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white'
                }`}
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
