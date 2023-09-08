import React from 'react'
import { SOverlay } from './Overlay.styled'

export const Overlay = ({isClicked, handleMobileMenuClick}) => {
  const overlayVariants = {
    hidden: { opacity: 0},
    visible: {opacity: 1}
  }
  return (
    <SOverlay
    onClick={handleMobileMenuClick}
    initial="hidden"
    animate={isClicked ? "visible" : "hidden"}
    exit="hidden"
    variants={overlayVariants}
    />
  )
}
