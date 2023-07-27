import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './views/MainPage'
import { Subcategories } from './views/SubCategories'
import { Layout } from './components/Layout/Layout'
import { categoriesListItems } from './data/data'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        {categoriesListItems.map((category, index) => {
          return <Route key={index} path={category.categoryName} >
            {category.subcategories.map((subcategory, index) => (
              <Route 
              key={index}
              path={`${subcategory.subcategoryName}`}
              element={<Subcategories item={subcategory}/>}
              />
            ))}
          </Route>
        })}
      </Routes>
    </Layout>
  )
}

export default App
