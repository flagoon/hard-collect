import React, { Component } from "react";
import styled from "styled-components";
import {
  IBoard,
  IUserPos,
  populateBoard,
  userPosition
} from "./assets/data/board";
import GameBoard from "./Components/Board/GameBoard";
import Screen from "./Components/Screens/Screens";
import { shuffleArray } from "./helpers/arrayHelper";

interface IState {
  userPos: IUserPos;
  board: IBoard;
  isDead: boolean;
  isWin: boolean;
  score: number;
  validKeys: string[];
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
      userPos: userPosition,
      validKeys: ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"]
    };
    this.resetBoard = this.resetBoard.bind(this);
  }

  public render() {
    const { board, isDead, isWin, score } = this.state;
    return (
      <div>
        {isDead ? (
          <MainContainer>
            <Screen score={score} onClick={this.resetBoard} type="death" />
          </MainContainer>
        ) : (
          <MainContainer>
            {isWin ? (
              <Screen score={score} onClick={this.resetBoard} type="win" />
            ) : (
              <GameBoard
                boardData={board}
                onKeyDown={this.onKeyDownHandler}
                score={score}
              />
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
    const { userPos, board, validKeys } = this.state;
    const boardWidth: number = board[0].length - 1;
    const boardHeight: number = board.length - 1;
    const newBoard = [...board];
    const nextUserPos: IUserPos = { ...userPos };

    if (validKeys.includes(e.key)) {
      e.preventDefault();
      newBoard[userPos.posx][userPos.posy] = "empty";

      if (e.key === validKeys[0] && userPos.posy < boardWidth) {
        nextUserPos.posy += 1;
      } else if (e.key === validKeys[1] && userPos.posy > 0) {
        nextUserPos.posy -= 1;
      } else if (e.key === validKeys[3] && userPos.posx > 0) {
        nextUserPos.posx -= 1;
      } else if (e.key === validKeys[2] && userPos.posx < boardHeight) {
        nextUserPos.posx += 1;
      }

      const nextMove = newBoard[nextUserPos.posx][nextUserPos.posy];

      if (nextMove === "death") {
        this.setState({ isDead: true });
      } else if (nextMove === "candy") {
        this.setState({ score: this.state.score + 1 });
      } else if (nextMove === "trap") {
        const shuffledArray: string[] = shuffleArray(this.state.validKeys);
        this.setState({ validKeys: [...shuffledArray] });
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

export default App;
