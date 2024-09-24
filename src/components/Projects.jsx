import React from 'react';
import { FaJsSquare, FaPython, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // To navigate to different pages

const Projects = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      title: 'JavaScript',
      icon: <FaJsSquare className="text-yellow-500" />,
      description: 'Projects built with Vanilla JavaScript and frameworks.',
      route: '/projects/java-script-project',
    },
    {
      title: 'Python',
      icon: <FaPython className="text-blue-600" />,
      description: 'Data analysis and automation using Python.',
      route: '/python',
    },
    {
      title: 'Machine Learning',
      icon: <FaRobot className="text-green-500" />,
      description: 'AI and ML projects using Python and TensorFlow.',
      route: '/machine-learning',
    },
    // Add more project categories as needed
  ];

  return (
    <div className="text-center mt-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate(project.route)} // Navigate to the appropriate route
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

export default Projects;
