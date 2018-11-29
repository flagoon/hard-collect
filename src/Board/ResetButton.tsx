import * as React from "react";
import styled from "styled-components";
interface IProps {
  onClick: () => void;
}

class ResetButton extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    window.addEventListener("keydown", this.enterHandler);
  }

  public componentWillUnmount() {
    window.removeEventListener("keydown", this.enterHandler);
  }

  public enterHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.props.onClick();
    }
  };

  public render() {
    const { onClick } = this.props;
    return (
      <Button onClick={onClick}>
        Press <span>ENTER</span> to reset
      </Button>
    );
  }
}

const Button = styled.button`
  color: white;
  background-color: blue;
  border: 0;
  border-radius: 5px;
  margin: 1rem;
  padding: 2rem;

  &:hover {
    background-color: darkblue;
    cursor: pointer;
  }

  & > span {
    font-weight: bold;
  }
`;

export default ResetButton;
