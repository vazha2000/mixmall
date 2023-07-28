import { motion } from "framer-motion";
import styled from "styled-components";

export const SProductsFilter = styled.div`
  width: 95%;
  margin-top: .8rem;
  border: 1px solid rgba(0,0,0, 0.2);
  border-radius: 10px;
`

export const SProductsFilterHeaderWrapper = styled.div`
  > h2 {
    color: black;
    font-weight: normal;
  }
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  padding: 10px;
`

export const SPriceFilterInputRangeValueContainer = styled.div`
  display: flex;
`

export const SPriceFilterInputRangeValue = styled.span`
  padding: 10px;
  font-size: 15px;
  color: red;
`

export const SPriceFilter = styled.div`
  margin: 1rem 0;
`

export const SPriceFilterRangeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const SPriceFilterRangeBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 4px;
`

export const SPriceFilterRangeThumb = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #df3d41;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SPriceFilterInputsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const SPriceFilterInput = styled.input`
  width: 80px;
  height: 45px;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0, 0.2);
  font-size: 18px;
  padding: 0 10px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.12);
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.12);
  }
`

export const SPriceFilterButton = styled(motion.button)`
  border: none;
  background-color: #df3d41;
  border-radius: 5px;
  color: #f2f2f2;
  font-size: 14px;
  padding: 10px 18px;
  font-family: inherit;

  &:hover {
    background-color: #c93034;
    cursor: pointer;
  }
`