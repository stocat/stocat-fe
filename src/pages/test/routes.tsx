import { RouteObject } from "react-router-dom";
import ColorTestPage from "./ColorTestPage";

export const testRoutes: RouteObject[] = [
  {
    path: "test/color",
    element: <ColorTestPage />,
  },
];
