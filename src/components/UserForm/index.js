import React from 'react'
import { useInput } from '../hooks/useInput'
import { Title, Input, Form } from './styles'
import { SubmitButton } from '../SubmitButton'

const UserForm = ({ onSubmit, title, loading }) => {
  const email = useInput('')
  const password = useInput('')

  const handleForm = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={loading} onSubmit={handleForm}>
        <Input placeholder='email' disabled={loading} {...email} />
        <Input placeholder='password' type='password' disabled={loading} {...password} />
        <SubmitButton disabled={loading}>{title}</SubmitButton>
      </Form>
    </>
  )
}

export { UserForm }
