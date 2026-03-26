import React, { useState, useEffect } from 'react';
import Footer from './Footer';
  import profileImage from '../assets/images/cv.png';

const ProfileSection = () => {
  const jobTitles = ['Software Engineer', 'Frontend Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTitleComplete, setIsTitleComplete] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];

    if (!isTitleComplete) {
      if (letterIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedTitle(currentTitle.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setIsTitleComplete(true);
      }
    } else {
      const timeout = setTimeout(() => {
        setLetterIndex(0);
        setIsTitleComplete(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setDisplayedTitle('');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, isTitleComplete, currentTitleIndex, jobTitles]);


  return (
    <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center">
      <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-blue-500 dark:border-yellow-400 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6"
        />
      <div className="flex-1 flex flex-col items-center pt-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 pb-2 border-b-2 border-blue-500/20 w-fit animate-slideInUp">
          MD SHAHIDULLAH RAKIB
        </h2>

        <div className="mt-4 h-10 w-full flex justify-center">
          <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">
            {displayedTitle.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className="inline-block w-0.5 h-5 bg-blue-600 dark:bg-blue-400 animate-pulse ml-0.5" />
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-8 text-base leading-relaxed max-w-sm">
          Aspiring software engineer specializing in frontend development and mobile app solutions.
        </p>
      </div>

      <div className="w-full pb-4">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileSection;
