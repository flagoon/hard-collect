import React, { Component } from "react";
import styled from "styled-components";
import {
  IBoard,
  IUserPos,
  populateBoard,
  userPosition
} from "./assets/data/board";
import Board from "./Board/Board";
import Legend from "./Legend/Legend";

interface IState {
  userPos: IUserPos;
  board: IBoard;
}

class App extends Component<{}, IState> {
  private boardRef = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    const board = populateBoard(10);
    this.state = {
      board,
      userPos: userPosition
    };
  }

  public render() {
    const { userPos, board } = this.state;
    return (
      <div
        onKeyDown={this.onKeyDownHandler}
        tabIndex={0}
        ref={this.boardRef}
        style={{ outline: "none", height: "100vh" }}
      >
        <MainContainer>
          <Board boardData={board} />
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
