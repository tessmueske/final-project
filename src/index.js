import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Home";
import About from "./About";
import Coffees from "./Coffees";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
           {
              path: "/",
              element: <Home />
          }, 
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/coffees",
              element: <Coffees />
          },
          {
              path: "/coffees/:id",
              element: <Coffee />
          },
          {
              path: "/coffees/new",
              element: <NewCoffee />
          }
      ]
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
