import { RouteObject } from "react-router-dom";
import Home from "./Home";

export const marketRoutes: RouteObject[] = [
  {
    path: "home",
    element: <Home />,
  },
];
