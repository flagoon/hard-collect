import * as React from "react";
import styled from "styled-components";
import { IBoard } from "../../assets/data/board";
import Legend from "../Legend/Legend";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

interface IProps {
  boardData: IBoard;
  onKeyDown: (event: any) => void;
  score: number;
}

const GameBoard = ({ boardData, onKeyDown, score }: IProps) => {
  return (
    <MegaContainer>
      <ScoreBoard score={score} />
      <BoardContainer>
        <Board boardData={boardData} onKeyDown={onKeyDown} />
        <Legend />
      </BoardContainer>
    </MegaContainer>
  );
};

export default GameBoard;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MegaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
