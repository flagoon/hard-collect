import * as React from "react";
import CellContainer from "./CellContainer";
import { Candy, Death, EmptyCell, Trap, User } from "./Cells";

interface IProps {
  cellType: string;
  size: string;
}

class Cell extends React.PureComponent<IProps> {
  public render(): React.ReactNode {
    const { cellType, size = "60px" } = this.props;
    switch (cellType) {
      case "trap":
        return (
          <CellContainer>
            <Trap size={size} />
          </CellContainer>
        );
      case "user":
        return (
          <CellContainer>
            <User size={size} />
          </CellContainer>
        );
      case "death":
        return (
          <CellContainer>
            <Death size={size} />
          </CellContainer>
        );
      case "candy":
        return (
          <CellContainer>
            <Candy size={size} />
          </CellContainer>
        );
      default:
        return <EmptyCell size={size} />;
    }
  }
}

export default Cell;
