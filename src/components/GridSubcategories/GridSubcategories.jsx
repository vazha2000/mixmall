import React, { useState } from "react";
import {
  SBigImageButton,
  SBigImageContainer,
  SBigImageText,
  SBigImgage,
  SGridSubcategories,
  SSMallImageText,
  SSmallImage,
  SSmallImageWrapper,
  SSmallImagesContainer,
} from "./GridSubcategories.styled";

const SmallImageInfo = [
  {
    src: "assets/images/gridImages/washingmachine.png",
    text: ["სარეცხი", "მანქანები"],
  },
  {
    src: "assets/images/gridImages/three.png",
    text: ["ჩასაშენებელი", "სამეული"],
  },
  { src: "assets/images/gridImages/tv.png", text: ["ტელევიზორები"] },
  { src: "assets/images/gridImages/gasOven.png", text: ["გასქურები"] },
  { src: "assets/images/gridImages/conditioner.png", text: ["კონდიციონერები"] },
  {
    src: "assets/images/gridImages/dishwasher.png",
    text: ["ჭურჭლის", "სარეცხი", "მანქანები"],
  },
];

export const GridSubcategories = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [smallImageHovered, setSmallImageHovered] = useState({});

  const handleSmallImageHover = (index, isHovered) => {
    setSmallImageHovered(prevState => ({
      ...prevState,
      [index]: isHovered,
    }));
  };

  return (
    <>
      <SGridSubcategories>
        <SBigImageContainer
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <SBigImgage
            isImageHovered={isImageHovered}
            src="assets/images/gridImages/fridge.png"
          />
          <SBigImageText>
            <h1>მაცივრები</h1>
            <p>
              მხოლოდ <span>639 ლარიდან</span>
            </p>
          </SBigImageText>
          <SBigImageButton>შეუკვეთე <span>ახლავე</span></SBigImageButton>
        </SBigImageContainer>
        <SSmallImagesContainer>
          {SmallImageInfo.map((info, index) => (
            <SSmallImageWrapper key={index} onMouseEnter={() => handleSmallImageHover(index, true)}
            onMouseLeave={() => handleSmallImageHover(index, false)}>
              <SSmallImage src={info.src} isSmallImageHovered={smallImageHovered[index]}/>
              <SSMallImageText>
                {info.text.map((text, idx) => (
                  <span key={idx}>{text}</span>
                ))}
              </SSMallImageText>
              <span>22 ცალი</span>
            </SSmallImageWrapper>
          ))}
        </SSmallImagesContainer>
      </SGridSubcategories>
    </>
  );
};
