import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'


export default function RootLayout({ resetAppRouter })
{

  return <>
    <NavBar resetAppRouter={resetAppRouter} />
    <div className='mx-3 mx-lg-5'>
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
