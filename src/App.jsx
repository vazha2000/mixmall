import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './views/MainPage'
import { Subcategories } from './views/SubCategories'
import { Layout } from './components/Layout/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/subcategories' element={<Subcategories />}/>
      </Routes>
    </Layout>
  )
}

export default App
