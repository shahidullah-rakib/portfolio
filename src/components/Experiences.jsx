import React from 'react';
import { motion } from 'framer-motion';

const experiencesData = [
  {
    company: 'Akij Venture (Neoscoder)',
    position: 'Executive IT, Frontend Developer',
    duration: 'January 2025 – Present',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Developing and maintaining enterprise-level admin panels using Next.js, React, TypeScript, and Tailwind CSS.',
      'Led frontend development for MABI (Market Audit & Business Intelligence), implementing Redux for state management, SSR with Next.js, and authentication using NextAuth.',
      'Built custom middleware for role-based page authorization and applied performance optimizations using React hooks.',
      'Worked on RTM (Route to Market) to handle large demarcation data, complex filtering logic, and sales report generation.',
      'Collaborated closely with clients, backend teams, and designers to translate business requirements into scalable UI solutions.',
    ],
  },
  {
    company: 'Young Genius Bangladesh Limited',
    position: 'Junior Software Engineer',
    duration: 'April 2023 – Present',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Developing and maintaining scalable front-end applications using React, Next.js, and Ionic React for mobile applications, ensuring optimized performance and user experience.',
      'Collaborating with backend teams using Django to integrate APIs and create seamless end-to-end solutions.',
      'Working in Agile teams, actively contributing to sprint planning, code reviews, and deployments to ensure high-quality code.',
      'Enhanced project efficiency by refactoring components, improving page load times by 15%.',
    ],
  },
  {
    company: 'Nagorik IT Solution',
    position: 'Junior Web Developer',
    duration: 'May 2022 – March 2023',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Focused on front-end development using React, implementing dynamic UI components for client applications.',
      'Collaborated with design teams to translate wireframes into responsive web pages.',
      'Implemented state management and optimized API calls, reducing load times and improving user experience.',
      'Worked closely with senior developers, enhancing technical skills in React and modern web development practices.',
    ],
  },
];

const Experiences = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-black px-6 py-16">
      <motion.h1
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h1>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-300 dark:bg-indigo-600"></div>

        <div className="space-y-12">
          {experiencesData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 top-3 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-slate-900"></div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.company}
                    </h2>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {experience.position}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
