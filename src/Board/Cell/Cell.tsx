import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  isTrap?: boolean;
  isUser?: boolean;
  isCandy?: boolean;
  isDeath?: boolean;
}

const Cell: React.SFC<IProps> = props => {
  const { isTrap, isCandy, isDeath, isUser } = props;
  let marker: string = "";
  if (isTrap) {
    marker = "T";
  } else if (isDeath) {
    marker = "D";
  } else if (isCandy) {
    marker = "C";
  } else if (isUser) {
    marker = "U";
  }
  return <StyledCell {...props}>{marker}</StyledCell>;
};

const StyledCell = styled.div`
  display: flex;
  flex-grow: 1;
  width: 12%;
  height: 4rem;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  color: ${(props: IProps) => (props.isDeath ? "white" : "black")}
  background-color: ${(props: IProps) =>
    props.isTrap
      ? "green"
      : props.isUser
        ? "yellow"
        : props.isDeath
          ? "black"
          : props.isCandy
            ? "pink"
            : "white"};
`;

export default Cell;
