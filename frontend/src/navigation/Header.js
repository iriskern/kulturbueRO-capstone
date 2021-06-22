import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import styled from "styled-components/macro";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <a href="/home">
        <img src={"/favicon.ico"} alt={"icon"} />
      </a>
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
