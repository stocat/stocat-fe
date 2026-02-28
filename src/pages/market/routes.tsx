import { lazy } from "react";
import { RouteObject } from "react-router-dom";


const Market = lazy(() => import("./Market"));

export const marketRoutes: RouteObject[] = [
  {
    path: "market",
    element: <Market />,
  },
];
