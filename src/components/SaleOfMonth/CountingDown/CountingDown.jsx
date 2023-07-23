import React, { useEffect, useState } from 'react'
import { SCountingDown, SCountingDownTimeContainer } from './CountingDown.styled'

export const CountingDown = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const saleEndDate = new Date("2023-07-28T21:00:00").getTime()

  useEffect(() => {
    const updateCountDown = () => {
      const now = new Date().getTime();
      const timeDifference = saleEndDate - now;

      if(timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds
        })
      }
    }

    const countdownInterval = setInterval(updateCountDown, 1000);

    return () => clearInterval(countdownInterval)
  }, [])

  return (
    <SCountingDown>
            <SCountingDownTimeContainer>
              <span>Days</span>
              <h2>{remainingTime.days.toString().padStart(2, '0')}</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Hours</span>
              <h2>{remainingTime.hours.toString().padStart(2, '0')}</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Minutes</span>
              <h2>{remainingTime.minutes.toString().padStart(2, '0')}</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>Seconds</span>
              <h2>{remainingTime.seconds.toString().padStart(2, '0')}</h2>
            </SCountingDownTimeContainer>
          </SCountingDown>
  )
}
