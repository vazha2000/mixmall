import React from "react";
import {
  SBrowseByCategory,
  SBrowseByCategoryBox,
  SBrowseByCategoryHeader,
  SBrowseByCategoryHeaderSlider,
  SBrowseByCategoryLabel,
  SBrowseByCategoryLabelText,
  SBrowseByCategorySlider,
} from "./BrowseByCategory.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows/CustomArrows";

const PrevArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: red;
`

 const NextArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: red;
`

export const BrowseByCategory = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    swipeToSlide: true,
    speed: 200,   
    PrevArrow: <CustomPrevArrow />,
    NextArrow: <CustomNextArrow />
  };
  return (
    <SBrowseByCategory>
      <SBrowseByCategoryLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SBrowseByCategoryLabelText>კატეგორიები</SBrowseByCategoryLabelText>
      </SBrowseByCategoryLabel>
      <SBrowseByCategoryHeaderSlider>
        <SBrowseByCategoryHeader>
          მოძებნე კატეგორიების მიხედვით
        </SBrowseByCategoryHeader>
        <SBrowseByCategorySlider>
          <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
            <SBrowseByCategoryBox>1. gela</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>2. bnela</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>3. cxela</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>4. aba raa</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>5. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>6. mausi</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>7. keyboard</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>8. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>9. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>10. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>11. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>12. modiii</SBrowseByCategoryBox>
            <SBrowseByCategoryBox>13. modiii</SBrowseByCategoryBox>
          </Slider>
        </SBrowseByCategorySlider>
      </SBrowseByCategoryHeaderSlider>
    </SBrowseByCategory>
  );
};
