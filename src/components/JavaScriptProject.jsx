import React from 'react';
import {
  FaCalculator,
  FaMicrophone,
  FaUtensils,
  FaTextWidth,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JavaScriptProject = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      title: 'Text-to-Speech Project',
      icon: <FaMicrophone className="text-purple-500" />,
      description: 'Convert text to speech using JavaScript APIs.',
      route: '/projects/java-script-project/text-to-speech',
    },
    {
      title: 'Speech-to-Text Project',
      icon: <FaTextWidth className="text-orange-500" />,
      description:
        'Converting Pre-recorded Audio (Songs, etc.) to Text using Cloud Services.',
      route: '/projects/java-script-project/file-to-text',
    },
    {
      title: 'Calculator Project',
      icon: <FaCalculator className="text-blue-500" />,
      description: 'A simple calculator built with JavaScript.',
      route: '/calculator',
    },
    {
      title: 'House Meal Project',
      icon: <FaUtensils className="text-green-500" />,
      description: 'A web app to plan your meals.',
      route: '/house-meal',
    },
    // Add more projects as needed
  ];

  return (
    <div className="text-center mt-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          JavaScript Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate(project.route)}
            >
              <div className="flex justify-center items-center text-6xl mb-4">
                {project.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptProject;
