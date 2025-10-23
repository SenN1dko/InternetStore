import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ROUTES from "../constants/Routes";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("../pages/Home"),
      },
      {
        path: ROUTES.CART,
        lazy: () => import("../pages/Cart"),
      },
    ],
  },
]);
