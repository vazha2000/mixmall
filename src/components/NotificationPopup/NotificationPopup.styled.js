import { motion } from "framer-motion";
import styled from "styled-components";

export const SCenteredContainer = styled.div`
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 90%;
z-index: 5;
@media screen and (max-width: 600px){
  width: 80%;
}
`;

export const SProductAddedToWishlist = styled(motion.div)`
  > img {
    height: 40%;
    filter: brightness(0) invert(1);
  }
  width: 100%;
  height: 80px;
  white-space: nowrap;
  background-color: #df3d41;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  gap: 1%;
  
  @media screen and (max-width: 600px){
  white-space: normal; 
}
`