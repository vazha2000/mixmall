import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./views/MainPage";
import { Subcategories } from "./views/SubCategories";
import { Layout } from "./components/Layout/Layout";
import { categoriesListItems } from "./data/data";
import { ProductPage } from "./views/ProductPage/ProductPage";
import { WishlistProvider } from "./context/WishlistContext";
import { Wishlist } from "./views/Wishlist";
import { CheckoutProvider } from "./context/CheckoutContext";
import { Checkout } from "./views/Checkout";

function App() {
  return (
    <WishlistProvider>
      <CheckoutProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {categoriesListItems.map((category, index) => {
              return (
                <Route key={index} path={category.categoryName}>
                  {category.subcategories.map((subcategory, index) => (
                    <Route
                      key={index}
                      path={`${subcategory.subcategoryName}`}
                      element={<Subcategories item={subcategory} />}
                    />
                  ))}
                  {category.subcategories.map((subcategory, index) =>
                    subcategory.products.map((product) => (
                      <Route
                        key={index}
                        path={`${subcategory.subcategoryName}/${product.productName}`}
                        element={<ProductPage product={product} />}
                      />
                    ))
                  )}
                </Route>
              );
            })}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </Layout>
      </CheckoutProvider>
    </WishlistProvider>
  );
}

export default App;
