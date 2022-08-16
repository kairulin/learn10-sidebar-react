import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
    }

    body{
        background:${({theme}) => theme.bg2};
        color:${({theme}) => theme.text};
        font-family:'Roboto',snas-serif;
        letter-spacing:.6px;
    }
`