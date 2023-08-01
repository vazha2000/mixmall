import React from 'react'
import { SProductPage, SProductPageBigImage, SProductPageImages, SProductPageMainImage, SProductPageOptions, SProductPageSmallImage, SProductPageSmallImages } from './ProductPage.styled'

export const ProductPage = ({product}) => {
  console.log(product)
  return (
    <SProductPage>
      <SProductPageImages>
        <SProductPageSmallImages>
          <SProductPageSmallImage src="assets/images/computerTechnic/orange.png"/>
          <SProductPageSmallImage src="assets/images/computerTechnic/orange.png"/>
          <SProductPageSmallImage src="assets/images/computerTechnic/orange.png"/>
          <SProductPageSmallImage src="assets/images/computerTechnic/orange.png"/>
        </SProductPageSmallImages>
        <SProductPageMainImage>
          <SProductPageBigImage src="assets/images/computerTechnic/orange.png"/>
        </SProductPageMainImage>
      </SProductPageImages>
      <SProductPageOptions>
        sdds
      </SProductPageOptions>
    </SProductPage>
  )
}
