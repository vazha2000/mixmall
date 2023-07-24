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
    text-shadow: 0px 0px 0px black;
  }
  > h2 {
    text-align: center;
  }
`