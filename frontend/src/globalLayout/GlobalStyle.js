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

    section {
      border: none;
      cursor: pointer;
      padding: 8px 10px 5px;
      margin: 5px;
      border-radius: 5px;
      background: #effffa;
    }

    button {
      font-size: 100%;
      font-family: inherit;
      text-align: center;
      border: none;
      cursor: pointer;
      padding: 8px 10px 5px;
      margin: 5px;
      border-radius: 5px;
      background: #ecf765;
    }

    button:disabled {
      background-color: lightgray;
      color: darkgray;
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
      margin: 18px 5px 5px 5px;
    }

    p {
      font-size: 80%;
      margin: 5px;
    }

    a {
      text-decoration: inherit;
      color: inherit;
      font-size: 80%;
      margin: 5px;
      padding: 0;
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
    
    strong {
      color: darkred;
      font-size: 80%;
      margin: 5px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 10px;
    }
    
    label {
      display: flex;
      flex-direction: column;
    }

    input {
      font-size: 70%;
      font-family: inherit;
      border: 1px solid lightgray;
      cursor: pointer;
      padding: 5px;
      width: 300px;
      border-radius: 5px;
      margin: 2px 5px 25px 5px;
    }
`;
