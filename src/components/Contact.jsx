import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill snow theme
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
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      {isSent ? (
        <p className="text-green-500 text-lg">Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
              className="w-full border-2 rounded px-4 py-2 bg-transparent dark:bg-white"
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
              className="w-full border-2 rounded px-4 py-2 bg-transparent dark:bg-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-medium">
              Message:
            </label>
            <ReactQuill
              value={formData.message}
              onChange={handleRichTextChange}
              className="w-full border rounded"
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
  );
};

export default Contact;
