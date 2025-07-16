import React from 'react'

export default function Question({ question, options, onSelect }) {
    return (
        <div>
          <h2>{question}</h2>
          {options.map((option, index) => (
            <button key={index} onClick={() => onSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      );
}
