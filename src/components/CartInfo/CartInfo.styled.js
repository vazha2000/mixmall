import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const SCartInfo = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #faf2f2;
  z-index: 7;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 675px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;

  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;

export const SCartInfoWrapper = styled.div`
  /* height: inherit; */
`;

export const SCartInfoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 120px;
  width: 100%;
  background: linear-gradient(45deg, #df3d41, #e67a7c);
  color: #fff;
  letter-spacing: 2px;
`;

export const SCartInfoHeaderIconContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  > h3 {
    user-select: none;
  }

  > img {
    width: 30px;
    filter: brightness(0) invert(1);
  }
`;

export const SCartInfoHeaderClose = styled.div`
  > img {
    width: 20px;
    filter: brightness(0) invert(1);
    cursor: pointer;

    &:hover {
      filter: invert(40%) sepia(100%) saturate(3500%) hue-rotate(349deg)
        brightness(0%) contrast(100%);
    }
  }
`;

export const SCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: default;
  user-select: none;
  height: calc(100vh - 120px);
  align-items: center;
  justify-content: center;
  
  > img {
    width: 120px; 
  }

  > h1 {
    font-size: 140%;
    text-align: center;
  }
`;

export const SCartCardTableContainer = styled.div`
  height: ${({quantity}) => (quantity ? "58vh" : "auto")};
  overflow-y: auto;
  padding-bottom: 10px;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #c9c9c9;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5e5e5e;
  }
`;

export const SCartCardTable = styled.table`
  border-spacing: 0;
  width: 100%;
  margin-top: 8px;
`;

export const SCartCardTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  height: inherit;
  gap: 10px;
  padding: 0 20px;
`;

const BaseTableCell = styled.td`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const SCartCardTableBox = styled.tr`
  height: inherit;
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  height: 125px;

  &:hover {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: 50ms ease;
  }
`;

export const SCartCardTableBoxContent = styled(BaseTableCell)``;
export const SCartCardTableBoxImageContent = styled(BaseTableCell)`
  height: 90%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: inherit;
  margin-left: 5px;
`;
export const SCartCardTableBoxNameContent = styled(BaseTableCell)`
  align-items: flex-start;
  padding: 8px 15px;
  font-weight: bold;
  color: #df3d41;
  flex: 1;
  flex-direction: column;
  gap: 5px;

  > div:nth-child(2) {
    color: #1f1f1f;
    font-weight: normal;
    > span {
      font-weight: bold;
    }
  }
`;

export const SCartCardTablleRemove = styled(BaseTableCell)`
  border: none;
  padding: 0;
  justify-content: center;
  width: 20px;

  > img {
    width: 20px;
    cursor: pointer;
  }
`;


export const SCartCardTableTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  color: #fff;
  box-sizing: border-box;
  margin-top: 10px;

  > span {
    padding: 10px 40px;
    border-radius: 10px;
    background-color: #df3d41;
    cursor: default;

    &:hover {
      filter: brightness(120%);
    }

    > img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const SCartinfoCheckoutButton = styled.button`
  background-color: #df3d41;
  width: calc(100% - 70px);
  margin: 0 auto;
  padding: 15px 0;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    font-weight: bold;
    filter: brightness(120%);
  }
`
