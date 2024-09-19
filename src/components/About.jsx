import React from 'react';
import { motion } from 'framer-motion'; // For animations

const About = () => {
  return (
    <div className="text-center mt-10">
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Who Am I?
      </motion.h1>
      <motion.p
        className="text-lg mb-8 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi, I'm MD Shahidullah Rakib. I'm a software engineer specializing in
        frontend development, passionate about creating beautiful and efficient
        applications. I thrive on turning complex problems into simple, elegant
        solutions.
      </motion.p>

      {/* Skills Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          className="w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Graphic Design
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Crafting visually appealing designs that capture the essence of
            brands and ideas.
          </p>
        </motion.div>

        <motion.div
          className="w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Web Design
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Designing user-friendly and responsive websites that offer seamless
            experiences across devices.
          </p>
        </motion.div>

        <motion.div
          className="w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Software Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Building robust and scalable software solutions with a focus on
            performance and maintainability.
          </p>
        </motion.div>

        <motion.div
          className="w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Application Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Creating efficient and user-centric mobile and web applications
            tailored to meet diverse needs.
          </p>
        </motion.div>
      </div>

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Hire Me
      </motion.a>
    </div>
  );
};

export default About;
