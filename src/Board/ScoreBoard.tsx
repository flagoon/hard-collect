import * as React from "react";
import styled from "styled-components";

interface IProps {
  score: number;
}

const ScoreBoard = ({ score }: IProps) => {
  return <Score>Score: {score}</Score>;
};

const Score = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

export default ScoreBoard;
