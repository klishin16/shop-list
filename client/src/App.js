import React, { useContext, useState } from 'react';
import 'materialize-css'
import { BrowserRouter } from 'react-router-dom'
import { appRoutes } from './routes'
import { useAuth } from './hooks/auth.hooks';
import { Navbar } from './components/Navbar';

import { AuthContext } from './context/AuthContext';
import { BasketContext } from './context/BasketContext'
import { Container } from '@material-ui/core';

export default function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = appRoutes(isAuthenticated)

  //
  const [currentBasket, setCurrentBasket] = useState(null)


  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BasketContext.Provider value={{
        basketId: currentBasket, 
        setBasketId: setCurrentBasket 
      }}>
        <BrowserRouter>
          {isAuthenticated && <Navbar></Navbar>}
          <Container>
            {routes}
          </Container>
        </BrowserRouter>
      </BasketContext.Provider>
    </AuthContext.Provider>
  )
}
