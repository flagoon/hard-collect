import * as React from "react";
import styled from "styled-components";

const Candy = () => {
  return <CandyIcon />;
};

const CandyIcon = styled.div`
  border: 1px solid red;
  width: 1rem;
  height: 1rem;
  /* -webkit-mask-size: 24px 24px;
  mask-size: 24px 24px;
  -webkit-mask-image: url("../icons/donut.svg");
  mask-image: url("../icons/donut.svg");
  mask-position: 24px 24px; */
`;

export default Candy;
