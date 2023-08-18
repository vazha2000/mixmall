  import React from 'react'
  import { SAdSlider, SSlider, SSliderImage } from './AdSlider.styled'
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";

  export const AdSlider = () => {
    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease"
    
  };
    return (
      <SAdSlider>
        <SSlider>
          <Slider {...settings}>
              <SSliderImage src='assets/images/ad1.png' alt="ad1" />
              <SSliderImage src='assets/images/artboard.png' alt="artboard"/>
          </Slider>
        </SSlider>
      </SAdSlider>
    )
  }
