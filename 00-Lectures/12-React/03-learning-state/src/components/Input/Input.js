import React from 'react'

export default function Input({ inputType, inputName, inputValue, inputChange, labelText }) {
  return (
    <div>
      <lable>{labelText}</lable>
      <input type={ inputType } name={ inputName } value={ inputValue } onChange={ inputChange }/>
    </div>
  )
}
