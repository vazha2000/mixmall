import React from 'react'
import { SCartInfoOverlay } from './CartInfoOverlay.styled'

export const CartInfoOverlay = ({isCartClicked, handleCartClick}) => {
  const overlayVariants = {
    hidden: { opacity: 0},
    visible: {opacity: 1}
  }
  return (
    <SCartInfoOverlay
    onClick={handleCartClick}
    initial="hidden"
    animate={isCartClicked ? "visible" : "hidden"}
    exit="hidden"
    variants={overlayVariants}
    />
  )
}
