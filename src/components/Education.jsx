import { div } from 'framer-motion/client';
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

const Education = () => {
  return (
    <div className="overflow-hidden p-6">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Education
        </h1>
        <div className="flex flex-col space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {edu.institution}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {edu.address}
              </p>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-2">
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
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {edu.years}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
