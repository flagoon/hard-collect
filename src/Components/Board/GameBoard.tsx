import * as React from "react";
import styled from "styled-components";
import { IBoard } from "../../assets/data/board";
import Legend from "../Legend/Legend";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

interface IProps {
  boardData: IBoard;
  onKeyDown: (event: any) => void;
  opacity: string;
}

const GameBoard = ({ boardData, onKeyDown, opacity }: IProps) => {
  return (
    <MegaContainer>
      <ScoreBoard />
      <BoardContainer>
        <Board boardData={boardData} onKeyDown={onKeyDown} opacity={opacity} />
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
