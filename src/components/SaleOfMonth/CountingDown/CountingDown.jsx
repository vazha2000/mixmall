import React from 'react'
import { SCountingDown, SCountingDownTimeContainer } from './CountingDown.styled'

export const CountingDown = () => {
  
  return (
    <SCountingDown>
            <SCountingDownTimeContainer>
              <span>Days</span>
              <h2>04</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Hours</span>
              <h2>11</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Minutes</span>
              <h2>30</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Seconds</span>
              <h2>20</h2>
            </SCountingDownTimeContainer>
          </SCountingDown>
  )
}
