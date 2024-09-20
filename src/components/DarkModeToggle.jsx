import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the saved preference from localStorage or default to false
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    // Apply the dark mode class to the document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="top-4 right-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
