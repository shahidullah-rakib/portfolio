import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FiDownload, FiEye, FiMessageSquare } from 'react-icons/fi';
import Carousel from './Carousel/Carousel';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center py-16 px-6 sm:px-12 lg:px-20 overflow-y-auto">
      <div className="w-full max-w-5xl text-center space-y-12">
        {/* Header Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2 shadow-sm">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2">
              MD Shahidullah Rakib
            </span>
          </h1>
          
          <motion.p
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> specializing in frontend development with expertise in React, Next.js, and Ionic. Aiming to create innovative solutions and enhance user experiences.
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Contact Me
            <FiMessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
          
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
          >
            <FiEye className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            View My CV
          </button>

          <a
            href="/assets/books/pdf/cv.pdf"
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-lg font-medium rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
          >
            <FiDownload className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            Download CV
          </a>
        </motion.div>

        {/* Client Feedback Section */}
        <motion.div 
          className="w-full pt-20 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600 flex-1 max-w-[150px]"></div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
              Client Feedback
            </h2>
            <div className="h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600 flex-1 max-w-[150px]"></div>
          </div>
          
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/50 dark:border-gray-700/50">
            <Carousel />
          </div>
        </motion.div>
      </div>

      {/* Modern CV Modal */}
      <Modal 
        show={isModalOpen} 
        onClose={closeModal} 
        size="5xl" 
      >
        <Modal.Header className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800/95 backdrop-blur-md">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Curriculum Vitae</span>
        </Modal.Header>
        <Modal.Body className="p-0 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="h-[75vh] w-full p-6">
            <iframe
              src="/assets/books/pdf/cv.pdf"
              className="w-full h-full rounded-xl shadow-inner border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              title="CV Viewer"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800/95 backdrop-blur-md flex justify-end">
          <Button color="light" onClick={closeModal} className="focus:ring-2 focus:ring-blue-500 font-medium px-4">
            Close Viewer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
