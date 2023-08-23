import styled from "styled-components";

export const SCountingDown = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 760px) {
    gap: 15px;
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