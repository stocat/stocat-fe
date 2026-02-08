import { RouteObject } from "react-router-dom";
import Market from "./Market";

export const marketRoutes: RouteObject[] = [
  {
    path: "market",
    element: <Market />,
  },
];
