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
          <SBigImageButton>შეუკვეთე ახლავე</SBigImageButton>
        </SBigImageContainer>
        <SSmallImagesContainer>
          {SmallImageInfo.map((info, index) => (
            <SSmallImageWrapper key={index}>
              <SSmallImage src={info.src} />
              <SSMallImageText>
                {info.text.map((text, idx) => (
                  <span key={idx}>{text}</span>
                ))}
              </SSMallImageText>
            </SSmallImageWrapper>
          ))}
        </SSmallImagesContainer>
      </SGridSubcategories>
    </>
  );
};
