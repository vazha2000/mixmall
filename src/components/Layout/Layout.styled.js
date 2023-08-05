import styled from "styled-components";

export const SLayout = styled.div`
  width: 88%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1024px){
    width: 97%;
  }
`