import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <NavLink to="/home">
        <img src={"/favicon.ico"} alt={"logo"} />
      </NavLink>
      <nav>
        <Burger open={open} setOpen={() => setOpen(!open)} />
        <Menu open={open} setOpen={() => setOpen(!open)} />
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  nav {
    margin-right: 35px;
  }
`;
