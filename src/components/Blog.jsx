import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const categories = [
    { name: 'Books', path: '/blog/books' },
    { name: 'Stories', path: '/blog/stories' },
    { name: 'News', path: '/blog/news' },
    { name: 'Sports', path: '/blog/sports' },
    { name: 'Tutorials', path: '/blog/tutorials' },
    { name: 'Others', path: '/blog/others' },
  ];

  return (
    <div className="text-center mt-10 px-4">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blog
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Explore different sections of my blog:
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <Link to={category.path}>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                {category.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Click to explore {category.name} related articles.
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/contact"
          className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default Blog;
