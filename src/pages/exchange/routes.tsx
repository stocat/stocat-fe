import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Exchange = lazy(() => import("./Exchange"));

export const exchangeRoutes: RouteObject[] = [
  {
    path: "exchange",
    element: <Exchange />,
  },
];
