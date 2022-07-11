import React from 'react'
import { Button } from './styles'

const SubmitButton = ({ disabled, onClick, children }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  )
}

export { SubmitButton }
