import styled from "styled-components";

export const SSearchInputContainer = styled.div`
  background-color: red;
  position: relative;
  background-color: #ffffff;
  height: 2.375rem;
  width: 100%;
  display: flex;
  
  @media screen and (max-width: 1024px) {
  border-radius: .25rem;
  display: flex;
  margin-top: .5rem;
  overflow: hidden;
  box-shadow: ${({isFocused}) => isFocused ? ("1px 1px 11px 1px rgba(0,0,0,0.15)") : "none"};
  }
  
`

export const SSearchInput = styled.input`
  border: none;
  background-color: inherit;
  color: rgba(0,0,0, 0.8);
  padding-left: 1.25rem;
  width: 90%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0,0,0, 0.3);
  }
`

export const SSearchIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: .75rem;
  cursor: pointer;
`
