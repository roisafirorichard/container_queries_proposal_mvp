import React from "react";
import styled from "styled-components";
import Frame from "./Frame";
import "./styles.css";

const Title = styled("h2")`
  margin-top: 0;
  @media (max-width: 350px) {
    color: red;
  }
`;

const Box = styled("div")`
  width: 100%;
  background: #f3f3f3;
`;
const App = () => {
  const clickHandler = e => {
    console.log("clicked", e.target);
  };
  return (
    <table>
      <tr>
        <td>
          <Frame is={Box}>
            <Title onClick={clickHandler}>Hello CodeSandbox</Title>
            <p>lorem ipsum</p>
          </Frame>
        </td>
        <td>
          <Frame is={Box}>
            <Title onClick={clickHandler}>Hello CodeSandbox</Title>
            <p>lorem ipsum</p>
          </Frame>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <Frame is={Box}>
            <Title onClick={clickHandler}>Hello CodeSandbox</Title>
            <p>lorem ipsum</p>
          </Frame>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <Frame is={Box}>
            <Title onClick={clickHandler}>Hello CodeSandbox</Title>
            <p>lorem ipsum</p>
          </Frame>
        </td>
      </tr>
    </table>
  );
};

export default App;
