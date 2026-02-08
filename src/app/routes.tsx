import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { testRoutes } from "@/pages/test/routes";
import { marketRoutes } from "@/pages/market/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...testRoutes, ...marketRoutes],
  },
]);
