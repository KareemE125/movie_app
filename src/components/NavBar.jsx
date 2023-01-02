import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

import '../css/NavBarStyle.css'
import User from '../models/User';


export default function NavBar() {

  let navigate = useNavigate();
  const {changeAuthStauts} = useContext(AuthContext);

  function logout() {
    localStorage.removeItem('token');
    User.clear();
    // we navigate to '/' before resetting AppRouter
    // so that after resetting ww will have a vaild route '/' in the url to route to
    navigate('/');

    changeAuthStauts(false);
  }


  return <nav className="navbar navbar-expand-lg">
    <div className="container-fluid px-4">
      <NavLink id='logo' className="navbar-brand" to='/'>Movies125</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className='fa fa-bars'></i>
      </button>
      <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
        {
//          localStorage.getItem('token') &&
          <ul className="navbar-nav px-2 ms-lg-3 mb-2 me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/movies'>Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/tvs'>TVs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/people'>People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/favorites'>Favorites</NavLink>
            </li>
          </ul>
        }
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <div className="d-flex justify-content-end align-items-center flex-wrap">
            <form className="d-flex align-items-center me-3 col-xl-7 col-lg-6" role="search">
              <input className="py-0 px-2 bg-transparent text-white w-100" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className='d-flex align-items-center py-2 pt-3 py-lg-0 pt-lg-2'>
              <a className='text-decoration-none me-3' target="_blank" href="/"> <i className='fa-brands fa-facebook-f'></i> </a>
              <a className='text-decoration-none me-3' target="_blank" href="/"> <i className='fa-brands fa-github'></i> </a>
              <a className='text-decoration-none me-3' target="_blank" href="/"> <i className='fa-brands fa-instagram'></i> </a>
              <a className='text-decoration-none me-3' target="_blank" href="/"> <i className='fa-brands fa-youtube'></i> </a>
            </div>
          </div>
          {/* {
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
          } */}

        </ul>
      </div>
    </div>
  </nav>
}
