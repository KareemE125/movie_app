import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';
import Tvs from './components/Tvs';
import People from './components/People';
import Movies from './components/Movies';


const LOGIN_ROUTE = (resetAppRouter)=> createBrowserRouter([
  {
    path: '/', element: <RootLayout resetAppRouter={resetAppRouter} />, children: [
      { index: true, element: <Login resetAppRouter={resetAppRouter} /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);

const HOME_ROUTE = (resetAppRouter)=> createBrowserRouter([
  {
    path: '/', element: <RootLayout resetAppRouter={resetAppRouter}/>, children: [
      { index: true, element: <Home /> },
      { path: 'movie/:id', element: <MovieDetails /> },
      { path: 'movies', element: <Movies /> },
      { path: 'tvs', element: <Tvs /> },
      { path: 'people', element: <People /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);


export default function App() {

  let [AppRouter, setAppRouter] = useState( createBrowserRouter([{path: '/', element: <Loading/>}]) );


  function resetAppRouter() 
  {
    if (localStorage.getItem('token')) {  setAppRouter( HOME_ROUTE(resetAppRouter) );  }
    else{  setAppRouter( LOGIN_ROUTE(resetAppRouter) );  }
  }

  useEffect(() => {
    resetAppRouter();
    console.log("DID APP MOUNT");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{ console.log("DID APP UPDATE");  },[AppRouter]);

  return <RouterProvider router={AppRouter} />;
}