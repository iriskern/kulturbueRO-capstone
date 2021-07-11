import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components/macro";
import CardWrapper from "../components/styles/CardWrapper";

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
    <CardWrapper>
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
            <strong>username or password is not valid</strong>
          )}
          <button disabled={!credentials.password || !credentials.username}>
            Login
          </button>
        </form>
      </Wrapper>
    </CardWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;

  button {
    margin: 25px auto 5px;
    width: 300px;
  }
`;
