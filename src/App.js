import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react';
import RootLayout from './components/RootLayout';
import Loading from './components/Loading';


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