import * as React from "react";
import styled from "styled-components";
import Candy from "./Candy/Candy";

const Legend = () => {
  return (
    <LegendContainer>
      <div>
        <Candy />
        <span>Death</span>
      </div>
    </LegendContainer>
  );
};

const LegendContainer = styled.div`
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  margin: 0 10px 0 10px;
`;

export default Legend;
