import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    
    html, body{
      margin: 0;
      font-family: "Josefin Sans", sans-serif;
      font-size: 120%;
      color: #0d0c1d;
      background: #699391;
    }

    input, button {
      font-size: 1em;
      font-family: inherit;
      text-align: inherit;
      color: inherit;
      border: none;
    }
`;
