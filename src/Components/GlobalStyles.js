import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        position:relative;
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:white;
        color:black;
        padding-top:50px;
        overflow-x:hidden;
        
    }
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
        color:white;
    }
    

`;

export default GlobalStyle;
