import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SDropDownMenuWrapper = styled.div`
  > div:nth-child(1) {
    height: 100%;
    transition: box-shadow 0.3s ease-in-out;
      /* box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2); */

    /* &:hover {
      -webkit-box-shadow: 11px 0px 21px 3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 11px 0px 21px 3px rgba(0, 0, 0, 0.75);
      box-shadow: 11px 0px 21px 3px rgba(0, 0, 0, 0.75);
      transition: box-shadow 0.3s ease-in-out;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
    } */
  }
  position: absolute;
  top: 15px;
  left: 99.8%;
  height: calc(100% - 15px);
  min-width: 600px;
`;
export const SDropDownMenu = styled(motion.div)`
  background-color: #f2f2f2;
  padding: 20px;
  z-index: 2;
  height: 100%;
  width: 100%;
  transition: 0.1s ease;
  overflow-y: auto;
  box-sizing: border-box;

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
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  white-space: nowrap;
`;

export const SMenuItemsDot = styled.div`
  > img {
    filter: invert(30%) sepia(0%) saturate(4500%) hue-rotate(349deg)
      brightness(92%) contrast(100%);
  }

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
  display: ${({ quantity }) => (quantity ? "none" : "flex")};
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;
