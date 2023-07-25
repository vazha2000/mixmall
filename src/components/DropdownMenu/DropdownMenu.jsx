import React from 'react'
import { SDropDownMenu, SMenuGridContainer, SMenuItems } from './DropdownMenu.styled';

export const DropdownMenu = ({item, topPosition}) => {
  
  return (
    <SDropDownMenu
      initial={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 1 }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, transition: {duration: 0.3, delay: 0.2} }} 
      exit={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 1, transition: {delay: 0.1, duration: 0.3}}} 
      transition={{type: "tween", duration: 0.4, delay: 0.1}}
      topPosition={topPosition}
    >
      <SMenuGridContainer>
        {item.subcategories.map((subcategory, index) => (
          <SMenuItems key={index}>{subcategory}</SMenuItems>
        ))}
      </SMenuGridContainer>
    </SDropDownMenu>    
  );
}
