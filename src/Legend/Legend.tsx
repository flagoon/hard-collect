import * as React from "react";
import styled from "styled-components";
import Candy from "./Candy/Candy";

const Legend = () => {
  return (
    <LegendContainer>
      <LegendItem>
        <Candy />
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
`;

export default Legend;
