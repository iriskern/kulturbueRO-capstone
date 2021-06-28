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

    input {
      font-size: 1em;
      font-family: inherit;
      text-align: inherit;
      color: inherit;
      border: none;
      cursor: pointer;
    }

    button {
      font-size: 1em;
      font-family: inherit;
      text-align: inherit;
      color: inherit;
      border: none;
      cursor: pointer;
      padding: 8px 10px 5px;
      margin: 5px;
      border-radius: 5px;
      background: #effffa;
    }

    h1 {
      background: #effffa;
      font-size: 100%;
      text-align: center;
      padding: 20px 15px;
      margin: 0;
    }

    h2 {
      font-size: 110%;
      margin: 10px 5px;
    }

    h3 {
      font-size: 100%;
      margin: 15px 5px 5px 5px;
    }

    p {
      font-size: 80%;
      margin: 5px;
    }

    a {
      text-decoration: none;
      font-size: 80%;
      margin: 5px;
      display: inline-block;
      padding: 0;
    }
    
    img {
      width: 330px;
    }
    
    time {
      font-size: 80%;
      margin: 5px;
    }

    address {
      font-size: 80%;
      font-style: normal;
      margin: 5px;
    }
`;
