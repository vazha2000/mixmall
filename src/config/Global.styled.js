import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  body {
    background-color: #f2f2f2;
    color: #1f1f1f;
    font-family: "BPG Mrgvlovani Caps 2010";
  }

  button {
    font-family: "BPG Mrgvlovani Caps 2010";
    border: none;
  }
`