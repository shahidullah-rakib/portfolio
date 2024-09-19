import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/cv.png';
import './ProfileSection.css';
import Footer from './Footer';

const ProfileSection = () => {
  const jobTitles = ['Software Engineer', 'Frontend Developer']; // Titles to loop through
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0); // Track the current title
  const [displayedTitle, setDisplayedTitle] = useState(''); // Track the currently displayed letters
  const [letterIndex, setLetterIndex] = useState(0); // Track the current letter index
  const [isTitleComplete, setIsTitleComplete] = useState(false); // Track if the title is fully displayed

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex]; // Get the current title

    if (!isTitleComplete) {
      if (letterIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedTitle(currentTitle.slice(0, letterIndex + 1)); // Display letters one by one
          setLetterIndex(letterIndex + 1);
        }, 100); // 100ms delay between each letter
        return () => clearTimeout(timeout);
      } else {
        setIsTitleComplete(true); // Mark the title as fully displayed
      }
    } else {
      const timeout = setTimeout(() => {
        setLetterIndex(0); // Reset letter index for the next title
        setIsTitleComplete(false); // Reset completion state
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length); // Move to the next title
        setDisplayedTitle(''); // Clear the displayed title before switching
      }, 5000); // 2-second pause after the full title is displayed
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, isTitleComplete, currentTitleIndex, jobTitles]);

  return (
    <div className="fixed w-full sm:w-1/4 md:w-full lg:w-1/4 z-40 h-full p-4 text-center bg-gradient-to-br from-cyan-100 via-gray-100 to-red-100 dark:bg-gradient-to-tr dark:from-slate-800 dark:via-slate-600 dark:to-black">
      {/* Profile Image Section */}
      <div className="w-full flex justify-center my-5 animate-fadeIn">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-blue-500 dark:border-yellow-400 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6"
        />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white animate-slideInUp">
        MD SHAHIDULLAH RAKIB
      </h2>

      {/* Animated Job Title */}
      <div className="mt-2 h-10">
        <h3 className="text-2xl text-gray-700 dark:text-gray-200">
          {displayedTitle.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-letter"
              style={{ animationDelay: `${index * 0.1}s` }} // Delay for each letter
            >
              {char === ' ' ? '\u00A0' : char} {/* Handling spaces */}
            </span>
          ))}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mt-4 text-base leading-relaxed relative group transition-all duration-300 ease-in-out">
        Aspiring software engineer specializing in frontend development and
        mobile app solutions.
        <span className="block h-0.5 bg-blue-500 dark:bg-yellow-400 mt-1 w-0 group-hover:w-full transition-all duration-500"></span>
      </p>
      <Footer />
    </div>
  );
};

export default ProfileSection;
