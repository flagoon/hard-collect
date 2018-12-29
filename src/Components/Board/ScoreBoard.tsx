import * as React from "react";
import styled from "styled-components";
import { ScoreConsumer } from "../Context/ScoreContext";

const ScoreBoard = () => {
  return (
    <ScoreConsumer>{score => <Score>Score: {score}</Score>}</ScoreConsumer>
  );
};

const Score = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

export default ScoreBoard;
