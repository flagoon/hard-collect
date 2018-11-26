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
    const board = populateBoard(8, 10);
    this.state = {
      board,
      userPos: userPosition
    };
  }

  public render() {
    const { board } = this.state;
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
    const validKeys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
    const { userPos, board } = this.state;
    const boardWidth: number = board[0].length - 1;
    const boardHeight: number = board.length - 1;
    const newBoard = [...board];
    const nextUserPos: IUserPos = { ...userPos };
    if (validKeys.includes(e.key)) {
      e.preventDefault();
      newBoard[userPos.posx][userPos.posy] = "empty";
      if (e.key === "ArrowRight" && userPos.posy < boardWidth) {
        nextUserPos.posy += 1;
      } else if (e.key === "ArrowLeft" && userPos.posy > 0) {
        nextUserPos.posy -= 1;
      } else if (e.key === "ArrowUp" && userPos.posx > 0) {
        nextUserPos.posx -= 1;
      } else if (e.key === "ArrowDown" && userPos.posx < boardHeight) {
        nextUserPos.posx += 1;
      }
      // TODO: handle trap/death
      newBoard[nextUserPos.posx][nextUserPos.posy] = "user";
      this.setState({ board: newBoard });
      this.setState({ userPos: nextUserPos });
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
