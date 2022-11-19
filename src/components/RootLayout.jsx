import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

export default function RootLayout({resetAppRouter}) 
{

    return <>
        <NavBar resetAppRouter={resetAppRouter} />
        <Outlet></Outlet>
        <Footer />
    </>
}
