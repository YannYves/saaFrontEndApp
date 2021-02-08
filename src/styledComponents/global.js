import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {


    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue" , Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }


  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;


  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: underline;
  }
`;
