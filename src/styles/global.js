import { createGlobalStyle } from "styled-components";
import background from '../assets/images/background.jpg'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body{
    background: #000501;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%
  }


  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  #root{
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
