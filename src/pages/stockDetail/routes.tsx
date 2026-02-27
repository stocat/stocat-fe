import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const StockDetail = lazy(() => import("./StockDetail"));

export const stockDetailRoutes: RouteObject[] = [
  {
    path: "stock/:stockId",
    element: <StockDetail />,
  },
];
