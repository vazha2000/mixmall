import { motion } from "framer-motion";
import styled from "styled-components";

export const SCartInfo = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  z-index: 5;
  padding: 8px 10px;
`

export const SCartEmpty = styled.div`
  white-space: nowrap;
`

export const SCartCardTable = styled.table`
  height: auto;
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
  border: 1px solid black;
  font-size: 15px;
`;

export const SCartCardTableBoxContent = styled(BaseTableCell)``;
export const SCartCardTableBoxImageContent = styled(BaseTableCell)``;
export const SCartCardTableBoxNameContent = styled(BaseTableCell)`
  min-width: 200px;
`;
export const SCartCardTableBoxQuantityContent = styled(BaseTableCell)`
  min-width: 90px;
`;
export const SCartCardTableBoxTotalContent = styled(BaseTableCell)`
  min-width: 140px;
`;

export const SCartCardTablleRemove = styled(BaseTableCell)`
  border: none;
  padding: 0;
  justify-content: center;
  width: 50px;

  > img {
    width: 20px;
    cursor: pointer;
  }
`
