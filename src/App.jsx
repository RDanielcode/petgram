import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery'
import { Home } from './components/pages/Home'
import { Navbar } from './components/NavBar'
// import { Fav } from './components/pages/Fav'
import { User } from './components/pages/User'
import { NotRegisteredUser } from './components/pages/NotRegisteredUser'
import { Context } from '../src/components/Context/Context'
import { NotFound } from './components/pages/NotFound'

const Fav = React.lazy(() => import('./components/pages/Fav'))

const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <section>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Link to='/'>
            <Logo />
          </Link>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
            <Route path='/fav' element={isAuth ? <Fav /> : <Navigate replace to='/login' />} />
            <Route path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
            <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </Suspense>
    </section>
  )
}

export default App
