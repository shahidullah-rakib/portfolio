import { motion } from 'framer-motion';
import React from 'react';

const educationData = [
  {
    institution: 'American International University - Bangladesh (AIUB)',
    address: '408/1, Kuratoli Road, Kuril, Khilkhet, Dhaka 1229, Bangladesh',
    degree: 'Bachelor of Computer Science & Engineering (BSc in CSE)',
    faculty: 'Faculty of Science and Information Technology (FSIT)',
    years: '2018 - 2022',
  },
  {
    institution: 'Cantonment Public School and College Busms, Dinajpur',
    address: 'Parbatipur, Dinajpur',
    degree: 'Higher Secondary School Certificate (HSC)',
    department: 'Department: Science',
    years: '2016 - 2017',
  },
  {
    institution: 'Janankur Pilot High School, Parbatipur, Dinajpur',
    address: 'Parbatipur, Dinajpur',
    degree: 'Secondary School Certificate (SSC)',
    department: 'Department: Science',
    years: '2014 - 2015',
  },
];

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

const Education = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 overflow-hidden">
      {/* Header */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h1>

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative border-l-2 border-blue-500/30 pl-8 space-y-12"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />

            {/* Card */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {edu.institution}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.years}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {edu.address}
              </p>

              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-4">
                {edu.degree}
              </p>

              {edu.faculty && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {edu.faculty}
                </p>
              )}

              {edu.department && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {edu.department}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
