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
    background-color: #ffffff;
    color: #1f1f1f;
    font-family: "BPG Mrgvlovani Caps 2010";
    overflow-x: hidden;
  }

  button {
    font-family: "BPG Mrgvlovani Caps 2010";
    border: none;
  }
`

// თვის აქციის ქვემოთ დაემატოს როგორც ვიდეოშია კომპიუტერის ნაწილების სექცია. ერთი დიდი ფოტო და 6 პატარა
// ბრენდების დამატება ბოლოში
