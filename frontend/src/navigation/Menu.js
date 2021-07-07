import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Menu({ open, setOpen }) {
  const { token } = useContext(AuthContext);

  return (
    <StyledMenu open={open}>
      <h1>
        <StyledLink to="/home" onClick={setOpen}>
          kulturbü<span>RO</span>
        </StyledLink>
      </h1>
      <StyledLink to="/events" onClick={setOpen}>
        eventkalender
      </StyledLink>
      <StyledLink to="/locations" onClick={setOpen}>
        locations
      </StyledLink>
      {token ? (
        <>
          <StyledLink to="/me/events" onClick={setOpen}>
            meine events
          </StyledLink>
          <StyledLink to="/me/locations" onClick={setOpen}>
            meine locations
          </StyledLink>
        </>
      ) : (
        <StyledLink to="/me/login" onClick={setOpen}>
          login
        </StyledLink>
      )}
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 400px;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  h1 {
    text-align: left;
    padding: 10px 0 0 20px;
    margin-left: -20px;
    font-size: 160%;
    background: #699391;
    border-radius: 0 5px 5px 0;
    width: min-content;
  }

  span {
    color: #ecf765;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 100%;
`;
