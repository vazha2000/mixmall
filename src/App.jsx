import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./views/MainPage";
import { Subcategories } from "./views/SubCategories";
import { Layout } from "./components/Layout/Layout";
import { categoriesListItems } from "./data/data";
import { ProductPage } from "./views/ProductPage/ProductPage";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <WishlistProvider>
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
        </Routes>
      </Layout>
    </WishlistProvider>
  );
}

export default App;
