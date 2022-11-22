import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';
import Tvs from './components/Tvs';
import People from './components/People';
import Movies from './components/Movies';
import Favorites from './components/Favorites';
import ItemDetails from './components/ItemDetails';
import jwtDecode from 'jwt-decode';
import User from './models/User';



const LOGIN_ROUTE = (resetAppRouter) => createBrowserRouter([
  {
    path: '/', element: <RootLayout resetAppRouter={resetAppRouter} />, children: [
      { index: true, element: <Login resetAppRouter={resetAppRouter} /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);

const HOME_ROUTE = (resetAppRouter) => createBrowserRouter([
  {
    path: '/', element: <RootLayout resetAppRouter={resetAppRouter} />, children: [
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


export default function App() {

  let [AppRouter, setAppRouter] = useState(createBrowserRouter([{ path: '/', element: <Loading /> }]));


  function resetAppRouter() {
    const token = localStorage.getItem('token');
    if (token) {
      setAppRouter(HOME_ROUTE(resetAppRouter));

      const decodeResult = jwtDecode(token);
      User.setUserData(token, decodeResult);

      //MoviesApiHelper.getAndSetUserFavorites().then(() => { console.log("Get & Set User Favorites") });
    }
    else { setAppRouter(LOGIN_ROUTE(resetAppRouter)); }
  }


  useEffect(() => {
    resetAppRouter();

    console.log("DID APP MOUNT");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log("DID APP UPDATE");
  }, [AppRouter]);


  return <RouterProvider router={AppRouter} />;
}