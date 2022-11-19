import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../css/NavBarStyle.css'


export default function NavBar({ resetAppRouter }) {

  useEffect(() => {
    const links = document.getElementsByClassName('nav-link');
    let hadActiveLink = false;

    for (let i = 0; i < links.length; i++) {
      if (window.location.href.endsWith(links[i].innerHTML.toLowerCase())) {
        links[i].classList.add('active');
        hadActiveLink = true;
      }

      links[i].addEventListener('click', () => {
        console.log(links[i].innerHTML);
        if (links[i].innerHTML.toLowerCase() === 'logout') { return; }
        for (let j = 0; j < links.length; j++) { links[j].classList.remove('active'); }
        links[i].classList.add('active');
      })
    }

    if (!hadActiveLink) { links[0].classList.add('active'); }

    document.getElementById('logo').addEventListener('click', () => {
      for (let j = 0; j < links.length; j++) { links[j].classList.remove('active'); }
      links[0].classList.add('active');
    });

  }, [])

  return <nav className="navbar navbar-expand-lg">
    <div className="container-fluid px-4">
      <Link id='logo' className="navbar-brand" to='/'>Movies125</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className='fa fa-bars'></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {    
          localStorage.getItem('token') ? <ul className="navbar-nav px-2 ms-lg-3 mb-2 me-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/movies'>Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/tvs'>TVs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/people'>Poeple</Link>
            </li>
          </ul> : null
        }
        <ul className="navbar-nav px-2  mb-2 mb-lg-0">
          <form className="d-flex align-items-center" role="search">
            <input className="py-0 px-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className='d-flex align-items-center mx-3'>
            <a className='text-decoration-none mx-2' target="_blank" href="/"> <i className='fa-brands fa-facebook-f'></i> </a>
            <a className='text-decoration-none mx-2' target="_blank" href="/"> <i className='fa-brands fa-github'></i> </a>
            <a className='text-decoration-none mx-2' target="_blank" href="/"> <i className='fa-brands fa-instagram'></i> </a>
            <a className='text-decoration-none mx-2' target="_blank" href="/"> <i className='fa-brands fa-youtube'></i> </a>
          </div>
          {
            !localStorage.getItem('token') ? <>
              <li className="nav-item">
                <Link className="nav-link" to='/'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
              </li>
            </>
            : <>
              <li className="nav-item">
                <Link className="nav-link" to='/' onClick={() => { localStorage.getItem('token') ? localStorage.clear() : localStorage.setItem('token', '0'); resetAppRouter() }}>Logout</Link>
              </li>
            </>
          }
        </ul>
      </div>
    </div>
  </nav>
}
