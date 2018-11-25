import styled from "styled-components";

interface ICellContainer {
  size: string;
}

const CellContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid red;
  width: ${(p: ICellContainer) => p.size};
  height: ${(p: ICellContainer) => p.size};
  padding: 5px;
`;

export default CellContainer;
