import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Header isMain={true}></Header>
      <Outlet />
    </>
  )
}

export default Layout
