// Translate.js
import React, { useState } from 'react';
import TranslationForm from './TranslationForm';
import ResultDisplay from './ResultDisplay';

const Translate = () => {
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [text, setText] = useState('')

  const handleTranslate = (text) => {
    // Simulate translation for demonstration
    setTranslation(text);
    setShowTranslation(true);
  };

  const handleTextChange = (text) => {
    setText(text);
    if (!text) {
      setShowTranslation(false); // Hide ResultDisplay if input becomes empty
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500">
      <div className="bg-gradient-to-r from-indigo-400 p-8 shadow-2xl w-full sm:w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center text-white">Universal Translator</h1>
        <TranslationForm onTranslate={handleTranslate} onTextChange={handleTextChange} />
        {showTranslation && <ResultDisplay translation={translation} />}
      </div>
    </div>
  );
};

export default Translate;
