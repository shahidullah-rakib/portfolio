import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { Modal, Button } from 'flowbite-react'; // Import Flowbite modal components

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-center mt-10 ">
      <div className="relative text-center px-4">
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
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
          <button
            onClick={openModal}
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            View My CV
          </button>
        </div>
        <a
          href="/assets/books/pdf/cv.pdf" // Replace with the actual path to your CV
          download
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105"
        >
          Download CV
        </a>
      </div>

      {/* CV Modal */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>My CV</Modal.Header>
        <Modal.Body>
          <iframe
            src="/assets/books/pdf/cv.pdf" // Replace with the actual path to your CV
            width="80%"
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
