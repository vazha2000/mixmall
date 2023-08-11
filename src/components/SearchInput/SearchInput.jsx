import React, { useEffect, useRef, useState } from "react";
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
  const searchRef = useRef(null);

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
    searchProducts();
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

    const renderTenProducts = filtered.slice(0, 10);
    setFilteredProducts(renderTenProducts);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredProducts([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchProducts();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SSearchInputContainer ref={searchRef} isFocused={isFocused}>
      <SSearchInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchQuery}
      />
      <SSearchIcon src="../assets/svg/search.svg" alt="search icon" />
      <SSearchedProducts filteredProducts={filteredProducts.length === 0}>
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
