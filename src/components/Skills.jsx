import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication (JWT, OAuth)',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    title: 'Mobile',
    skills: [
      'Ionic',
      'React Native',
      'PWA Development',
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      'Python',
      'Machine Learning',
      'Computer Vision',
      'NLP',
      'TensorFlow / PyTorch',
      'OpenCV',
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Git & GitHub',
      'Docker',
      'CI/CD',
      'Vercel',
      'AWS (Basic)',
      'Linux',
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Header */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A diverse skill set covering frontend, backend, mobile development, and
        AI engineering—focused on building scalable, high-performance, and
        intelligent applications.
      </motion.p>

      {/* Skill Groups */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {group.title}
            </h3>

            <ul className="space-y-2">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="inline-block mt-16 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
      >
        Let’s Build Something Powerful 🚀
      </motion.a>
    </section>
  );
};

export default Skills;
