import React from 'react';
import { motion } from 'framer-motion'; // For animations

const skills = [
  'React.js',
  'Next.js',
  'Ionic',
  'JavaScript',
  'HTML5 & CSS3',
  'Tailwind CSS',
];

const Skills = () => {
  return (
    <div className="text-center mt-10">
      {/* Section Header */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h1>

      {/* Skills List */}
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {skill}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {/* Optionally add a description or detail about each skill */}
              {skill} is one of my core skills, which I use to build robust and
              scalable applications.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        className="mt-12 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: skills.length * 0.1 }}
      >
        Hire Me
      </motion.a>
    </div>
  );
};

export default Skills;
