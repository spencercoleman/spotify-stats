import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;