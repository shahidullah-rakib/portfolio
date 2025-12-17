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

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who Am I?
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I’m{' '}
        <span className="font-semibold text-blue-500">
          MD Shahidullah Rakib
        </span>
        , a <span className="font-semibold">Full-Stack Web Developer</span> and{' '}
        <span className="font-semibold text-purple-500">AI Engineer</span>{' '}
        specializing in building modern, scalable, and intelligent applications.
        I focus on creating fast, secure, and user-centric digital experiences
        powered by clean architecture and smart automation.
      </motion.p>

      {/* Role Highlights */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-4 mb-14"
      >
        {[
          'Frontend Engineer (React, Next.js)',
          'Backend Developer (API, Auth, Databases)',
          'AI Engineer (ML, CV, NLP)',
          'Cloud & Performance Focused',
        ].map((role, i) => (
          <motion.span
            key={i}
            variants={item}
            className="px-5 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
          >
            {role}
          </motion.span>
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {[
          {
            title: 'Frontend Development',
            desc: 'React, Next.js, TypeScript, Tailwind, animations, accessibility, and performance-driven UI.',
          },
          {
            title: 'Backend & APIs',
            desc: 'Node.js, REST APIs, authentication, database design, and scalable server architecture.',
          },
          {
            title: 'Full-Stack Systems',
            desc: 'End-to-end application development with secure data flow and clean architecture.',
          },
          {
            title: 'AI Engineering',
            desc: 'Machine learning, computer vision, NLP, and AI-powered features integrated into products.',
          },
        ].map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="inline-block mt-14 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
      >
        Let’s Build Something Smart 🚀
      </motion.a>
    </section>
  );
};

export default About;
