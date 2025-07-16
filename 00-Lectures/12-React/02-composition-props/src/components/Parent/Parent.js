import React from 'react'
import Child from "../Child/Child"
import "./Parent.css"

export default function Parent() {
  return (
    <div>
      <h1>This is the parent component</h1>
      <Child />
    </div>
  )
}

