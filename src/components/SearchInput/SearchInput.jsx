import React, { useContext, useEffect, useState } from "react";
import {
  SLoadingResult,
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
  SShowAllProducts,
  SShowAllProductsButton,
} from "./SearchInput.styled";
import { categoriesListItems } from "../../data/data";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { useRef } from "react";
import { AllFoundProductsContext } from "../../context/AllFoundProductsContext";

export const SearchInput = () => {
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
  };

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
            <SLoadingResult>
              <td>loading...</td>
            </SLoadingResult>
          ) : filteredProducts.length === 0 &&
            isFocused &&
            searchQuery !== "" ? (
            <SLoadingResult>
              <td>ვერაფერი მოიძებნა</td>
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
                        <span>{productName}</span>
                      </SStyledLink>
                      <span>Category: {categoryName}</span>
                    </SSearchProductNameQuantity>
                    <SSearchProductPrice>{currentPrice}₾</SSearchProductPrice>
                  </SSearchProductBox>

                  {allFoundProducts.length > 10 && (
                    <SShowAllProducts
                      isLast={index === filteredProducts.length - 1}
                    >
                      <td>
                        <SStyledLink
                          to={`/search-products`}
                          onClick={handleClickProduct}
                        >
                          <SShowAllProductsButton>
                            ყველას ნახვა
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
