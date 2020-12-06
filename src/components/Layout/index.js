import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from "components/Header"
import Home from "components/Pages/Home"
import Catalog from "components/Pages/Catalog"
import Footer from 'components/Footer'
import styled from 'styled-components';
import { ThemeContextProvider } from "helpers/context/themeContext";

const LayoutStyled = styled.div`
  main {
    margin-top: 76px;
  }
`

 const Layout = () => (
   <LayoutStyled>
     <ThemeContextProvider value={"light"}>
        <Header />
        <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/catalog' component={Catalog}/>
        </Switch>
        </main>
        <Footer />
      </ThemeContextProvider >
  </LayoutStyled>
)
export default Layout