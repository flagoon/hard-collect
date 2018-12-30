import * as React from "react";
import { IBoard, populateBoard } from "../../assets/data/board";

interface IBoardContext extends IState {
  areTrapsVisible: (answer: boolean) => void;
}

interface IState {
  board: IBoard;
  opacity: boolean;
}

export const BoardContext = React.createContext<IBoardContext>({
  areTrapsVisible: () => console.log("hello"),
  board: [["death"]],
  opacity: true
});

export class BoardProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { board: populateBoard(10, 10), opacity: true };
  }

  public render() {
    const { board, opacity } = this.state;
    return (
      <BoardContext.Provider
        value={{ board, opacity, areTrapsVisible: this.areTrapsVisible }}
      >
        {this.props.children}
      </BoardContext.Provider>
    );
  }

  private areTrapsVisible(answer: boolean): void {
    this.setState({ opacity: answer });
  }
}

export const BoardConsumer = BoardContext.Consumer;
