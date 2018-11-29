import * as React from "react";

interface IProps {
  onClick: () => void;
}

const ResetButton = ({ onClick }: IProps): JSX.Element => (
  <button onClick={onClick}>Reset</button>
);

export default ResetButton;
