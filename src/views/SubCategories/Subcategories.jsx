import React, { useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { SSubcategories, SSubcategoriesBreadcrumbs, SSubcategoriesProducts, SSubcategoriesSidebarContainer } from './Subcategories.styled'
import { Card } from '../../components/Card'
import { categoriesListItems, testProducts } from '../../data/data'

export const Subcategories = ({item}) => {
  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates
    })
  }

  console.log(item.products)
  return (
    <SSubcategories>
      <SSubcategoriesBreadcrumbs>
        {item.name}
      </SSubcategoriesBreadcrumbs>
      <div style={{display: "flex"}}>
        <SSubcategoriesSidebarContainer>
          <Sidebar />
        </SSubcategoriesSidebarContainer>
        <SSubcategoriesProducts>
          {item.products.map((card, index) => {
            return <Card 
            key={index}
            productImage={card.productImage}
            discountRate={card.discountRate}
            isDiscount={card.isDiscount}
            productName={card.productName}
            currentPrice={card.currentPrice}
            oldPrice={card.oldPrice}
            alt={card.alt}
            handleHover={() => handleHover(index)}
            isHovered={hoverStates[index]}
            />
          })}
        </SSubcategoriesProducts>
      </div>
    </SSubcategories>
  )
}