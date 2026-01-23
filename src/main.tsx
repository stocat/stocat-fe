import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes.tsx";

import "./shared/styles/global.css.ts";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
