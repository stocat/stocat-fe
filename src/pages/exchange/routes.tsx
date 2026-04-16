import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Exchange = lazy(() => import("./Exchange"));
const ExchangeBuy = lazy(() => import("./buy/ExchangeBuy"));

export const exchangeRoutes: RouteObject[] = [
  {
    path: "exchange",
    element: <Exchange />,
  },
  {
    path: "exchange/buy",
    element: <ExchangeBuy />,
  },
];
