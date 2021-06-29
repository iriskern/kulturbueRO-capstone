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
        <img src={"/favicon.ico"} alt={"icon"} />
      </NavLink>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    margin-right: 35px;
  }
`;
