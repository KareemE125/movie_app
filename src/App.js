import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RootLayout from './components/RootLayout';
import Tvs from './components/Tvs';
import People from './components/People';
import Movies from './components/Movies';
import Favorites from './components/Favorites';
import ItemDetails from './components/ItemDetails';
import jwtDecode from 'jwt-decode';
import User from './models/User';
import { AuthContext } from './Context/AuthContext';



const LOGIN_ROUTE = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      { index: true, element: <Login/> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);

const HOME_ROUTE = createBrowserRouter([
  {
    path: '/', element: <RootLayout/>, children: [
      { index: true, element: <Home /> },
      { path: 'details/:type/:id', element: <ItemDetails /> },
      {
        path: '/movies', element: <Outlet></Outlet>,
        children: [
          { index: true, element: <Movies /> },
          { path: 'details/:type/:id', element: <ItemDetails /> },
        ]
      },
      {
        path: '/tvs', element: <Outlet></Outlet>,
        children: [
          { index: true, element: <Tvs /> },
          { path: 'details/:type/:id', element: <ItemDetails /> },
        ]
      },
      {
        path: '/people', element: <Outlet></Outlet>,
        children: [
          { index: true, element: <People /> },
          { path: 'details/:type/:id', element: <ItemDetails /> },
        ]
      },
      {
        path: '/favorites', element: <Outlet></Outlet>,
        children: [
          { index: true, element: <Favorites /> },
          { path: 'details/:type/:id', element: <ItemDetails /> },
        ]
      },
      { path: '*', element: <NotFound /> },
    ]
  }
]);


export default function App() 
{
//   const authContext = useContext(AuthContext);
  
//   function init() 
//   {
//     const token = localStorage.getItem('token');

//     if (token) 
//     {
//       const decodeResult = jwtDecode(token);
//       User.setUserData(token, decodeResult);
//       authContext.changeAuthStauts(true);
//     }
//     else { authContext.changeAuthStauts(false); }
//   }

  useEffect(() => {
    init();
    console.log('====================================');
    console.log("DID APP MOUNT");
    console.log('====================================');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

//  return <RouterProvider router={authContext.isLoggedIn? HOME_ROUTE: LOGIN_ROUTE} />
    return <RouterProvider router={HOME_ROUTE} />

}
