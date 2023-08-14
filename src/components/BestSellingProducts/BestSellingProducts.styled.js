import styled from "styled-components";
import { SSaleOfMonth, SSaleOfMonthButton } from "../SaleOfMonth/SaleOfMonth.styled";
import { SBrowseByCategoryLabel, SBrowseByCategoryLabelText } from "../BrowseByCategory/BrowseByCategory.styled";

export const SBestSellingProducts = styled(SSaleOfMonth)`

`

export const SBestSellingProductsLabel = styled(SBrowseByCategoryLabel)`
    margin-bottom: 1.5rem;
`

export const SBestSellingProductsLabelText = styled(SBrowseByCategoryLabelText)`

`

export const SBestSellingProductsHeader = styled.h2`

`

export const SBestSellingProductsItems = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media screen and (max-width: 1280px){
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SBestSellingProductsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3.75rem;
`

export const SBestSellingProductsButton = styled(SSaleOfMonthButton)`
  position: relative;
`