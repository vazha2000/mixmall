import React from 'react'
import { SOverlay } from './Overlay.styled'

export const Overlay = ({isClicked, setIsClicked}) => {
  const overlayVariants = {
    hidden: { opacity: 0},
    visible: {opacity: 1}
  }
  return (
    <SOverlay
    onClick={() => setIsClicked(false)}
    initial="hidden"
    animate={isClicked ? "visible" : "hidden"}
    variants={overlayVariants}
    />
  )
}
