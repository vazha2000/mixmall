import styled from "styled-components";
import { SCubcategoryPaginationButton, SSubcategoryPagination, SSubcategoryPaginationList, SSubcategoryPaginationListItems } from "../../components/SubcategoryPagination/SubcategoryPagination.styled";

export const SSearchedProductsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 20px 10px;

  @media screen and (max-width: 800px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SSearchedProductsPagination = styled(SSubcategoryPagination)`

`

export const SSearchedProductsPaginationList = styled(SSubcategoryPaginationList)`
  display: flex;
`

export const SSearchedProductsPaginationButton = styled(SCubcategoryPaginationButton)`

`

export const SSearchedProductsPaginationListItems = styled(SSubcategoryPaginationListItems)``

export const SSearchedProductsNoData = styled.div`
  > h1 {
    text-align: center;
  }
  display: flex;
  justify-content: center;

  @media screen and (max-width: 300px){
    > h1 {
      font-size: 20px;
    }
  }
`