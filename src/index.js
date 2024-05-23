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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/coffees",
    element: <Coffees />,
    errorElement: <ErrorPage />
  },
  {
    path: "/coffees/:id",
    element: <Coffee />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/coffees/new",
    element: <NewCoffee />,
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
