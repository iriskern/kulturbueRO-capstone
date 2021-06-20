import styled from "styled-components/macro";
import Header from "../navigation/Header";

export default function Layout(props) {
  return (
    <PageLayout>
      <Header />
      <div>{props.children}</div>
    </PageLayout>
  );
}

const PageLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  div {
    overflow-y: auto;
  }
`;
