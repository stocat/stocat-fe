import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ColorTestPage = lazy(() => import("./ColorTestPage"));

export const testRoutes: RouteObject[] = [
  {
    path: "test/color",
    element: <ColorTestPage />,
  },
];
