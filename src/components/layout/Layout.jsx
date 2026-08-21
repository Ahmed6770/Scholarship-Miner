import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTopButton />
    </div>
  )
}

export default Layout