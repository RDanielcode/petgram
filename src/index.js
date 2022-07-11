import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import { onError } from '@apollo/client/link/error'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from, ApolloLink } from '@apollo/client'
import { Provider } from './components/Context/Context.js'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-api-back.vercel.app/graphql'
    })
  ])
})
// uri: 'https://petgram-api-back.vercel.app/graphql',

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('App')
)
