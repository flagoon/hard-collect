import * as React from "react";
import { CellContainer } from "./CellContainer";
import { Candy, Death, EmptyCell, Trap, User } from "./Cells";

interface IProps {
  cellType: string;
  size: string;
  opacity?: string;
}

class Cell extends React.PureComponent<IProps> {
  public render(): React.ReactNode {
    const { cellType, size, opacity } = this.props;
    switch (cellType) {
      case "trap":
        return (
          <CellContainer size={size}>
            <Trap size={size} opacity={opacity} />
          </CellContainer>
        );
      case "user":
        return (
          <CellContainer size={size}>
            <User size={size} />
          </CellContainer>
        );
      case "death":
        return (
          <CellContainer size={size}>
            <Death size={size} />
          </CellContainer>
        );
      case "candy":
        return (
          <CellContainer size={size}>
            <Candy size={size} />
          </CellContainer>
        );
      default:
        return <EmptyCell size={size} />;
    }
  }
}

export default Cell;
