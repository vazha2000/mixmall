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
  const MIN = minPrice;
  const MAX = maxPrice;


  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

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
            onChange={(e) => setValues([parseInt(e.target.value), values[1]])}
          />
          <SPriceFilterInput
            type="text"
            value={values[1]}
            onChange={(e) => setValues([values[0], parseInt(e.target.value)])}
          />
          <SPriceFilterButton whileTap={{ scale: 0.98 }} onClick={handleFilterClick}>
            გაფილტრე
          </SPriceFilterButton>
        </SPriceFilterInputsContainer>
      </SPriceFilter>
    </SProductsFilter>
  );
};
