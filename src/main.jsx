import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './routes/Home/Home.jsx';
import Products from './routes/Products/Products.jsx'
import Contact from './routes/Contact/Contact.jsx';

import Error from './routes/Error/Error.jsx';

import './index.css'


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/contact", element: <Contact /> },

    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
