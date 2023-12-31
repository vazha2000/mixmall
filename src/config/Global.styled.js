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
  input {
    font-family: "BPG Mrgvlovani Caps 2010";
  }
  body {
    background-color: #f6f6f6;
    color: #1f1f1f;
    font-family: "BPG Mrgvlovani Caps", sans-serif;
    overflow-x: hidden;
    line-height: 1.2;
  }

  button {
    font-family: "BPG Mrgvlovani Caps 2010";
    border: none;
  }
`
