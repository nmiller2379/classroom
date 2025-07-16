import React from 'react'

// Button components takes props for the onClick function.
export default function Button({ onClick }) {
  return (
    <button onClick={onClick}>Start</button>
  )
}
