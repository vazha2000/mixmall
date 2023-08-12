import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SDropDownMenu = styled(motion.div)`
  background-color: #fff;
  position: absolute;
  top: 0;
  left: calc(100% + 10px);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 2;
  height: 100%;
  width: 360px;
  transition: 0.1s ease;

  &:hover {
    border: 1px solid rgba(0,0,0, 0.6);
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
      filter: invert(60%) sepia(100%) saturate(4500%) hue-rotate(349deg) brightness(92%) contrast(100%);
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
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;
