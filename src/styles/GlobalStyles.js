import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    :root {
        --violet-letter: #4764b7;
        --grey-bg: #1f2024;
  }

  html{
    scroll-behavior: smooth;
  }
  
body {
    margin: 0;
    padding: 0;
    background: var(--grey-bg);
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;