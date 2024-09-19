import React from 'react';
import { motion } from 'framer-motion'; // For animations

const workData = [
  {
    title: 'Study Tasky (Mobile App)',
    tech: 'Ionic, React, HTML, Tailwind, Firebase',
    description:
      'A mobile application designed for students to track their daily activities and manage tasks efficiently. Available on Playstore. Features include task tracking, reminders, and daily activity summaries.',
    link: 'https://play.google.com/store/apps/details?id=com.study.tasky',
  },
  {
    title: 'Study Give Way',
    tech: 'HTML, Tailwind, PostgreSQL, JavaScript, Django, Jinja',
    description:
      'A platform designed for students aiming to study abroad, featuring a Jinja template integrated with HTML5, Tailwind CSS, and JavaScript. Supports user profiles, study abroad programs, and application tracking.',
    link: 'https://studygiveway.com/',
  },
  {
    title: 'Product Analysis Website',
    tech: 'React, JavaScript, HTML, Bootstrap 5',
    description:
      'An application for adding products to the cart and analyzing product details, built with React and Bootstrap for a responsive frontend. Features include product search, detailed view, and cart management.',
    sourceCode: 'https://github.com/shsidulla/product-analysis',
  },
  {
    title: 'Stock Market Prediction',
    tech: 'Python, Jupyter Notebook, LSTM Model',
    description:
      'Developed using LSTM models to predict stock market closing prices. Includes data visualization and comparison of predicted vs. actual closing prices. Enhanced model accuracy through iterative training and hyperparameter tuning.',
    sourceCode: 'https://github.com/shsidulla/stock_market_prediction',
  },
  {
    title: 'Predicting Heart Disease',
    tech: 'Python, Jupyter Notebook, ML Models (CNN, KNN, Decision Tree)',
    description:
      'Implemented various ML models to predict heart disease from medical patient history. Evaluated model performance and accuracy. Applied data preprocessing, feature engineering, and model evaluation techniques.',
    sourceCode: 'https://github.com/shsidulla/Predicting_Heart_Disease',
  },
];

const researchData = {
  title:
    'A Proposed Design of a Lecture Materials To Reduce Learning Complexity',
  description:
    'Proposed and developed a design of lecture materials aimed at reducing learning complexities, published in ICCA 2022 (ACM). Utilized Machine Learning techniques to analyze patterns and provide insights for personalized learning. Applied Human-Computer Interaction principles to create more intuitive and user-friendly educational tools.',
  publicationLink: 'https://dl.acm.org/doi/10.1145/3542954.3542986',
};

const eventData = [
  {
    title: 'Professional Solar PV Design',
    description:
      'A two-day workshop on "Professional Solar PV Design" organized by ESAB AIUB UNIT FACE.',
    link: 'https://www.aiub.edu/esab-aiub-unit-face-successfully-organized-a-two-days-workshops-on-professional-solar-pv-design-',
  },
  {
    title: 'An Important Step to Get Success in Career - LinkedIn',
    description:
      'A workshop on career development organized by ESAB AIUB UNIT FACE.',
    link: 'https://www.aiub.edu/esab-aiub-unit-face-successfully-organized-a-workshop-on-an-important-step-to-get-success-in-career--linkedin',
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-700 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects & Work
        </motion.h1>

        {/* Projects Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {workData.map((work, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {work.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {work.tech}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {work.description}
              </p>
              {work.link && (
                <a
                  href={work.link}
                  className="text-blue-500 dark:text-blue-400 mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              {work.sourceCode && (
                <a
                  href={work.sourceCode}
                  className="text-blue-500 dark:text-blue-400 mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Research Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Research
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {researchData.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {researchData.description}
            </p>
            <a
              href={researchData.publicationLink}
              className="text-blue-500 dark:text-blue-400 mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Publication
            </a>
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {eventData.map((event, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  className="text-blue-500 dark:text-blue-400 mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Event
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
