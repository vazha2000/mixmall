import styled from "styled-components";

export const SLayout = styled.div`
  /* width: 70%; */
  width: 1240px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  /* padding: 0 18px; */

  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.15), -5px 0px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1260px){
    width: 100%;
  }
`