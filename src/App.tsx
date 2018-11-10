import React, { Component } from "react";
import styled from "styled-components";
import Board from "./Board/Board";
import Legend from "./Legend/Legend";

class App extends Component {
  public render() {
    return (
      <React.Fragment>
        <MainContainer>
          <Board />
          <Legend />
        </MainContainer>
      </React.Fragment>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconFooter = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1rem;
`;

export default App;
