import * as React from "react";
import { ReactComponent as CandyIcon } from "../../../assets/Icons/candy.svg";
import { ReactComponent as DeathIcon } from "../../../assets/Icons/death.svg";
import { ReactComponent as TrapIcon } from "../../../assets/Icons/trap.svg";
import { ReactComponent as UserIcon } from "../../../assets/Icons/user.svg";
import { CellContainer } from "./CellContainer";

interface ICellProps {
  size: string;
  opacity?: string;
}

const Trap: React.SFC<ICellProps> = props => {
  return <TrapIcon width={props.size} opacity={props.opacity} />;
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
  return <CellContainer size={props.size} />;
};

export { Trap, Death, User, Candy, EmptyCell };
