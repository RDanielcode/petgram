import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { Layout } from '../Layout'
import { SubmitButton } from '../SubmitButton'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Profile'>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
    </Layout>
  )
}

export { User }
