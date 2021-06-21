import styled from "styled-components/macro";

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
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
  height: 300px;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
