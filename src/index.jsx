import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Movies from './components/Movies';
import Movie from './components/Movie';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <div className="container">
      <Menu/>
      <main>
        <Outlet/>
      </main>

    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/reviews',
        element: <Reviews/>
      },
      {
        path: '/articles',
        element: <Articles/>
      },
      {
        path: '/movies',
        element: <Movies/>,
        children:[
          {
            path: '/movies/:id',
            element: <Movie/>
          }
        ]
      }
    ]
  }
])


createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router = {router}/>
);
