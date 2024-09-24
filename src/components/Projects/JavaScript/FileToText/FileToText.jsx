import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FileToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const speechRecognition = new window.webkitSpeechRecognition();
      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;
      speechRecognition.lang = 'en-US';

      speechRecognition.onresult = (event) => {
        const currentTranscript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join('');
        setTranscript(currentTranscript);
      };

      speechRecognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      setRecognition(speechRecognition);
    } else {
      console.error('Speech recognition is not supported in this browser.');
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Speech to Text Converter
        </motion.h2>

        <div className="flex justify-center mb-6">
          <motion.button
            onClick={toggleListening}
            className={`p-4 rounded-full text-white ${
              isListening ? 'bg-red-500' : 'bg-green-500'
            } hover:scale-105 transition-transform duration-200`}
            whileHover={{ scale: 1.1 }}
          >
            {isListening ? (
              <FaMicrophoneSlash size={24} />
            ) : (
              <FaMicrophone size={24} />
            )}
          </motion.button>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg h-32 overflow-y-auto border border-gray-300 dark:border-gray-600">
          {transcript || (
            <p className="text-gray-400 dark:text-gray-500">
              Transcription will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileToText;
