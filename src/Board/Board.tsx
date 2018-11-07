import * as React from "react";
import styled from "styled-components";
import boardData from "../board-data";
import Cell from "./Cell/Cell";

const Board = (): JSX.Element => {
  return (
    <StyledBoard>
      {boardData.map((row: string[][], rowKey: number) => {
        return row.map((cell: string[], cellKey: number) => {
          return (
            <Cell
              key={`${rowKey}-${cellKey}`}
              isTrap={cell.includes("trap")}
              isUser={cell.includes("user")}
              isCandy={cell.includes("candy")}
              isDeath={cell.includes("death")}
            />
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
