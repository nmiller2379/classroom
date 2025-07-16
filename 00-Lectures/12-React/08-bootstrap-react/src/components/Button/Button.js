import React from 'react'
import { Button } from 'react-bootstrap'

export default function CustomButton({ variant, children, disabled }) {
  return (
    <Button variant={variant} disabled={disabled}>
      {children}
    </Button>
  )
}
