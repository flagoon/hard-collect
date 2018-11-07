import React from "react";
import styled from "styled-components";
import Donut from "../icons/donut.svg";

const Candy = () => {
  return <CandyIcon />;
};

const CandyIcon = styled.span`
  width: 5px;
  border: 1px solid red;
  mask-image: url("../icons/donut.svg");
`;

export default Candy;
