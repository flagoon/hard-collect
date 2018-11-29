import * as React from "react";
import styled from "styled-components";
import { IBoard } from "../assets/data/board";
import Cell from "./Cell/Cell";

interface IProps {
  boardData: IBoard;
  onKeyDown: (e: any) => void;
}

class Board extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    window.addEventListener("keydown", this.props.onKeyDown);
  }

  public componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onKeyDown);
  }

  public render() {
    const { boardData } = this.props;
    return (
      <StyledBoard>
        {boardData.map((row: string[], rowKey: number) => {
          return row.map((cell: string, cellKey: number) => {
            return (
              <Cell
                key={`${rowKey}-${cellKey}`}
                cellType={cell}
                size={`${700 / boardData[0].length}px`}
              />
            );
          });
        })}
      </StyledBoard>
    );
  }
}

const StyledBoard = styled.div`
  background-color: yellow;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  width: 700px;
`;

export default Board;
