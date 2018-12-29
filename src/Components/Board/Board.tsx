import * as React from "react";
import styled from "styled-components";
import { IBoard } from "../../assets/data/board";
import { ScoreConsumer } from "../Context/ScoreContext";
import Cell from "./Cell/Cell";

interface IProps {
  boardData: IBoard;
  onKeyDown: (event: any) => void;
  opacity: string;
  updateScore: (option: string) => void;
}

class Board extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    window.addEventListener(
      "keydown",
      this.props.onKeyDown(this.props.updateScore)
    );
  }

  public componentWillUnmount() {
    window.removeEventListener(
      "keydown",
      this.props.onKeyDown(this.props.updateScore)
    );
  }

  public render() {
    const { boardData, opacity } = this.props;
    return (
      <StyledBoard>
        {boardData.map((row: string[], rowKey: number) => {
          return row.map((cell: string, cellKey: number) => {
            return cell === "trap" ? (
              <Cell
                key={`${rowKey}-${cellKey}`}
                cellType={cell}
                opacity={opacity}
                size={`${700 / boardData[0].length}px`}
              />
            ) : (
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

interface IBoardWithConsumer {
  boardData: IBoard;
  opacity: string;
  updateScore: (option: string) => void;
}

const BoardWithConsumer = ({
  opacity,
  boardData
}: Partial<IBoardWithConsumer>) => {
  return (
    <ScoreConsumer>
      {({ updateScore }) => (
        <Board
          opacity={opacity}
          boardData={boardData}
          updateScore={updateScore}
        />
      )}
    </ScoreConsumer>
  );
};

export default BoardWithConsumer;
