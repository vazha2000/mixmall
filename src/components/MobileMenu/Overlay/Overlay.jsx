import React from 'react'
import { SOverlay } from './Overlay.styled'

export const Overlay = ({isClicked, handleMobileMenuClick}) => {
  return (
    <SOverlay isClicked={isClicked}  onClick={handleMobileMenuClick}/>
  )
}
