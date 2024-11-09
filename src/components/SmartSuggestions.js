import React from 'react';
import { useSelector } from 'react-redux';

const SmartSuggestions = () => {
  const keywordSuggestions = useSelector((state) => state.tasks.keywordSuggestions);
  
  // Get the most frequent words for suggestions
  const suggestions = Object.entries(keywordSuggestions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([word]) => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalize for display

  return (
    <div>
      <h3>Smart Task Suggestions</h3>
      {suggestions.length > 0 ? (
        <ul>
          {suggestions.map((word, index) => (
            <li key={index}>Consider adding a task related to "{word}"</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions yet! Add more tasks to get personalized recommendations.</p>
      )}
    </div>
  );
};

export default SmartSuggestions;
