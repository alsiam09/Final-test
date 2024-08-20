import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Rootlayout