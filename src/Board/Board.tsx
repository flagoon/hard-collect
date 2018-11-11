import * as React from "react";
import styled from "styled-components";
import Cell from "./Cell/Cell";

const Board = ({ boardData }: any): JSX.Element => {
  return (
    <StyledBoard>
      {boardData.map((row: string[][], rowKey: number) => {
        return row.map((cell: string[], cellKey: number) => {
          return (
            <Cell key={`${rowKey}-${cellKey}`} cellType={cell[0]} size="60px" />
          );
        });
      })}
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  background-color: yellow;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
`;

export default Board;
