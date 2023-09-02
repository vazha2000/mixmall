import React, { useEffect, useState } from "react";
import {
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

export const ProductsFilter = ({ minPrice, maxPrice, products, onFilterChange }) => {
  const [values, setValues] = useState([minPrice, maxPrice]);
  const STEP = 1;
  const MIN = 0;
  const MAX = maxPrice;


  useEffect(() => {
    setValues([0, maxPrice]);
  }, [0, maxPrice]);

  const filterByPrice = (minPrice, maxPrice) => {
    const filteredProducts = products.filter((product) => {
      const productPrice = product.currentPrice;
      return productPrice >= minPrice && productPrice <= maxPrice;
    });
    return filteredProducts;
  };

  const handleFilterClick = () => {
    const [minPrice, maxPrice] = values;
    const filteredProducts = filterByPrice(minPrice, maxPrice);
    onFilterChange(filteredProducts);
  };

  const handleInputChange = (index, newValue) => {
    // Parse the input value to an integer, or default to 0 if it's NaN
    const parsedValue = isNaN(parseInt(newValue)) ? 0 : parseInt(newValue);
    
    const newValues = [...values];
    newValues[index] = parsedValue;
    setValues(newValues);
  };

  return (
    <SProductsFilter>
      <SProductsFilterHeaderWrapper>
        <h2>გაფილტრე</h2>
      </SProductsFilterHeaderWrapper>
      <SPriceFilterInputRangeValueContainer>
        <SPriceFilterInputRangeValue>
          {values[0]}$ - {values[1]}$
        </SPriceFilterInputRangeValue>
      </SPriceFilterInputRangeValueContainer>
      <SPriceFilter>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(newValues) => {
            setValues(newValues);
          }}
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
                cursor: "pointer",
              }}
            ></SPriceFilterRangeThumb>
          )}
        />
        <SPriceFilterInputsContainer>
          <SPriceFilterInput
            type="text"
            value={values[0]}
            // onChange={(e) => setValues([parseInt(e.target.value), values[1]])}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
          <SPriceFilterInput
            type="text"
            value={values[1]}
            // onChange={(e) => setValues([values[0], parseInt(e.target.value)])}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
          <SPriceFilterButton whileTap={{ scale: 0.98 }} onClick={handleFilterClick}>
            გაფილტრე
          </SPriceFilterButton>
        </SPriceFilterInputsContainer>
      </SPriceFilter>
    </SProductsFilter>
  );
};
