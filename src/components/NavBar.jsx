import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../css/NavBarStyle.css'


export default function NavBar() 
{

  useEffect(() => {
    const links = document.getElementsByClassName('nav-link');
    for (let i = 0; i < links.length; i++) {
      if (window.location.href.endsWith(links[i].innerHTML)) {
        links[i].classList.add('active');
      }

      links[i].addEventListener('click', () => {
        for (let j = 0; j < links.length; j++) {
          links[j].classList.remove('active');
        }
        links[i].classList.add('active');
      })
    }

    document.getElementById('logo').addEventListener('click', (e) => {
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
      }
    })

  }, [])

  return <nav className="navbar navbar-expand-lg  px-4">
    <div className="container-fluid">
      <Link id='logo' className="navbar-brand" to='/'>Movies125</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className='fa fa-bars'></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav px-2 ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/'>Link</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control py-0 px-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn" type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
    </div>
  </nav>
}
