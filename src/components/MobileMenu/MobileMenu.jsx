import React from 'react'
import { SMobileMenu, SMobileMenuCategories, SMobileMenuCategoriesList, SMobileMenuTitle, STitleCloseButton } from './MobileMenu.styled'

export const MobileMenu = () => {
  return (
    <SMobileMenu>
      <STitleCloseButton>
        <SMobileMenuTitle>კატეგორიები</SMobileMenuTitle>
        <img src="assets/svg/close.svg" alt="close icon" />
      </STitleCloseButton>
      <SMobileMenuCategories>
        <SMobileMenuCategoriesList>
          <span>კატეგორიები</span>
          <img src="assets/svg/vectorDown.svg" alt="vector down" />
        </SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>მთავარი</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>ONLINE განვადება</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>კონტაქტი</SMobileMenuCategoriesList>
      </SMobileMenuCategories>
    </SMobileMenu>
  )
}
