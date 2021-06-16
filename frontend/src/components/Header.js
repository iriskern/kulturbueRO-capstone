import { useRef, useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import styled from "styled-components/macro";

export default function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <Wrapper>
      <a href="/home">
        <img src={"/icon_k.png"} alt={"icon"} />
      </a>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;
