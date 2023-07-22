import React from "react";
import {
  SBrowseByCategory,
  SBrowseByCategoryBox,
  SBrowseByCategoryBoxWrapper,
  SBrowseByCategoryHeader,
  SBrowseByCategoryHeaderSlider,
  SBrowseByCategoryLabel,
  SBrowseByCategoryLabelText,
  SBrowseByCategorySlider,
} from "./BrowseByCategory.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows/CustomArrows";
import { categoriesListItems } from "../../data/data";

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
    responsive: [
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
          <Slider
            {...settings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            {categoriesListItems.map((item, index) => {
              return (
                <SBrowseByCategoryBoxWrapper key={index}>
                  <SBrowseByCategoryBox>
                    <img src={item.svg} alt={item.alt} width={40} />
                    <span>{item.name}</span>
                  </SBrowseByCategoryBox>
                </SBrowseByCategoryBoxWrapper>
              );
            })}
          </Slider>
        </SBrowseByCategorySlider>
      </SBrowseByCategoryHeaderSlider>
    </SBrowseByCategory>
  );
};
