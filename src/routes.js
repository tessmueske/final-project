import App from './App';
import Home from "./Home";
import About from "./About";
import Coffees from "./Coffees";
import Coffee from "./Coffee";
import NewCoffee from "./NewCoffee";
import ErrorPage from "./ErrorPage";

const routes = [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
      },
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
        errorElement: <ErrorPage />
      },
      {
        path: "/coffees/new",
        element: <NewCoffee />,
        errorElement: <ErrorPage />
      }
    ]

export default routes;
