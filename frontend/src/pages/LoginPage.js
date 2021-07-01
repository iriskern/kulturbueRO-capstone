import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components/macro";

const initialState = {
  username: "",
  password: "",
};

export default function LoginPage() {
  const [credentials, setCredentials] = useState(initialState);
  const { login, invalidLogin } = useContext(AuthContext);

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(credentials);
  };

  return (
    <Wrapper>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        {invalidLogin === true && (
          <p className="warning">username or password is not valid</p>
        )}
        <button disabled={!credentials.password || !credentials.username}>
          Login
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 30px auto 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 35px auto 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  p {
    margin: 25px 0 2px 0;
  }

  input {
    font-size: 80%;
    padding-top: 4px;
    width: 300px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .warning {
    color: darkred;
  }

  button {
    background: #ecf765;
    text-align: center;
    margin: 35px 0 5px;
  }

  button:disabled {
    background-color: lightgray;
    color: darkgray;
  }
`;
