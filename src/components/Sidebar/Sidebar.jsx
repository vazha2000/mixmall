import React from 'react'
import { SSideBarCategories, SSideBarCategoriesList, SSidebarContainer } from './Sidebar.styled'

export const Sidebar = () => {
  return (
    <SSidebarContainer>
      <SSideBarCategories>
        <SSideBarCategoriesList>კომპიუტერული ტექნიკა</SSideBarCategoriesList>
        <SSideBarCategoriesList>მსხვილი საყოფაცხოვრებო ტექნიკა</SSideBarCategoriesList>
        <SSideBarCategoriesList>წვრილი საყოფაცხოვრებო ტექნიკა</SSideBarCategoriesList>
        <SSideBarCategoriesList>ხელსაწყო ინსტრუმენტები</SSideBarCategoriesList>
        <SSideBarCategoriesList>მობილური ტელეფონები</SSideBarCategoriesList>
        <SSideBarCategoriesList>თავის მოვლის საშუალებები</SSideBarCategoriesList>
        <SSideBarCategoriesList>სპორტი და გართობა</SSideBarCategoriesList>
        <SSideBarCategoriesList>გათბობა და გაგრილება</SSideBarCategoriesList>
        <SSideBarCategoriesList>საბავშვო ინვენტარი</SSideBarCategoriesList>
        <SSideBarCategoriesList>სამზარეულოს ტექნიკა</SSideBarCategoriesList>
        <SSideBarCategoriesList>ინტერიერი და ავეჯი</SSideBarCategoriesList>
        <SSideBarCategoriesList>სამშენებლო მასალები</SSideBarCategoriesList>
        <SSideBarCategoriesList>ავტომობილების განყოფილება</SSideBarCategoriesList>
      </SSideBarCategories>
    </SSidebarContainer>
  )
}
