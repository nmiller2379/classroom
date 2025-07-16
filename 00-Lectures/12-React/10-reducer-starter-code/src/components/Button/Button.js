import React from 'react'

export default function Button({ onClick, message, id }) {
  return (
    <button onClick={() => onClick(id)}>
      {message}
    </button>
  )
}
