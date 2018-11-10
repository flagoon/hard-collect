import * as React from "react";
import { ReactComponent as CandyIcon } from "../../Icons/candy.svg";
import { ReactComponent as DeathIcon } from "../../Icons/death.svg";
import { ReactComponent as TrapIcon } from "../../Icons/trap.svg";
import { ReactComponent as UserIcon } from "../../Icons/user.svg";
import CellContainer from "./CellContainer";

interface ICellProps {
  size: string;
}

const Trap: React.SFC<ICellProps> = props => {
  return <TrapIcon width={props.size} />;
};

const Death: React.SFC<ICellProps> = props => {
  return <DeathIcon width={props.size} />;
};

const User: React.SFC<ICellProps> = props => {
  return <UserIcon width={props.size} />;
};

const Candy: React.SFC<ICellProps> = props => {
  return <CandyIcon width={props.size} />;
};

const EmptyCell: React.SFC<ICellProps> = props => {
  return <CellContainer />;
};

export { Trap, Death, User, Candy, EmptyCell };
