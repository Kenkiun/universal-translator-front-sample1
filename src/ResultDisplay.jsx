// ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ translation }) => {
  return (
    <div className="mt-4 bg-white rounded p-4 shadow-lg">
      <p className="text-gray-700">{translation}</p>
    </div>
  );
};

export default ResultDisplay;
