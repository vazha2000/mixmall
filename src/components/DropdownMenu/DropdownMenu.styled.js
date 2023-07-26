import { motion } from "framer-motion";
import styled from "styled-components";

export const SDropDownMenu = styled(motion.div)`
  background-color: #fcfcfc;
  position: absolute;
  top: ${({ topPosition }) => topPosition -1}px;
  left: calc(100% + 2px);
  padding: 20px;
  border-radius: .188rem;
  border: 1px solid rgba(0,0,0, 0.8);
  z-index: 2;
`

export const SMenuGridContainer = styled.ul`
  display: grid;
  grid-template-columns: ${({isOverflowing}) => (isOverflowing ? "repeat(2, 1fr)" : "repeat(3, 1fr)")};
  gap: 10px 20px;
  white-space: nowrap;
`

export const SMenuItems = styled.li`
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #df3d41;
  }
  
  &::before {
    content: '•';
    color: black;
    margin-right: 8px;
    font-size: 20px;
  }

  @media screen and (max-width: 1168px){
    font-size: 13px;
  }
`