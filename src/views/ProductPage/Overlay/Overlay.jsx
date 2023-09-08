import React from 'react'
import { SOverlay } from './Overlay.styled'

export const Overlay = ({isClicked, setIsClicked}) => {
  const overlayVariants = {
    hidden: { opacity: 0},
    visible: {opacity: 1}
  }
  return (
    <SOverlay
    onClick={() => setIsClicked(null)}
    initial="hidden"
    animate={isClicked !== null ? "visible" : "hidden"}
    variants={overlayVariants}
    />
  )
}
