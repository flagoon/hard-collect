import React, { Component } from "react";
import styled from "styled-components";
import boardData from "./board-data";
import Board from "./Board/Board";
import Legend from "./Legend/Legend";

interface IState {
  userPos: {
    x: number;
    y: number;
  };
  board: string[][][];
}

class App extends Component<{}, IState> {
  private boardRef = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      board: boardData,
      userPos: {
        x: 5,
        y: 5
      }
    };
  }

  public render() {
    return (
      <div
        onKeyDown={this.onKeyDownHandler}
        tabIndex={0}
        ref={this.boardRef}
        style={{ outline: "none", height: "100vh" }}
      >
        <MainContainer>
          <Board boardData={this.state.board} />
          <Legend />
        </MainContainer>
      </div>
    );
  }

  public componentDidMount() {
    this.boardRef.current!.focus();
  }

  public onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key !== "F12") {
      e.preventDefault();
      console.log(e.key); // tslint:disable-line
    }
  };
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  div:focus {
    border: none;
  }
`;

export default App;
