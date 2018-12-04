import React, { Component } from "react";
import styled from "styled-components";
import {
  IBoard,
  IUserPos,
  populateBoard,
  userPosition
} from "./assets/data/board";
import GameBoard from "./Components/Board/GameBoard";
import ScoreBoard from "./Components/Board/ScoreBoard";
import Screen from "./Components/Screens/Screens";

interface IState {
  userPos: IUserPos;
  board: IBoard;
  isDead: boolean;
  isWin: boolean;
  score: number;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    const board = populateBoard(10, 10);
    this.state = {
      board,
      isDead: false,
      isWin: false,
      score: 0,
      userPos: userPosition
    };
    this.resetBoard = this.resetBoard.bind(this);
  }

  public render() {
    const { board, isDead, isWin, score } = this.state;
    return (
      <div>
        <ScoreBoard score={score} />
        {isDead ? (
          <MainContainer>
            <Screen score={score} onClick={this.resetBoard} type="death" />
          </MainContainer>
        ) : (
          <MainContainer>
            {isWin ? (
              <Screen score={score} onClick={this.resetBoard} type="win" />
            ) : (
              <GameBoard boardData={board} onKeyDown={this.onKeyDownHandler} />
            )}
          </MainContainer>
        )}
      </div>
    );
  }

  public resetBoard() {
    const resetBoard = populateBoard(10, 10);
    this.setState({
      board: resetBoard,
      isDead: false,
      isWin: false,
      score: 0,
      userPos: userPosition
    });
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

      const nextMove = newBoard[nextUserPos.posx][nextUserPos.posy];
      if (nextMove === "death") {
        this.setState({ isDead: true });
      } else if (nextMove === "candy") {
        this.setState({ score: this.state.score + 1 });
      } else if (nextMove === "trap") {
        // TODO: It's a Trap
      }

      newBoard[nextUserPos.posx][nextUserPos.posy] = "user";
      this.setState({ board: newBoard, userPos: nextUserPos });

      let candyCounter: number = 0;
      board.map((row: string[]) => {
        if (row.includes("candy")) {
          candyCounter++;
        }
      });

      if (candyCounter === 0) {
        this.setState({ isWin: true });
      }
    }
  };
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DeadModal = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const DeadMessage = styled.div`
  background-color: red;
  border-radius: 5px;
  color: white;
  font-size: 3rem;
  font-weight: 900;
  padding: 0.5rem;
`;

export default App;
