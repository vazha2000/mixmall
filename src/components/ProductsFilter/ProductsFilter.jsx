import React, { useState } from "react";
import {
  SBrandFilter,
  SBrandRadioLabel,
  SPriceFilter,
  SPriceFilterButton,
  SPriceFilterInput,
  SPriceFilterInputRangeValue,
  SPriceFilterInputRangeValueContainer,
  SPriceFilterInputsContainer,
  SPriceFilterRangeBackground,
  SPriceFilterRangeContainer,
  SPriceFilterRangeThumb,
  SProductsFilter,
  SProductsFilterHeaderWrapper,
} from "./ProductsFilter.styled";
import { Range, getTrackBackground } from "react-range";

export const ProductsFilter = () => {
  const [values, setValues] = useState([0, 1000]);
  const STEP = 1;
  const MIN = 0; 
  const MAX = 1000; 

  return (
    <SProductsFilter>
      <SProductsFilterHeaderWrapper>
        <h2>გაფილტრე</h2>
      </SProductsFilterHeaderWrapper>
      <SPriceFilterInputRangeValueContainer>
        <SPriceFilterInputRangeValue>{values[0]}$ - {values[1]}$</SPriceFilterInputRangeValue>
      </SPriceFilterInputRangeValueContainer>
      <SPriceFilter>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <SPriceFilterRangeContainer>
              <SPriceFilterRangeBackground
              {...props}
              style={{
                ...props.style,
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#df3d41", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </SPriceFilterRangeBackground>
            </SPriceFilterRangeContainer>
            
          )}
          renderThumb={({ props }) => (
            <SPriceFilterRangeThumb
              {...props}
              style={{
                ...props.style,
                cursor: "pointer"
              }}
            ></SPriceFilterRangeThumb>
          )}
        />
        <SPriceFilterInputsContainer>
          {/* <SPriceFilterInput type="text" value={values[0]} onChange={(e) => setValues([parseInt(e.target.value), values[1]])} />
          <SPriceFilterInput type="text" value={values[1]} onChange={(e) => setValues([values[0], parseInt(e.target.value)])}/> */}
          <SPriceFilterInput type="text"/>
          <SPriceFilterInput type="text"/>
          <SPriceFilterButton whileTap={{ scale: 0.98 }}>
            გაფილტრე
          </SPriceFilterButton>
        </SPriceFilterInputsContainer>
      </SPriceFilter>
    </SProductsFilter>
  );
};
