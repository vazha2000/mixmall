import React, { useEffect, useState } from "react";
import {
  SSearchIcon,
  SSearchInput,
  SSearchInputContainer,
  SSearchProduct,
  SSearchProductImage,
  SSearchProductNameQuantity,
  SSearchProductPrice,
  SSearchedProducts,
} from "./SearchInput.styled";
import { categoriesListItems } from "../../data/data";

export const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = categoriesListItems
    .map((category) =>
      category.subcategories.flatMap((subcategory) =>
        subcategory.products.map((product) => [
          product.productName,
          category.categoryName,
          product.id,
          product.oldPrice,
          product.currentPrice,
          product.productImage,
        ])
      )
    )
    .flat();

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const searchProducts = () => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    setIsLoading(true);

    const queryWords = searchQuery.toLowerCase().split(" ");

    const filtered = allProducts.filter(
      ([productName, categoryName, id, oldPrice, currentPrice, productImage]) =>
        queryWords.every((word) => productName.toLowerCase().includes(word))
    );

    setTimeout(() => {
      setIsLoading(false);
      console.log(filtered.length)
    }, 500);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchProducts();
    }, 300); // Adjust the debounce delay as needed (in milliseconds)

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SSearchInputContainer isFocused={isFocused}>
      <SSearchInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchQuery}
      />
      <SSearchIcon src="../assets/svg/search.svg" alt="search icon" />
      <SSearchedProducts>
        {isLoading ? (
          <div>loadinggg</div>
        ) : (
          filteredProducts.map(
            (
              [
                productName,
                categoryName,
                productId,
                oldPrice,
                currentPrice,
                productImage,
              ],
              index
            ) => (
              <SSearchProduct key={index}>
                <SSearchProductImage src={productImage} alt={productName} />
                <SSearchProductNameQuantity>
                  <span>{productName}</span>
                  <span>Category: {categoryName}</span>
                </SSearchProductNameQuantity>
                <SSearchProductPrice>{currentPrice}</SSearchProductPrice>
              </SSearchProduct>
            )
          )
        )}
      </SSearchedProducts>
    </SSearchInputContainer>
  );
};
