import { useState } from "react";
import useSignUp from "../hooks/useSingUp";
import CardWrapper from "../components/styles/CardWrapper";
import styled from "styled-components/macro";
import SmallStyledLink from "../components/styles/SmallStyledLink";

const initialState = {
  username: "",
  password: "",
  passwordCheck: "",
};

export default function SignUpPage() {
  const [credentials, setCredentials] = useState(initialState);
  const { signUp, success, invalidSignUp } = useSignUp();

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(credentials);
  };

  return (
    <CardWrapper>
      <Wrapper>
        <h2>SIGN UP</h2>
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
          <label>
            <p>Password Check</p>
            <input
              type="password"
              name="passwordCheck"
              onChange={handleChange}
              value={credentials.passwordCheck}
            />
          </label>
          {invalidSignUp === true && <strong>username already exists</strong>}
          <button
            disabled={
              credentials.password.length < 4 ||
              credentials.password !== credentials.passwordCheck ||
              credentials.username.length < 4
            }
          >
            Sign Up
          </button>
        </form>
        {success === true && (
          <SmallStyledLink to="/me/login">
            Signed up successfully :) Please log in!
          </SmallStyledLink>
        )}
        {success === false && (
          <SmallStyledLink to="/me/login">Login</SmallStyledLink>
        )}
      </Wrapper>
    </CardWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  cursor: default;

  button {
    margin: 25px auto 5px;
    width: 300px;
  }
`;
