import React from 'react'

export default function Display({ message, userInput }) {
  return (
    <p>
      <strong>{message}</strong> {userInput}
    </p>
  )
}
