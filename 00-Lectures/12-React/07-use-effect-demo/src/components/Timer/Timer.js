import React from 'react'

// Timer takes minutes and seconds as props.
export default function Timer({ minutes, seconds }) {
  return (
    // Here, we're just rendering out that data. It will be based from the parent component.
    <h3>Time remaining: {minutes}:{seconds}</h3>
  )
}
