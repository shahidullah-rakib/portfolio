import React from 'react';
import { motion } from 'framer-motion'; // For animations

const experiencesData = [
  {
    company: 'Young Genius Bangladesh Limited',
    position: 'Junior Software Engineer',
    duration: 'April 2023 – Present',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Developing and maintaining scalable front-end applications using React, Next.js, and Ionic React for mobile applications, ensuring optimized performance and user experience.',
      'Collaborating with backend teams using Django to integrate APIs and create seamless end-to-end solutions.',
      'Working in Agile teams, actively contributing to sprint planning, code reviews, and deployments to ensure high-quality code.',
      'Enhanced project efficiency by refactoring components, improving page load times by 15%.',
    ],
  },
  {
    company: 'Nagorik IT Solution',
    position: 'Junior Web Developer',
    duration: 'May 2022 – March 2023',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Focused on front-end development using React, implementing dynamic UI components for client applications.',
      'Collaborated with design teams to translate wireframes into responsive web pages.',
      'Implemented state management and optimized API calls, reducing load times and improving user experience.',
      'Worked closely with senior developers, enhancing technical skills in React and modern web development practices.',
    ],
  },
];

const Experiences = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:bg-gradient-to-tr dark:from-slate-900 dark:via-slate-700 dark:to-black p-6">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experiences
      </motion.h1>
      <div className="space-y-6">
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {experience.company}
            </h2>
            <p className="text-xl text-gray-800 dark:text-gray-200">
              {experience.position}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.duration}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.location}
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 dark:text-gray-300">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
