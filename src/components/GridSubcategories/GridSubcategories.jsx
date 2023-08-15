import React from "react";
import {
  SBigImageContainer,
  SBigImgage,
  SGridSubcategories,
  SSmallImage,
  SSmallImageWrapper,
  SSmallImagesContainer,
} from "./GridSubcategories.styled";

export const GridSubcategories = () => {
  return (
    <>
      <SGridSubcategories>
        <SBigImageContainer>
          <SBigImgage src="assets/images/watch.jpg" />
        </SBigImageContainer>
        <SSmallImagesContainer>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
          <SSmallImageWrapper>
            <SSmallImage src="assets/images/watch.jpg" />
          </SSmallImageWrapper>
        </SSmallImagesContainer>
      </SGridSubcategories>
    </>
  );
};