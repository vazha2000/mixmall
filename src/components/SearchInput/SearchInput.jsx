import React, { useContext, useEffect, useState } from "react";
import {
  SLoadingResult,
  SSearchButtonContainer,
  SSearchIcon,
  SSearchIconContainer,
  SSearchInput,
  SSearchInputContainer,
  SSearchProductBox,
  SSearchProductBoxImageContent,
  SSearchProductImage,
  SSearchProductName,
  SSearchProductNameQuantity,
  SSearchProductPrice,
  SSearchedProducts,
  SShowAllProducts,
  SShowAllProductsButton,
} from "./SearchInput.styled";
import { categoriesListItems } from "../../data/data";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { useRef } from "react";
import { AllFoundProductsContext } from "../../context/AllFoundProductsContext";

export const SearchInput = ({setIsMobileSearchClicked, isMobileSearchClicked, windowWidth}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInputRef = useRef(null);

  const { allFoundProducts, setAllFoundProducts } = useContext(
    AllFoundProductsContext
  );

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
          product.isDiscount,
          product.discountRate,
          product.alt,
          product.id
        ])
      )
    )
    .flat();

  const handleFocus = () => {
    if (searchQuery.trim() !== "") {
      searchProducts();
    }
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setIsLoading(false);
  };

  const searchProducts = () => {
    setIsLoading(true);
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const queryWords = searchQuery.toLowerCase().split(" ");

    // const filtered = allProducts.filter(
    //   ([productName, categoryName, id, oldPrice, currentPrice, productImage]) =>
    //     queryWords.every((word) => productName.toLowerCase().includes(word))
    // );

    const filtered = allProducts.filter(
      ([productName, categoryName, id, oldPrice, currentPrice, productImage]) =>
        queryWords.every((word) =>
          productName.toLowerCase().split(" ").includes(word)
        )
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const renderTenProducts = filtered.slice(0, 10);
    setFilteredProducts(renderTenProducts);
    setAllFoundProducts(filtered);
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

  const handleClickProduct = () => {
    setIsFocused(false);
    setFilteredProducts([]);
    if(windowWidth < 576) {
      setIsMobileSearchClicked(false)
    }
  };

  return (
    <SSearchInputContainer ref={searchInputRef}>
      <SSearchIconContainer>
        <img src="assets/svg/search.svg" alt="search icon" />
      </SSearchIconContainer>
      <SSearchInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search For Products"
      />
      <SSearchButtonContainer>
        <span>SEARCH</span>
        <img src="assets/svg/search.svg" alt="search" />
      </SSearchButtonContainer>
      <SSearchedProducts filteredProducts={filteredProducts.length === 0}>
        <tbody>
          {isLoading && searchQuery !== "" ? (
            <SLoadingResult>
              <td>SEARCHING...</td>
            </SLoadingResult>
          ) : filteredProducts.length === 0 &&
            isFocused &&
            searchQuery !== "" ? (
            <SLoadingResult>
              <td>NOTHING WAS FOUND</td>
            </SLoadingResult>
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
                <React.Fragment key={index}>
                  <SSearchProductBox>
                    <SSearchProductBoxImageContent>
                      <SSearchProductImage
                        src={productImage[0]}
                        alt={productName}
                      />
                    </SSearchProductBoxImageContent>
                    <SSearchProductNameQuantity>
                      <SStyledLink
                        to={`/${categoryName}/${productId}/${productName}`}
                        onClick={handleClickProduct}
                      >
                        <SSearchProductName>{productName}</SSearchProductName>
                      </SStyledLink>
                      <span>Category: {categoryName}</span>
                      <span>ფასი: {currentPrice}</span>
                    </SSearchProductNameQuantity>
                    <SSearchProductPrice>{currentPrice}₾</SSearchProductPrice>
                  </SSearchProductBox>

                  {allFoundProducts.length > 0 && (
                    <SShowAllProducts
                      isLast={index === filteredProducts.length - 1}
                    >
                      <td>
                        <SStyledLink
                          to={`/search-products`}
                          onClick={handleClickProduct}
                        >
                          <SShowAllProductsButton onClick={isMobileSearchClicked && (() => setIsMobileSearchClicked(false))}>
                            VIEW ALL
                          </SShowAllProductsButton>
                        </SStyledLink>
                      </td>
                    </SShowAllProducts>
                  )}
                </React.Fragment>
              )
            )
          )}
        </tbody>
      </SSearchedProducts>
    </SSearchInputContainer>
  );
};
