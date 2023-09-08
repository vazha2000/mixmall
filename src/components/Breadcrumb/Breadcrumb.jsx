import React from 'react'
import { SBreadCrumb } from './Breadcrumb.styled'
import { Link, useLocation } from 'react-router-dom'

export const Breadcrumb = () => {

  const location = useLocation();

  console.log(location)
  return (
    <SBreadCrumb>
       pp
    </SBreadCrumb>
  )
}
