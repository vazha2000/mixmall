import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { SLayout } from './Layout.styled'

export const Layout = ({children}) => {
  return (
    <SLayout>
      <Navbar />
      {children}
      <Footer />
    </SLayout>
  )
}