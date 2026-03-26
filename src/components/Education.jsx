import React from 'react';
import { motion } from 'framer-motion';

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

const Education = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-black px-6 py-16">
      <motion.h1
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-300 dark:bg-indigo-600"></div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
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
                      {edu.degree}
                    </h2>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium leading-snug lg:w-4/5 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right flex-shrink-0">
                    <p>{edu.years}</p>
                    <p className="mt-1">{edu.address}</p>
                  </div>
                </div>

                <div className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {edu.faculty && (
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-gray-200">Faculty:</span> {edu.faculty}
                    </p>
                  )}
                  {edu.department && (
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-gray-200">Department:</span> {edu.department.replace('Department: ', '')}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
