import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;

    &:visited {
      color: initial;
    }
  }


  button {
    border: none;
    font-size: 1.2em;
    :hover {
      cursor: pointer;
    }
  }
`
