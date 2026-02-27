import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { testRoutes } from "@/pages/test/routes";
import { HomeRoutes } from "@/pages/home/routes";
import { marketRoutes } from "@/pages/market/routes";
import { stockDetailRoutes } from "@/pages/stockDetail/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...testRoutes,
      ...HomeRoutes,
      ...marketRoutes,
      ...stockDetailRoutes,
    ],
  },
]);
