import styled from "styled-components";

export const SCountingDown = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    gap: 10px;
    justify-content: center;
  }
  @media screen and (max-width: 280px) {
    gap: 5px;
  }
`

export const SCountingDownTimeContainer = styled.div`
  > span {
    font-size: 13px;
  }
  > h2 {
    text-align: center;
  }
`