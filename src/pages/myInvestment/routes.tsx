import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const MyInvestment = lazy(() => import("./MyInvestment"));

export const myInvestmentRoutes: RouteObject[] = [
  {
    path: "my-investment",
    element: <MyInvestment />,
  },
];
