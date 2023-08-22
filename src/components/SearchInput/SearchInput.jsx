import React, { useEffect, useState } from "react";
import {
  SSearchIcon,
  SSearchIconContainer,
  SSearchInput,
  SSearchInputContainer,
  SSearchProductBox,
  SSearchProductBoxImageContent,
  SSearchProductImage,
  SSearchProductNameQuantity,
  SSearchProductPrice,
  SSearchedProducts,
} from "./SearchInput.styled";
import { categoriesListItems } from "../../data/data";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { useRef } from "react";

export const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInputRef = useRef(null);

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
    if(searchQuery.trim() !== "") {
      searchProducts();
    }
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setIsLoading(false);
  };

  const searchProducts = () => {
    setIsLoading(true)
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }
    
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

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setIsFocused(false);
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <SSearchInputContainer ref={searchInputRef} isFocused={isFocused}>
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
        <tbody>
          {isLoading && searchQuery !== "" ? (
            <tr>
              <td>loading...</td>
            </tr>
          ) : filteredProducts.length === 0 && isFocused && searchQuery !== "" ? (
            <tr>
              <td>nothing found</td>
            </tr>
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
                <SSearchProductBox key={index}>
                  <SSearchProductBoxImageContent>
                    <SSearchProductImage
                      src={productImage[0]}
                      alt={productName}
                    />
                  </SSearchProductBoxImageContent>
                  <SSearchProductNameQuantity>
                    <SStyledLink
                      to={`/${categoryName}/${productId}/${productName}`}
                    >
                      <span>{productName}</span>
                    </SStyledLink>
                    <span>Category: {categoryName}</span>
                  </SSearchProductNameQuantity>
                  <SSearchProductPrice>{currentPrice}₾</SSearchProductPrice>
                </SSearchProductBox>
              )
            )
          )}
        </tbody>
      </SSearchedProducts>
    </SSearchInputContainer>
  );
};
