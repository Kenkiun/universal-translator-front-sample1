// Translate.js
import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay';

const Translate = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false)

  const handleTranslate = () => {
    // Simulate translation for demonstration
    setTranslation(text);
    setShowTranslation(true)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500">
      <div className="bg-gradient-to-r from-indigo-400 p-8 shadow-2xl w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">Universal Translator</h1>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
          onClick={handleTranslate}
        >
          Translate
        </button>
        {showTranslation && <ResultDisplay translation={translation} />}
      </div>
    </div>
  );
};

export default Translate;
