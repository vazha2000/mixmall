import styled from "styled-components";

export const SCartInfo = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  /* width: 500px; */
  padding: 8px 0;
  z-index: 5;
  padding: 8px 10px;
`

export const SCartCardTable = styled.table`
  height: auto;
  /* width: 400px; */
  /* border: 1px solid black; */
  border-spacing: 0;
`

export const SCartCardTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  height: inherit;
  gap: 10px;
`


const BaseTableCell = styled.td`
  border-right: 1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  white-space: nowrap;
`;

export const SCartCardTableBox = styled.tr`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 1px solid black;
  font-size: 15px;
`;

export const SCartCardTableBoxContent = styled(BaseTableCell)``;
export const SCartCardTableBoxImageContent = styled(BaseTableCell)``;
export const SCartCardTableBoxNameContent = styled(BaseTableCell)`
  min-width: 200px;
  padding-left: 5px;
`;
export const SCartCardTableBoxQuantityContent = styled(BaseTableCell)``;
export const SCartCardTableBoxTotalContent = styled(BaseTableCell)`
  min-width: 140px;
`;

export const SCartCardTablleRemove = styled.td`
  padding: 0 10px;
`
