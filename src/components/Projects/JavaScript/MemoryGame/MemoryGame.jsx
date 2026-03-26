import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EMOJIS = ['🍎', '🍌', '🍉', '🍇', '🍒', '🍓', '🥝', '🥥'];

const shuffleDeck = () => {
  const shuffled = [...EMOJIS, ...EMOJIS]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }));
  return shuffled;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setCards(shuffleDeck());
  }, []);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setTimeout(() => setIsWon(true), 500);
    }
  }, [cards]);

  const handleCardClick = (index) => {
    if (isLocked || cards[index].isFlipped || cards[index].isMatched) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );

    if (newFlippedIndices.length === 2) {
      setIsLocked(true);
      setMoves((m) => m + 1);

      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === firstIndex || i === secondIndex
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFlippedIndices([]);
        setIsLocked(false);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === firstIndex || i === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleDeck());
    setFlippedIndices([]);
    setMoves(0);
    setIsWon(false);
    setIsLocked(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 text-center"
      >
        Memory Match
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center space-x-6 mb-10 text-lg font-medium text-gray-700 dark:text-gray-300"
      >
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
          Moves: <span className="font-bold text-blue-600">{moves}</span>
        </div>
        <button
          onClick={resetGame}
          className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors shadow-sm"
        >
          Reset Game
        </button>
      </motion.div>

      {isWon ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center max-w-sm"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">You Won!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Awesome job! You matched all pairs in {moves} moves.
          </p>
          <button
            onClick={resetGame}
            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 shadow-lg transform transition active:scale-95"
          >
            Play Again
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative w-full aspect-square cursor-pointer"
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
              whileTap={{ scale: card.isFlipped || card.isMatched ? 1 : 0.95 }}
            >
              <div
                className="w-full h-full rounded-2xl shadow-md transition-all duration-500 preserve-3d"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Back of Card (Hidden initially) */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-white/30 rounded-full" />
                </div>

                {/* Front of Card (Revealed when flipped) */}
                <div
                  className={`absolute inset-0 w-full h-full bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl shadow-inner backface-hidden ${card.isMatched ? 'ring-4 ring-green-400/50 opacity-80' : ''}`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {card.emoji}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
