import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../constats/Routes";
import App from "../App";
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: Routes.HOME, lazy: () => import("../pages/Home") },
      {
        path: Routes.CART,
        lazy: () => import("../pages/Cart"),
      },
    ],
  },
]);
