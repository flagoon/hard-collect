import * as React from "react";
import styled from "styled-components";
import { ScoreConsumer } from "../Context/ScoreContext";

export const Points = () => (
  <ScoreConsumer>
    {({ score }) => (
      <PointsContainer>You've got {score} points!</PointsContainer>
    )}
  </ScoreConsumer>
);

const PointsContainer = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;
