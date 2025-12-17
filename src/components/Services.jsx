import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Header */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I help businesses and individuals build modern, scalable, and intelligent
        digital products. From full-stack web applications to AI-powered
        solutions, my services are focused on performance, usability, and
        long-term growth.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            title: 'Full-Stack Web Development',
            desc: 'End-to-end web applications using React, Next.js, Node.js, APIs, authentication, and databases.',
          },
          {
            title: 'Frontend Engineering',
            desc: 'High-performance, responsive, and accessible UIs with modern frameworks, animations, and best UX practices.',
          },
          {
            title: 'Backend & API Development',
            desc: 'Secure, scalable backend systems with REST APIs, authentication, and optimized data flow.',
          },
          {
            title: 'AI-Powered Solutions',
            desc: 'Machine learning, computer vision, NLP, and AI integrations to automate workflows and enhance products.',
          },
          {
            title: 'UX/UI Design',
            desc: 'User-centered interface design with a focus on usability, consistency, and visual clarity.',
          },
          {
            title: 'Performance & Optimization',
            desc: 'Speed, SEO, and scalability optimization to ensure fast load times and smooth user experiences.',
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="inline-block mt-16 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
      >
        Let’s Work Together 🚀
      </motion.a>
    </section>
  );
};

export default Services;
