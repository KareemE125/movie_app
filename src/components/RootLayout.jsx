import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'


export default function RootLayout({ resetAppRouter }) {
  const links = document.getElementsByClassName('nav-link');

  let locationURL = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { refreshNavBar(); }, [locationURL])

  // we refresh to add NavBar slecting links coloring animations
  function refreshNavBar() {
    let isHomeLink = true;

    for (let i = 0; i < links.length; i++) { links[i]?.classList.remove('active'); }

    for (let i = 0; i < links.length; i++) {
      if (window.location.href.startsWith(('http://localhost:3000/'|'https://kareeme125.github.io/movie_app/')+links[i]?.innerHTML.toLowerCase())) {
        links[i]?.classList.add('active');
        isHomeLink = false;
      }

      if (links[i]?.innerHTML.toLowerCase() === 'logout') { links[i]?.classList.remove('active'); }
    }

    if (isHomeLink) { links[0]?.classList.add('active'); }
  }

  return <>
    <NavBar resetAppRouter={resetAppRouter} />
    <div className='mx-3 mx-lg-5'>
      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
