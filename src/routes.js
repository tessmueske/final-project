import App from './App';
import About from "./About";
import Coffees from "./Coffees";
import NewCoffee from "./NewCoffee";
import ErrorPage from "./ErrorPage";
import Home from "./Home"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "/home",
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
                path: "/coffees/new",
                element: <NewCoffee />
            }
        ]
    }
];

export default routes;