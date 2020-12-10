import React from 'react';
import Layout from "components/Layout"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Roboto', sans-serif;
}

.theme-dark {
  * {
    background-color:darkblue !important;
    color: antiquewhite;
  }
  
  .banner__description, .swiper-button-next, .swiper-button-prev, .swiper-pagination, .SliderFullWidth__text{
    background-color:initial !important;
  }
  
}
`;

const App = () => (
  <div>
    <Layout />
    <GlobalStyle />
  </div>
)

export default App;
