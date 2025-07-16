import React from 'react'

export default function Button({ onClick }) {
  return (
    <button id='new-quote' onClick={onClick}>
      New quote
    </button>
  )
}
