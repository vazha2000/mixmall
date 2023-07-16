import { motion } from "framer-motion";
import styled from "styled-components";

export const SDropDownMenu = styled(motion.div)`
  background-color: #fcfcfc;
  position: absolute;
  top: ${({ topPosition }) => topPosition - 137}px;
  left: calc(100% + 2px);
  padding: 20px;
  border-radius: .188rem;
  border: 2px solid rgba(0,0,0, 0.8);
`