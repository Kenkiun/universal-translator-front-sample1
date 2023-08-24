// TranslationForm.js
import React, { useState } from 'react';

const TranslationForm = ({ onTranslate, onTextChange }) => {
  const [text, setText] = useState('');

  const handleTranslate = () => {
    onTranslate(text);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // Notify parent component about text change
  };

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Enter text to translate..."
        value={text}
        onChange={handleTextChange}
      />
      <button
        className={`mt-2 py-2 px-4 rounded w-full ${
          text ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
        onClick={handleTranslate}
        disabled={!text}
      >
        Translate
      </button>
    </div>
  );
};

export default TranslationForm;
