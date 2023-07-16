import { motion } from "framer-motion";
import styled from "styled-components";

export const SDropDownMenu = styled(motion.div)`
  background-color: red;
  position: absolute;
  top: ${({ topPosition }) => topPosition - 137}px;
  left: 100%;
  padding: 20px;
  border-radius: 10px;
`