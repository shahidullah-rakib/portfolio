import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import emailjs from 'emailjs-com';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill snow theme
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Icons
import './Contact.css'; // Custom CSS for dark mode

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRichTextChange = (value) => {
    setFormData({
      ...formData,
      message: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_v3aqzph', // Your EmailJS Service ID
        'template_ckoky1a', // Your EmailJS Template ID
        formData,
        'NVTLGwMhxLA1z0kw8' // Your EmailJS User ID
      )
      .then(
        (result) => {
          setIsSent(true);
        },
        (error) => {
          setError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={`text-center mt-10 ${darkMode ? 'dark' : ''}`}>
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Contact Information */}
        <motion.div
          className="h-auto mb-12 p-4 max-w-md mx-auto bg-gray-100 inline-block dark:bg-gray-800 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <FaPhone className="text-xl" />
              <span>+8801721142653</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <FaEnvelope className="text-xl" />
              <span>shsidullarakib@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <FaWhatsapp className="text-xl" />
              <span>+8801721142653</span>
            </div>
          </div>
        </motion.div>

        {isSent ? (
          <p className="text-green-500 text-lg">Message sent successfully!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md w-full md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Message
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-left font-medium">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border-2 rounded px-4 py-2 bg-transparent text-black dark:bg-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-left font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-2 rounded px-4 py-2 bg-transparent text-black dark:bg-white"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-left font-medium">
                Message:
              </label>
              <ReactQuill
                value={formData.message}
                onChange={handleRichTextChange}
                className="w-full border rounded text-black"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
