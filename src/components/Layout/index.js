import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from "components/Header"
import Home from "components/Pages/Home"
import Footer from 'components/Footer'
import styled from 'styled-components';

const LayoutStyled = styled.div`
  main {
    margin-top: 76px;
  }
`

 const Layout = () => (
   <LayoutStyled>
        <Header />
        <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        </main>
        <Footer />
  </LayoutStyled>
)
export default Layout