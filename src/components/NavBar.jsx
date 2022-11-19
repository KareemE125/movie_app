import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../css/NavBarStyle.css'


export default function NavBar({ resetAppRouter }) {

  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');

    // we navigate to '/' before resetting AppRouter
    // so that after resetting ww will have a vaild route '/' in the url to route to
    navigate('/');
    
    resetAppRouter();
  }


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
              <Link className="nav-link" to='/people'>People</Link>
            </li>
          </ul> : null
        }
        <ul className="navbar-nav px-2 ms-auto  mb-2 mb-lg-0">
          <form className="d-flex align-items-center" role="search">
            <input className="py-0 px-2 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className='d-flex align-items-center ms-3 me-2'>
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
                  <Link id='logout' className="nav-link" to='/' onClick={logout} >Logout</Link>
                </li>
              </>
          }

        </ul>
      </div>
    </div>
  </nav>
}
