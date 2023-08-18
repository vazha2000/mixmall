import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SDropDownMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  padding-left: 20px;
  height: calc(100% - 15px);
  width: 400px;
`
export const SDropDownMenu = styled(motion.div)`
  background-color: #ededed;
  padding: 20px;
  border-radius: ${({isOverflowing}) => (isOverflowing ? "15px 8px 8px 15px " : "15px")};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: ${({isOverflowing}) => (isOverflowing ? "none" : "1px solid rgba(0,0,0, 0.2)")};
  z-index: 2;
  height: 100%;
  margin-top: 15px;
  width: 100%;
  transition: 0.1s ease;
  overflow-y: auto;
  box-sizing: border-box;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-right: ${({isOverflowing}) => (isOverflowing ? "none" : "1px solid rgba(0,0,0, 0.6)")};
  }

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

export const SMenuGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  white-space: nowrap;
`;

export const SMenuItemsDot = styled.div`
  display: flex;
  align-items: center;
  color: #303030;
  gap: 10px;

  &:hover {
    color: black;
    font-weight: bold;

    > img {
      filter: invert(60%) sepia(100%) saturate(4500%) hue-rotate(349deg)
        brightness(92%) contrast(100%);
    }
  }
`;

export const SMenuItems = styled.li`
  font-size: 13px;
  cursor: pointer;
`;

export const SStyledLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  display: ${({quantity}) => (quantity ? "none" : "flex")};
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;
