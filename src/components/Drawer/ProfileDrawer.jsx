import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProfileSection from '../ProfileSection';

const ProfileDrawer = ({ toggleDrawer }) => {
  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.drawer-content') === null) {
        toggleDrawer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleDrawer]);

  return ReactDOM.createPortal(
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>

      {/* Drawer Content */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
          // Add classes to control visibility
          toggleDrawer ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative drawer-content h-full">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Close
          </button>
          {/* Add profile content here */}
          <ProfileSection />
        </div>
      </div>
    </>,
    document.body // Render the drawer into the body to overlay everything
  );
};

export default ProfileDrawer;
