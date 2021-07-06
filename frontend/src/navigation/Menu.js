import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export default function Menu({ open, setOpen }) {
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
      <StyledLink to="/myevents" onClick={setOpen}>
        meine events
      </StyledLink>
      <StyledLink to="/mylocations" onClick={setOpen}>
        meine locations
      </StyledLink>
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
  color: #0d0c1d;
  transition: color 0.3s linear;
`;
