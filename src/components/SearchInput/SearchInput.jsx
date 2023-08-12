import React, { useEffect, useState } from "react";
import {
  SSearchIcon,
  SSearchIconContainer,
  SSearchInput,
  SSearchInputContainer,
  SSearchProduct,
  SSearchProductImage,
  SSearchProductNameQuantity,
  SSearchProductPrice,
  SSearchedProducts,
} from "./SearchInput.styled";
import { categoriesListItems } from "../../data/data";
import { Link } from "react-router-dom";

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
          subcategory.subcategoryName,
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
    // setFilteredProducts([]);
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
    }, 500);

    const renderTenProducts = filtered.slice(0, 10);
    setFilteredProducts(renderTenProducts);
  };

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
    <SSearchInputContainer isFocused={isFocused}>
      <SSearchInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchQuery}
        placeholder="პროდუქტების ძიება"
      />
      <SSearchIconContainer>
        <SSearchIcon src="../assets/svg/search.svg" alt="search icon" />
      </SSearchIconContainer>
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
                  <Link to={`/${categoryName}/${productId}/${productName}`}>
                    <span>{productName}</span>
                  </Link>
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
