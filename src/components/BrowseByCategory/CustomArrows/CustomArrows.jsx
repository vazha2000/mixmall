import React from 'react'
import { SCustomNextArrow, SCustromPrevArrow } from './CustomArrows.styled'

export const CustomPrevArrow = (props) => {
  const { onClick } = props
  return (
    <SCustromPrevArrow onClick={onClick}>
      <img src="assets/svg/arrowLeft.svg" alt="left arrow" />
    </SCustromPrevArrow>
  )
}

export const CustomNextArrow = (props) => {
  const { onClick } = props

  return (
    <SCustomNextArrow onClick={onClick}>
      <img src="assets/svg/arrowLeft.svg" alt="right arrow" />
    </SCustomNextArrow>
  )
}
