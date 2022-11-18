import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';

import App from './App';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'





const AppRouter = createBrowserRouter([
  {path: '/', element: <App/>, children:[
    {index: true, element: <Home/>},
    {path:'login', element: <Login/>},
    {path:'register', element: <Register/>},
    {path:'movie/:id', element: <MovieDetails/>},
    {path:'*', element: <NotFound/>},
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={AppRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
