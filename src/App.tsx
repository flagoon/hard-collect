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
        <IconFooter>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-buddha"
              title="Pixel Buddha"
            >
              Pixel Buddha
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </IconFooter>
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
