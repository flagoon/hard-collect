import React, { Component } from "react";
import styled from "styled-components";
import {
  IBoard,
  IUserPos,
  populateBoard,
  userPosition
} from "./assets/data/board";
import GameBoard from "./Components/Board/GameBoard";
import { INCREASE_SCORE, ZERO_SCORE } from "./Components/Constants";
import Screen from "./Components/Screens/Screens";
import { shuffleArray } from "./helpers/arrayHelper";

interface IState {
  userPos: IUserPos;
  board: IBoard;
  isDead: boolean;
  isWin: boolean;
  validKeys: string[];
  opacity: string;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    const board = populateBoard(10, 10);
    this.state = {
      board,
      isDead: false,
      isWin: false,
      opacity: "1",
      userPos: userPosition,
      validKeys: ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"]
    };
    this.resetBoard = this.resetBoard.bind(this);
  }

  public render() {
    const { board, isDead, isWin, opacity } = this.state;
    return (
      <div>
        {isDead ? (
          <MainContainer>
            <Screen onClick={this.resetBoard} type="death" />
          </MainContainer>
        ) : (
          <MainContainer>
            {isWin ? (
              <Screen onClick={this.resetBoard} type="win" />
            ) : (
              <GameBoard
                boardData={board}
                onKeyDown={this.onKeyDownHandler}
                opacity={opacity}
              />
            )}
          </MainContainer>
        )}
      </div>
    );
  }

  public resetBoard() {
    const resetBoard = populateBoard(10, 10);
    this.props.updateScore(ZERO_SCORE);
    this.setState({
      board: resetBoard,
      isDead: false,
      isWin: false,
      userPos: userPosition
    });
  }

  public onKeyDownHandler = (e: React.KeyboardEvent): void => {
    const { userPos, board, validKeys } = this.state;
    const boardWidth: number = board[0].length - 1;
    const boardHeight: number = board.length - 1;
    const newBoard = [...board];
    const nextUserPos: IUserPos = { ...userPos };

    if (validKeys.includes(e.key)) {
      e.preventDefault();
      newBoard[userPos.posx][userPos.posy] = "empty";
      this.setState({ opacity: "0" });
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
        this.setState({
          isDead: true,
          opacity: "1",
          validKeys: ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"]
        });
      } else if (nextMove === "candy") {
        this.props.updateScore(INCREASE_SCORE);
      } else if (nextMove === "trap") {
        const shuffledArray: string[] = shuffleArray(this.state.validKeys);
        this.setState({ opacity: "1", validKeys: [...shuffledArray] });
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
        this.setState({
          isWin: true,
          opacity: "1",
          validKeys: ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"]
        });
      }
    }
  };
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
