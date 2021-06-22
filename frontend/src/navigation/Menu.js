import styled from "styled-components/macro";

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <h1>
        <a href="/home">
          kulturbü<span>RO</span>
        </a>
      </h1>
      <a href="/events">eventkalender</a>
      <a href="/locations">locations</a>
      <a href="/myevents">meine events</a>
      <a href="/mylocations">meine locations</a>
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

  a > span {
    color: #ecf765;
  }

  a {
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
