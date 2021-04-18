import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after{
        box-sizing: inherit;
    }
    
    body{
        margin: 0;
        background-color: #f0f0f0;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: black;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    button{
        cursor: pointer;
        background-color: transparent;
        outline: none;
    }
    input, button {
        font-family: inherit;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3 {
        font-family: Pacifico;
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;