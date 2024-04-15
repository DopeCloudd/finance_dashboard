import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: #121212;
  }
`;

export default GlobalStyle;