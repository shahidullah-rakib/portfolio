import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { Modal, Button } from 'flowbite-react';
import Carousel from './Carousel/Carousel';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Custom Dark Mode Toggle (uses Tailwind classes)
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Toggle Dark Mode Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="text-center mt-10">
        <motion.div
          className="relative text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a passionate Frontend Engineer, and this is my portfolio.
          </motion.p>
        </motion.div>

        {/* Button Section with Dark Mode Styling */}
        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-blue-700"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.a>
          <motion.button
            onClick={openModal}
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-green-700"
            whileHover={{ scale: 1.1 }}
          >
            View My CV
          </motion.button>
        </div>

        {/* Download CV Button */}
        <motion.a
          href="/assets/books/pdf/cv.pdf" // Replace with the actual path to your CV
          download
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105 dark:bg-yellow-700"
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.a>

        {/* Review Section with Flowbite Carousel */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            What People Say About Me
          </h2>
          <div>
            <Carousel />
          </div>
        </div>

        {/* Load More Reviews Button */}
        <div className="mt-6">
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-purple-700"
            whileHover={{ scale: 1.1 }}
            onClick={() => alert('More reviews coming soon!')}
          >
            Load More Reviews
          </motion.button>
        </div>
      </div>

      {/* CV Modal */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>My CV</Modal.Header>
        <Modal.Body>
          <iframe
            src="/assets/books/pdf/cv.pdf" // Replace with the actual path to your CV
            width="100%"
            height="500px"
            title="CV Viewer"
            className="border rounded-lg shadow-lg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
