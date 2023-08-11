import React, { useState } from "react";
import {
  SSearchIcon,
  SSearchInput,
  SSearchInputContainer,
  SSearchedProducts,
} from "./SearchInput.styled";
import {
  SCheckoutProduct,
  SCheckoutProductImg,
  SCheckoutProductNameQuantity,
  SCheckoutProductTotal,
} from "../../views/Checkout/Checkout.styled";
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

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = allProducts.filter(([productName, categoryName, id, oldPrice, currentPrice, productImage]) =>
      productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
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
        {filteredProducts.map(([productName, categoryName, productId, oldPrice, currentPrice, productImage], index) => (
          <SCheckoutProduct key={index}>
          <SCheckoutProductImg src={productImage} alt={productName} />
          <SCheckoutProductNameQuantity>
            <span>{productName}</span>
            <span>Category: {categoryName}</span>
          </SCheckoutProductNameQuantity>
          <SCheckoutProductTotal>
            {currentPrice}
          </SCheckoutProductTotal>
        </SCheckoutProduct>
        ))}
        
      </SSearchedProducts>
    </SSearchInputContainer>
  );
};
