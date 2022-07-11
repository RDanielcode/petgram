import React, { useState } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => window.sessionStorage.getItem('token'))

  const activation = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  const removeAuth = (token) => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }
  return (
    <Context.Provider value={{ isAuth, activation, removeAuth }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
