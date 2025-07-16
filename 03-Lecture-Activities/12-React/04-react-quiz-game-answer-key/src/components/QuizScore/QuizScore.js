import React from 'react'

export default function QuizScore({ score, total }) {
    return (
        <div className='score'>
          <h3>Score: {score} / {total}</h3>
        </div>
      );
}
