import * as React from "react";
import styled from "styled-components";
import { Candy, Death } from "../Board/Cell/Cells";
import ResetButton from "../Board/ResetButton";
import { Points } from "../BoardElements/Points";

interface IScreen {
  onClick: () => void;
  type: string;
}

const Screen = ({ onClick, type }: IScreen) => {
  return (
    <MainContainer>
      <Points />
      {type === "death" ? <Death size={"200px"} /> : <Candy size={"200px"} />}

      <ResetButton onClick={onClick} />
    </MainContainer>
  );
};

export default Screen;

const MainContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20rem;
`;
