import React from "react";
import {
  SBrands,
  SBrandsBox,
  SBrandsBoxWrapper,
  SBrandsHeaderSlider,
  SBrandsLabel,
  SBrandsLabelText,
  SBrandsSlider,
  SLine,
} from "./Brands.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { categoriesListItems } from "../../data/data";

export const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    speed: 17000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SBrands>
      <SBrandsLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SBrandsLabelText>OUR BRANDS</SBrandsLabelText>
      </SBrandsLabel>
      <SBrandsHeaderSlider>
        <SBrandsSlider>
          <Slider {...settings}>
            {categoriesListItems.map((item, index) => {
              return (
                <SBrandsBoxWrapper key={index}>
                  <SBrandsBox>
                    <img src="assets/images/asus.png" alt={item.alt} width={100} />
                  </SBrandsBox>
                </SBrandsBoxWrapper>
              );
            })}
          </Slider>
        </SBrandsSlider>
      </SBrandsHeaderSlider>
    </SBrands>
  );
};
