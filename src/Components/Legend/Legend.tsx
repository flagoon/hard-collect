import * as React from "react";
import styled from "styled-components";
import { Candy, Death, Trap, User } from "../Board/Cell/Cells";

const Legend = () => {
  return (
    <LegendContainer>
      <LegendItem>
        <User size="24px" />
        <span>User</span>
      </LegendItem>
      <LegendItem>
        <Trap size="24px" />
        <span>Trap</span>
      </LegendItem>
      <LegendItem>
        <Candy size="24px" />
        <span>Candy</span>
      </LegendItem>
      <LegendItem>
        <Death size="24px" />
        <span>Death</span>
      </LegendItem>
    </LegendContainer>
  );
};

const LegendContainer = styled.div`
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  margin: 0 10px 0 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 10px;
  }
`;

export default Legend;
