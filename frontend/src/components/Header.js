import styled from "styled-components/macro";

export default function Header() {
  return (
    <Wrapper>
      <a href="">
        <span></span>
      </a>
      <img src={"/icon_k.png"} alt={"icon"} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  img {
    width: 50px;
    height: 50px;
  }

  a {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;

    span {
      margin: 0 auto;
      position: relative;
      top: 12px;
    }

    span:before,
    span:after {
      position: absolute;
      content: "";
    }

    span,
    span:before,
    span:after {
      width: 30px;
      height: 6px;
      background-color: #ecf765;
      display: block;
    }

    span:before {
      margin-top: -12px;
    }

    span:after {
      margin-top: 12px;
    }

    span {
      -webkit-transition-duration: 0s;
      transition-duration: 0s;
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    :hover span {
      background-color: rgba(0, 0, 0, 0);
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    span:before {
      -webkit-transition-property: margin, -webkit-transform;
      transition-property: margin, transform;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-delay: 0.2s, 0s;
      transition-delay: 0.2s, 0s;
    }

    :hover span:before {
      margin-top: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transition-delay: 0s, 0.2s;
      transition-delay: 0s, 0.2s;
    }

    span:after {
      -webkit-transition-property: margin, -webkit-transform;
      transition-property: margin, transform;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-delay: 0.2s, 0s;
      transition-delay: 0.2s, 0s;
    }

    :hover span:after {
      margin-top: 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transition-delay: 0s, 0.2s;
      transition-delay: 0s, 0.2s;
    }
  }
`;
