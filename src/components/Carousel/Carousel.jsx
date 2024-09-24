import { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: 'A brilliant and talented developer who goes above and beyond expectations!',
      author: 'John Doe, CEO of TechCorp',
      photo: '/path/to/photo1.jpg', // Replace with actual image paths
    },
    {
      text: 'Innovative and efficient, truly a pleasure to work with!',
      author: 'Jane Smith, Lead Developer',
      photo: '/path/to/photo2.jpg',
    },
    {
      text: 'Excellent problem-solving skills and an eye for design.',
      author: 'Emily Johnson, Project Manager',
      photo: '/path/to/photo3.jpg',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full mx-auto">
      <div id="review-carousel" className="relative w-full">
        <div className="relative h-auto overflow-hidden rounded-lg">
          {/* Slide content */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-6 text-center duration-700 ease-in-out ${
                currentSlide === index ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={review.photo}
                  alt={`${review.author}'s photo`}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {review.text}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  - {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Previous/Next controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
          onClick={handlePrevSlide}
        >
          {/* Previous button content */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
          onClick={handleNextSlide}
        >
          {/* Next button content */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
