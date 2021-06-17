import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    
    html, body{
      margin: 0 20px 0 0;
      font-family: "Josefin Sans", sans-serif;
      font-size: 120%;
      background: #699391;
    }
`;
