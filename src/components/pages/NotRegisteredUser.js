import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { UserForm } from '../UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Error, Load } from '../UserForm/styles'
import { Layout } from '../Layout'

const NotRegisteredUser = () => {
  const { registerMutation, loading: loadingReg, error: errorReg } = RegisterMutation()
  const { loginMutation, loading: loadingLog, error: errorLog } = LoginMutation()
  const { activation } = useContext(Context)

  const handleRegister = ({ email, password }) => {
    registerMutation({
      variables: {
        input: {
          email,
          password
        }
      }
    }).then(({ data }) => {
      const { singup } = data
      activation(singup)
    })
  }

  const handleLogin = ({ email, password }) => {
    loginMutation({
      variables: {
        input: {
          email,
          password
        }
      }
    }).then(({ data }) => {
      const { login } = data
      activation(login)
    })
  }
  return (
    <Layout title='Login or Registration'>
      <UserForm
        onSubmit={handleRegister}
        title='Register'
        error={errorReg}
        loading={loadingReg}
      />
      {loadingReg && <Load>loading...</Load>}
      {errorReg && <Error>user already exist</Error>}

      <UserForm
        onSubmit={handleLogin}
        title='Log in'
        error={errorLog}
        loading={loadingLog}
      />
      {loadingLog && <Load>loading...</Load>}
      {errorLog && <Error>invalid password</Error>}
    </Layout>
  )
}

export { NotRegisteredUser }
