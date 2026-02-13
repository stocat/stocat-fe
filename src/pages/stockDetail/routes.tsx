import { RouteObject } from "react-router-dom";
import StockDetail from "./StockDetail";

export const stockDetailRoutes: RouteObject[] = [
  {
    path: "stock/:stockId",
    element: <StockDetail />,
  },
];
