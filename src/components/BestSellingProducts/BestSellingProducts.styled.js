import styled from "styled-components";
import { SSaleOfMonth } from "../SaleOfMonth/SaleOfMonth.styled";
import { SBrowseByCategoryLabel, SBrowseByCategoryLabelText } from "../BrowseByCategory/BrowseByCategory.styled";

export const SBestSellingProducts = styled(SSaleOfMonth)`

`

export const SBestSellingProductsLabel = styled(SBrowseByCategoryLabel)`
    margin-bottom: 1.5rem;
`

export const SBestSellingProductsLabelText = styled(SBrowseByCategoryLabelText)`

`

export const SBestSellingProductsHeader = styled.h2`
  white-space: nowrap;
`

export const SBestSellingProductsItems = styled.div`
  margin-top: 60px;
  row-gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`