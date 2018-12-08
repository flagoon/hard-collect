import * as React from "react";
import styled from "styled-components";

interface IProps {
  score: number;
}

export const Points = ({ score }: IProps) => (
  <PointsContainer>You've got {score} points!</PointsContainer>
);

const PointsContainer = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;
