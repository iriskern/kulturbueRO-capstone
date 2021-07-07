import styled from "styled-components/macro";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import StyledNavLink from "../components/styles/StyledNavLink";

export default function Menu({ open, setOpen }) {
  const { token } = useContext(AuthContext);

  return (
    <StyledMenu open={open}>
      <header>
        <StyledNavLink to="/home" onClick={setOpen}>
          kulturbü<span>RO</span>
        </StyledNavLink>
      </header>
      <StyledNavLink to="/events" onClick={setOpen}>
        eventkalender
      </StyledNavLink>
      <StyledNavLink to="/locations" onClick={setOpen}>
        locations
      </StyledNavLink>
      {token ? (
        <>
          <StyledNavLink to="/me/events" onClick={setOpen}>
            meine events
          </StyledNavLink>
          <StyledNavLink to="/me/locations" onClick={setOpen}>
            meine locations
          </StyledNavLink>
        </>
      ) : (
        <StyledNavLink to="/me/login" onClick={setOpen}>
          login
        </StyledNavLink>
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

  header {
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
