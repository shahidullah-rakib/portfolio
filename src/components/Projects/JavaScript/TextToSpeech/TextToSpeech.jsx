import React, { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setVoices(synthVoices);
      if (synthVoices.length > 0) {
        setSelectedVoice(synthVoices[0].name);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const handleSpeak = () => {
    if (text !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoiceObj = voices.find(
        (voice) => voice.name === selectedVoice
      );

      if (selectedVoiceObj) {
        utterance.voice = selectedVoiceObj;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex justify-center text-center mt-10">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md transition-transform duration-300">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Text to Speech
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          className="w-full h-24 p-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />

        <div className="mb-4">
          <label
            htmlFor="voice"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Choose a Voice:
          </label>
          <select
            id="voice"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          >
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang}){' '}
                {voice.gender === 'female' ? '👩' : '👨'}
              </option>
            ))}
          </select>
        </div>

        <motion.button
          onClick={handleSpeak}
          className="w-full flex items-center justify-center bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaVolumeUp className="mr-2" />
          Speak
        </motion.button>
      </div>
    </div>
  );
};

export default TextToSpeech;
